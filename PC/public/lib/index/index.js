/*轮播图*/
require(
    [
        'jquery'
        ,'jquery.SuperSlide.min'
        ,'minigrid'
    ],
    function($) {
        $(".picBtnTop").slide({
            mainCell:".banner-holder ul",
            titCell:".banner-btn-holder li",
            effect:"top",
            autoPlay:true,
            triggerTime:0,
            delayTime:550,
            interTime:4500,
            titOnClassName:"active",
            /*进度设置*/
            startFun:function(){
                let timer = $(".picBtnTop .timer");
                timer.stop(true,true).animate({ "width":"0%" },0).animate({ "width":"100%" },4600);
            }
        });
        $(".picScroll-left").slide({
            titCell:".dot-holder ul",
            mainCell:".pic-wrapper ul",
            titOnClassName:"active",
            autoPage:true,effect:"left",
            autoPlay:true,
            easing:"easeOutCirc",
            delayTime:1000
        });
    });
/*瀑布流*/
require(
    [
        'jquery',
        'minigrid',
    ],
    function ($,minigrid) {
        let  disoffset = $('#discussList').offset().top -100;
        window.onscroll = function(){ //绑定scroll事件
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if( scroll >= disoffset ) { //判断
                minigrid('.grid', '.grid-item', 1, null,
                    function(){
                        let d = document.querySelector('.demo');
                        d.style.opacity = 1;
                    }
                );
                window.addEventListener('resize', function(){
                    minigrid('.grid', '.grid-item');
                });
            }
        };

    }
);
require(['jquery','Handlebars'],function ($,Handlebars){
    $(".item").on({
        mouseover : function(){
            $(this).addClass('js-menu-item-on');
            let id = $(this).data('id');
            $('.submenu').each(function(i,item){
                if($(item).data('id') == id){
                    $(item).removeClass('hide')
                }
            })
        } ,
        mouseout : function(){
            $(this).removeClass('js-menu-item-on');
            let id = $(this).data('id');
            $('.submenu').each(function(i,item){
                if($(item).data('id') == id){
                    $(item).addClass('hide')
                }
            })
        }
    }) ;
    $('.submenu').on({
        mouseover : function(){
            $(this).removeClass('hide');
            let id = $(this).data('id');
            $('.item').each(function(i,item){
                if($(item).data('id') == id){
                    $(item).addClass('js-menu-item-on')
                }
            })
        },
        mouseout : function(){
            $(this).addClass('hide');
            let id = $(this).data('id');
            $('.item').each(function(i,item){
                if($(item).data('id') == id){
                    $(item).removeClass('js-menu-item-on')
                }
            })
        }
    });
    $("article").hover(function () {
        let svg = $(this).find('path');
        svg.attr('d','M0,187.07V644H900V0H0V186.86H1V27A26,26,0,0,1,27,1H873a26,26,0,0,1,26,26V573a26,26,0,0,1-26,26H787.3c-10.6.3-24.4.9-32,2.1-18.9,3-28.5,11.1-38.8,22.7C696,647,671,647,650,623.7c-13.1-14.5-15.3-23.4-63.3-24.7H27A26,26,0,0,1,1,573V187.07Z')
    },function () {
        let svg = $(this).find('path');
        svg.attr('d','M0,187.07V644H900V0H0V186.86H1V27A26,26,0,0,1,27,1H873a26,26,0,0,1,26,26V573a26,26,0,0,1-26,26H27A26,26,0,0,1,1,573V187.07Z')
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    refreshClasses(pagCode);
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#courseTemplate",req.data,"#courseList");
            renderTemplate("#discussTemplate",req.data,"#discussList");
            console.log(req)
        });
    }
    /*
     模板渲染
     * */
    function renderTemplate(templateID,data,HtmlID) {
        let  templateHtml = $(templateID).html();
        let  HandFunctiom = Handlebars.compile(templateHtml);
        $(HtmlID).html(HandFunctiom(data));
    }
    /*
     渲染时对不同逻辑同条件需求的过滤
     * */
    Handlebars.registerHelper('typeCoed',function(value){
        let typeCoed = "";
        if(value == '0'|| value == 0){
            typeCoed = '视频课程'
        }else if(value == '1'|| value == 1){
            typeCoed = 'H5课程'
        }
        return typeCoed
    });
});
require(['text!../WEB-INF/footer.html!strip'],function(Template){
    $("#Footer").html(Template);//底部
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
lazyload();
function lazyload() {
    require(['../public/lib/coursequeries'],function(coursequeries){
        coursequeries.lazyload();
    })
}
