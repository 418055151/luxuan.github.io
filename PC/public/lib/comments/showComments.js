/**
 * Created by mac on 2018/3/2.
 */
require(['jquery','Handlebars'],function ($,Handlebars){
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });
    require(['text!../WEB-INF/PopularCourseTemplate.html!strip'],function(Template){
        $("#courseTemplate").html(Template);//热门课程
        refreshClasses(pagCode);
    });
    require(['text!../WEB-INF/PagContTemplate.html!strip'],function(Template){
        $("#PagContTemplate").html(Template);
        refreshClasses(pagCode);
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#courseTemplate",req.data,"#courselist");
            renderTemplate("#answerTemplate",req.data,"#answerlist");
            require(['../public/lib/coursequeries'],function(coursequeries){
                renderTemplate("#PagContTemplate",coursequeries.formatPag(req),"#PagCont");
            })
        });
    };
    /*
     模板渲染
     * */
    function renderTemplate(templateID,data,HtmlID) {
        let  templateHtml = $(templateID).html();
        let  HandFunctiom = Handlebars.compile(templateHtml);
        $(HtmlID).html(HandFunctiom(data));
    };
    /*初始化序号*/
    Handlebars.registerHelper('number',function(v1,options){
        let number = v1+1;
        return number
    });

    Handlebars.registerHelper('iftime',function(v1,options){
        if(v1 == 0 || v1 == '0'){
            return options.fn(this)
        }else {
            return options.inverse(this);
        }
    });
    Handlebars.registerHelper('magbtm',function(v1,options){
        if(v1 == 4 || v1 == '4'){
            return options.fn(this)
        }else {
            return options.inverse(this);
        }
    });
    /*字数限制*/
    $(document).on('input propertychange','.release-reply',function () {
        let $this = $(this),
            _val = $this.val(),
            jspllimit = $(this).parent().find('.js-pl-limit');
        count = "";
        if (_val.length > 150) {
            jspllimit.css('color','red');
            $this.attr('data-type','false');
        }else {
            jspllimit.css('color','#d0d6d9');
            $this.attr('data-type','true')
        }
        count = $this.val().length;
        jspllimit.text(count);
    });
    // 绑定表情
    $('.face-icon').SinaEmotion($('.js-placeholder'));
    /*回复消息折叠*/
    $(document).on('click','.reply',function () {
        let type = $(this).attr('data-type')
            ,text = $(this).attr('title')
            ,replycon = $(this).parent().parent().parent().find('.reply-con');
        $('.reply').each(function (i,item) {
            $(item).text($(item).attr('title'));
            $(item).attr('data-type','1')
        });
        $(".reply-con").hide();
        if(type == '1'){
            $(this).attr('data-type','0');
            $(this).text('收起回复');
            replycon.slideDown();
        }else {
            $(this).attr('data-type','1');
            $(this).text(text);
            replycon.slideUp()
        }
    });
    /*回复个人消息*/
    $(document).on('click','.do-reply-btn',function () {
        let textVal = $(this).parent().parent().parent().find('textarea[name=release-reply]'),
            texttype = textVal.attr('data-type');
        if($.trim(textVal.val()) == ''){
            alert('内容不能为空');
            return false
        }
        if(texttype == 'false'){
            alert('回复内容字数超限')
        }
    })

















});
/*课程收搜*/
function queries(){
    require(['../public/lib/coursequeries'],function(coursequeries){
        coursequeries.queriesBtn('searchInput');
    })
}
function keyDown(e) {
    require(['../public/lib/coursequeries'],function(coursequeries){
        coursequeries.keyDown(e,'searchInput');
    })
}
define(['jquery','tipsBox'],function ($,tipsBox) {
    return {
        /*课程赞与踩*/
        praise:function (obj,type) {
            $(obj).find('b').addClass('fontsize');
            $(obj).find('i').addClass('niceIn');
            setTimeout(function(){
                $(obj).find('b').removeClass('fontsize');
                $(obj).find('i').removeClass('niceIn');
            },1000);
        },
        /*评论点赞*/
        tipsBoxBtn:function (obj,type) {
            $.tipsBox({
                obj: $(obj),
                str: type,
                callback: function () {
                }
            });
            this.niceIn($(obj));
        },
        niceIn:function (prop) {
            prop.find('i').addClass('niceIn');
            setTimeout(function(){
                prop.find('i').removeClass('niceIn');
            },1000);
        },
        /*提交个人评论*/
        Publish:function (val) {
            let jspltextarea = $("#js-pl-textarea"),
                regx = /<[^>]*>|<\/[^>]*>/gm,
                /*替换之前的字符串*/
                tagStr = replace = $.trim(jspltextarea.val()),
                /*替换之后的字符串*/
                result = tagStr.replace(regx,"将img替换为16个站位字符计算");
            if(!$.trim(val)){
                alert('不能为空');
                return false
            }
            if(result.length > 300){
                alert("字数超限");
                return false
            }
            console.log(val)
            $("#answerlist").prepend(this.reply(val))
        },
        reply:function (content) {
            let Template;
            Template  = '<ul>';
            Template += '<li class="ques-answer ques-new-answer clearfix">';
            Template += '<div class="answer-con first">';
            Template += '<div class="user-pic l">';
            Template += '<a href="javascript:void(0);" target="_blank">';
            Template += '<img src="http://wx.qlogo.cn/mmopen/BKMVGMmthXGjszK1TNyTeQuoWlFM0Dzgz9QA8JQibusGRooll13iaFcthnKbibXya1Yyb7J3zVsicibdz6Ec7Rl012GbsicDuD4Jd6/132?0.6857810917594676" width="40" height="40" alt="?"/>';
            Template += '</a>';
            Template += '</div>';
            Template += '<div class="detail-r">';
            Template += '<a class="detail-name" href="javascript:void(0);" target="_blank">我</a>';
            Template += '</div>';
            Template += '<div class="answer-content rich-text aimgPreview">';
            Template += '<p>';
            Template += '<strong>';
            Template += '<span style="text-decoration:underline;">'+content+'</span>';
            Template += '</strong>';
            Template += '</p>';
            Template += '</div>';
            Template += '<div class="ctrl-bar clearfix js-wenda-tool">';
            Template += '<span class="agree-with list-praise" data-type="+1">';
            Template += '<i class="icon-thumbs-up"></i>';
            Template += '<em>0</em>';
            Template += '</span>';
            Template += '<span class="oppose list-praise" data-type="-1">';
            Template += '<i class="icon-thumbs-down"></i>';
            Template += '<em>0</em>';
            Template += '</span>';
            // Template += '<span class="reply" data-id="reply1" data-type="1" title="0个回复">0个回复</span>';
            Template += '<span class="time r">2017-03-09</span>';
            Template += '</div>';
            Template += '</div>';
            Template += '</li>';
            Template += '</ul>';
            return Template;
        },
        /*字数限制*/
        releasetextchange:function (obj) {
            let $this = $("#"+obj),
                _val = $this.val(),
                jspllimit = $("#js-pl-limit"),
                count = "",
                regx = /<[^>]*>|<\/[^>]*>/gm,
                /*替换之前的字符串*/
                tagStr = replace = $.trim(_val),
                /*替换之后的字符串*/
                result = tagStr.replace(regx,"将img替换为16个站位字符计算");
            if (result.length > 300) {
                jspllimit.css('color','red');
            }else {
                jspllimit.css('color','#d0d6d9');
            }
            count = result.length;
            jspllimit.text(count);
        }
    }
});
