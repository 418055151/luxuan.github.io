require(['jquery','Handlebars','../public/lib/coursequeries','layer'],function ($,Handlebars,coursequeries,layer){
    /* 播放器高度 */
    videoHH();
    function videoHH() {
        let windowH = $(window).height() - ($('#header').height()+$('#course-menu').height());
        $("#plv_player").animate({"height":windowH+"px" },500)
    }
    $(window).resize(function(){
        videoHH();
    });
    /*导入模板*/
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });
    require(['text!../WEB-INF/LearningTimelistTemplate.html!strip'],function(Template){
        $("#CreditTemplate").html(Template);//学时排行榜
        refreshClasses(pagCode);
    });
    require(['text!../WEB-INF/Hot-issusTemplate.html!strip'],function(Template){
        $("#Hot-issusTemplate").html(Template);//学时排行榜
        refreshClasses(pagCode);
    });
    require(['text!../WEB-INF/PagContTemplate.html!strip'],function(Template){
        $("#PagContTemplate").html(Template);//分页
        refreshClasses(pagCode);
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#CreditTemplate",req.data,"#Creditlist");
            renderTemplate("#Hot-issusTemplate",req.data,"#Hot-issuslist");
            renderTemplate("#PagContTemplate",coursequeries.formatPag(req),"#PagCont");
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
        let num = v1+1;
        return num
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
    $("#js-pl-textarea").on("input propertychange", function() {
        let $this = $(this),
            _val = $this.val(),
            jspllimit = $("#js-pl-limit");
            count = "";
        if (_val.length > 300) {
            jspllimit.css('color','red');
        }else {
            jspllimit.css('color','#d0d6d9');
        }
        count = $this.val().length;
        jspllimit.text(count);
    });

    /*评论简介切换*/
    $('.course-menu-item').click(function () {
        let type = $(this).find('a').attr('data-type');
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.list-wrapcont').hide();
        $("#"+type).fadeIn(300);
    })
});
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
        tipsBoxBtn:function (obj) {
            $.tipsBox({
                obj: $(obj),
                str: "+1",
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
        Publish:function () {
            let jspltextarea = $("#js-pl-textarea");
            if(!$.trim(jspltextarea.val())){
                alert('不能为空');
                return false
            }
            if($.trim(jspltextarea.val().length) > 300){
                alert("字数超限");
                return false
            }
        },
        /*评论简介导航fixed*/
        position:function (element) {
            $(window).on("scroll", function() {
                let a = $(element)
                    , c = $(element).parent()
                    , h = c.offset().top
                    , v = c.offset().left;
                return $(window).on("scroll", function() {
                    let c = $(window).scrollTop();
                    c >= h ? a.css("position", "fixed").css("left", v + "px") : a.css("position", "absolute").css("left", 0)
                }),
                {
                    setLT: function() {
                        h = c.offset().top,
                            v = c.offset().left
                    }
                }
            })
        },
        /*小视频窗口拖拽*/
        Draganddrop:function (element) {
            let $dialog = $(".plv_playercont");
            let mx = 0,my = 0;      //鼠标x、y轴坐标（相对于left，top）
            let dx = 0,dy = 0;      //对话框坐标（同上）
            let isDraging = false;      //不可拖动
            $(element).mousedown(function(event){
                event = event || window.event;
                mx = event.pageX;     //点击时鼠标X坐标
                my = event.pageY;     //点击时鼠标Y坐标
                dx = $dialog.offset().left;
                dy = $dialog.offset().top;
                isDraging = true;      //标记对话框可拖动
            });
            $(document).on({
                mousemove:function () {
                    let event = arguments.callee.caller.arguments[0]||window.event;
                    let x = event.pageX;      //移动时鼠标X坐标
                    let y = event.pageY;      //移动时鼠标Y坐标
                    if(isDraging){        //判断对话框能否拖动
                        let moveX = dx + x - mx;      //移动后对话框新的left值
                        let moveY = dy + y - my;      //移动后对话框新的top值
                        console.log(moveY)
                        //设置拖动范围
                        let pageW = $(window).width();
                        let pageH = $(document.body).height();
                        let dialogW = $dialog.width();
                        let dialogH = $dialog.height();
                        let maxX = pageW - dialogW;       //X轴可拖动最大值
                        // let maxY = pageH - dialogH;       //Y轴可拖动最大值
                        let maxY = y-(pageH + (dialogH*2));       //Y轴可拖动最大值
                        moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
                        moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
                        //重新设置对话框的left、top
                        $dialog.css({"left":moveX + 'px',"top":moveY + 'px'});
                    }
                },
                mouseup:function () {
                    isDraging = false;
                }
            });
            //禁止选中对话框内容
            if(document.attachEvent) {//ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
                g(element).attachEvent('onselectstart', function() {
                    return false;
                });
            }
        },
        /*随屏滚动的小视频窗口*/
        plv_playercont:function (element) {
            $(window).on("scroll", function() {
                let a = $(element)
                    , t = $(element).attr('data-scroll')
                    , c = $(element).parent()
                    , h = (c.height()+ $("#header").height())
                    , v = c.offset().left;
                $(window).on("scroll", function() {
                    if(t == 'true'){
                        let c = $(window).scrollTop();
                        c >= h ? a.addClass('showVideo').removeClass('hideVideo').find('.move_part').show() : a.addClass('hideVideo').removeClass('showVideo').find('.move_part').hide()
                    }else {
                        a.removeClass('showVideo')
                    }
                })

            })
        },
        /*关闭小视频窗口*/
        closeplayer:function (element) {
            $(element).parent().parent().removeClass('showVideo').attr('data-scroll','false')
        }

    }
});
