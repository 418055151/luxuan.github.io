
//自定义hashtable
function Hashtable() {
    this._hash = new Object();
    this.put = function(key, value) {
        if (typeof (key) != "undefined") {
            if (this.containsKey(key) == false) {
                this._hash[key] = typeof (value) == "undefined" ? null : value;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    this.remove = function(key) { delete this._hash[key]; }
    this.size = function() { let i = 0; for (let k in this._hash) { i++; } return i; }
    this.get = function(key) { return this._hash[key]; }
    this.containsKey = function(key) { return typeof (this._hash[key]) != "undefined"; }
    this.clear = function() { for (let k in this._hash) { delete this._hash[k]; } }
}


let emotions = new Array();
let categorys = new Array();// 分组
let uSinaEmotionsHt = new Hashtable();

// 初始化缓存，页面仅仅加载一次就可以了
$(function() {
    let app_id = '1362404091';
    $.ajax( {
        dataType : 'jsonp',
        url : 'https://api.weibo.com/2/emotions.json?source=' + app_id,
        // url : '../../public/lib/comments/emotions.json',
        success : function(response) {
            console.log(response)
            let data = response.data;
            for ( let i in data) {
                if (data[i].category == '') {
                    data[i].category = '默认';
                }
                if (emotions[data[i].category] == undefined) {
                    emotions[data[i].category] = new Array();
                    categorys.push(data[i].category);
                }
                emotions[data[i].category].push( {
                    name : data[i].phrase,
                    icon : data[i].icon
                });
                uSinaEmotionsHt.put(data[i].phrase, data[i].icon);
            }
        }
    });
});

//替换
function AnalyticEmotion(s) {
    if(typeof (s) != "undefined") {
        let sArr = s.match(/\[.*?\]/g);
        if(null!=sArr && '' != sArr){
            for(let i = 0; i < sArr.length; i++){
                if(uSinaEmotionsHt.containsKey(sArr[i])) {
                    let reStr = "<img src=\"" + uSinaEmotionsHt.get(sArr[i]) + "\" height=\"22\" width=\"22\" />";
                    s = s.replace(sArr[i], reStr);
                }
            }
        }

    }
    return s;
}

(function($){
    $.fn.SinaEmotion = function(target){
        let cat_current;
        let cat_page;
        $(this).click(function(event){
            event.stopPropagation();
            let eTop = target.offset().top + target.height() + 15;
            let eLeft = target.offset().left - 1;

            if($('#emotions .categorys')[0]){
                $('#emotions').css({top: eTop, left: eLeft});
                $('#emotions').toggle();
                return;
            }
            $('body').append('<div id="emotions"></div>');
            $('#emotions').css({top: eTop, left: eLeft});
            $('#emotions').html('<div>正在加载，请稍候...</div>');
            $('#emotions').click(function(event){
                event.stopPropagation();
            });
            $('#emotions').html('<div style="float:right"><a href="javascript:void(0);" id="prev">&laquo;</a><a href="javascript:void(0);" id="next">&raquo;</a></div><div class="categorys"></div><div class="container"></div>');
            $('#emotions #prev').click(function(){
                showCategorys(cat_page - 1);
            });
            $('#emotions #next').click(function(){
                showCategorys(cat_page + 1);
            });
            showCategorys();
            showEmotions();

        });
        $('body').click(function(){
            $('#emotions').remove();
        });
        $.fn.insertText = function(text){
            this.each(function() {
                if(this.tagName !== 'INPUT' && this.tagName !== 'TEXTAREA') {return;}
                if (document.selection) {
                    this.focus();
                    let cr = document.selection.createRange();
                    cr.text = text;
                    cr.collapse();
                    cr.select();
                }else if (this.selectionStart || this.selectionStart == '0') {
                    let
                        start = this.selectionStart,
                        end = this.selectionEnd;
                    this.value = this.value.substring(0, start)+ text+ this.value.substring(end, this.value.length);
                    this.selectionStart = this.selectionEnd = start+text.length;
                }else {
                    this.value += text;
                }
            });
            return this;
        }
        function showCategorys(){
            let page = arguments[0]?arguments[0]:0;
            if(page < 0 || page >= categorys.length / 5){
                return;
            }
            $('#emotions .categorys').html('');
            cat_page = page;
            for(let i = page * 5; i < (page + 1) * 5 && i < categorys.length; ++i){
                $('#emotions .categorys').append($('<a href="javascript:void(0);">' + categorys[i] + '</a>'));
            }
            $('#emotions .categorys a').click(function(){
                showEmotions($(this).text());
            });
            $('#emotions .categorys a').each(function(){
                if($(this).text() == cat_current){
                    $(this).addClass('current');
                }
            });
        }
        function showEmotions(){
            let category = arguments[0]?arguments[0]:'默认';
            let page = arguments[1]?arguments[1] - 1:0;
            $('#emotions .container').html('');
            cat_current = category;
            for(let i = 0;  i < emotions[category].length; ++i){
                $('#emotions .container').append($('<a href="javascript:void(0);" title="' + emotions[category][i].name + '"><img src="' + emotions[category][i].icon + '" alt="' + emotions[category][i].name + '" width="22" height="22" /></a>'));
            }
            $('#emotions .container a').click(function(){
                target.insertText($(this).attr('title'));
                $('#emotions').remove();
                let $this = $(target),
                    _val = $this.val(),
                    jspllimit = $(target).parent().find('.js-pl-limit'),
                    count = "",
                    regx = /<[^>]*>|<\/[^>]*>/gm,
                    /*替换之前的字符串*/
                    tagStr = replace = $.trim(_val),
                    /*替换之后的字符串*/
                    result = tagStr.replace(regx,"将img替换为16个站位字符计算");
                if (result.length > 300) {
                    jspllimit.css('color','red');
                    $this.attr('data-type','false');
                }else {
                    jspllimit.css('color','#d0d6d9');
                    $this.attr('data-type','true')
                }
                count = result.length;
                jspllimit.text(count);
            });

            $('#emotions .categorys a.current').removeClass('current');
            $('#emotions .categorys a').each(function(){
                if($(this).text() == category){
                    $(this).addClass('current');
                }
            });
        }
    }
})(jQuery);
