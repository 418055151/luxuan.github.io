require(['jquery','Handlebars','../public/lib/coursequeries'],function ($,Handlebars,coursequeries){
    /*导入模板*/
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });
    require(['text!../WEB-INF/curriculum/courseTemplate.html!strip'],function(Template){
        $("#courseTemplate").html(Template);
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
    let navitem = $('#Classification').find("li");
    function refreshClasses (pagCode) {
        lazyload();
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#courseTemplate",req.data,"#courseList");
            renderTemplate("#PagContTemplate",coursequeries.formatPag(req),"#PagCont");
        });
    };
    /*
     分页点击事件
     * */
    $(document).on('click','a.tcdNumber',(function () {
        let $this = $(this);
        refreshClasses($this.attr('data-pagCode'));
        lazyload();
    }));
    /*
     模板渲染
     * */
    function renderTemplate(templateID,data,HtmlID) {
        let  templateHtml = $(templateID).html();
        let  HandFunctiom = Handlebars.compile(templateHtml);
        $(HtmlID).html(HandFunctiom(data));
    };
    navitem.on('click',(function () {
        let $this = $(this).addClass('active').siblings('li').removeClass('active');
    }));
    navitem.click(function () {
        let $thisname = $(this).attr('data-name');
        navitem.each(function (i,item) {
            let name = $(item).attr('data-name');
            name == $thisname ? $(item).addClass('course-nav-item') :$(item).addClass('course-nav-item hide');
        });
        $("#ClassificationNav").find("li").removeClass('active');
        $("#" + $thisname).addClass('active')
    });

});
/*方向分类*/
function topClassification(obj, id) {
    require(['jquery'],function($){
        let ClassificationId = id;
        let navitem = $('#Classification').find(".course-nav-item");
        $(obj).parent().addClass('active').siblings('li').removeClass('active');
        navitem.each(function (i,item) {
            let a = $(item).attr('data-name');
            $(item).addClass('course-nav-item hide');
            if (a == ClassificationId) {

                navitem.removeClass('active').eq(0).addClass('active').removeClass('hide');
                $(item).removeClass('hide');
            };
            if (ClassificationId == 'all') {
                navitem.removeClass('active hide').eq(0).addClass('active').removeClass('hide');
            }
        })
    })
}
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
