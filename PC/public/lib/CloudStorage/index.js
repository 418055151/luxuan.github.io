require(['jquery','Handlebars'],function ($,Handlebars){
    /*导入模板*/
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });

    require(['text!../WEB-INF/LearningTimelistTemplate.html!strip'],function(Template){
        refreshClasses(pagCode);
        $("#CreditTemplate").html(Template);//学时排行榜
    });
    require(['text!../WEB-INF/Hot-issusTemplate.html!strip'],function(Template){
        $("#Hot-issusTemplate").html(Template);//学时排行榜
        refreshClasses(pagCode);
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#CreditTemplate",req.data,"#Creditlist");
            renderTemplate("#Hot-issusTemplate",req.data,"#HotIssueList");
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
        let number = v1+1,
            num = '';
        if(10 > number){
            num = '0'+number
        }else {
            num = number
        }
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
});
function tablistStyle() {
    require(['index'],function(listStyle){
        listStyle.tablistStyle();
    })
}
//    表格
function tabTableStyle() {
    require(['index'],function(TableStyle){
        TableStyle.tabTableStyle();
    })
}

define(['jquery','nicescroll','layer'],function($,nicescroll,layer){
    return {
        listScroll:function () {
            $('#AppendixBox').niceScroll({
                cursorcolor: "#ccc",//#CC0071 光标颜色
                cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "8px", //像素光标的宽度
                cursorborder: "0", // 	游标边框css定义
                cursorborderradius: "5px",//以像素为光标边界半径
                autohidemode: false //是否隐藏滚动条
            });
        },
        tablistStyle:function () {
            $(".grid-switch").css('background-position','right 0px').hover(function () {
                $(this).css('background-position','right -70px');
            },function () {
                $(this).css('background-position','right 0px')
            });
            $(".list-switch").css('background-position','0 0').hover(function () {
                $(this).css('background-position','0 0')
            },function () {
                $(this).css('background-position','0 0')
            });
            $("#wgCSS").attr({ rel: "stylesheet",
                type: "text/css",
                href: "../../css/CloudStorage/urse_site.css"
            }).appendTo("head");
            $(".grid-view").hide();
            $(".list-cols").show();
            $(".grid-cols").hide();

            $(".file-nameDX").show();
            $(".file-nameSJ").show();
            setTimeout ("$('.grid-view').show()", 300);
            require(['index'],function(coursequeries){
                coursequeries.listScroll();
            })
        },
        tabTableStyle:function () {
            $(".list-switch").css('background-position','0 -35px').hover(function () {
                $(this).css('background-position','0 -70px');
            },function () {
                $(this).css('background-position','0 -35px');
            });
            $(".grid-switch").css('background-position','right -35px').hover(function () {
                $(this).css('background-position','right -35px');
            },function () {
                $(this).css('background-position','right -35px');
            });
            $("#wgCSS").attr({ rel: "stylesheet",
                type: "text/css",
                href: "../../css/CloudStorage/user_gite.css"
            }).appendTo("head");
            $(".grid-view").hide();
            $(".list-cols").hide();
            $(".grid-cols").show();

            $(".file-nameDX").hide();
            setTimeout ("$('.grid-view').show()", 300);
            require(['index'],function(coursequeries){
                coursequeries.listScroll();
            })
        },
        requireImg:function (src) {
            let img = $("#wrap");
            img.find('img').attr('src',src);
            let picRealWidth = $(window).width()/1.2, picRealHeight = $(window).height()-100;
            layer.open({
                type: 1,
                title: false,
                closeBtn: 2,
                area: ['1200px', Math.round(picRealHeight)+'px'],
                skin: '#000', //没有背景色
                shadeClose: true,
                shade:.6,
                scrollbar: true,
                content: img
            });
        }
    }
});