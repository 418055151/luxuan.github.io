/**
 * Created by mac on 2018/3/2.
 */
require(['jquery','Handlebars','../public/lib/coursequeries'],function ($,Handlebars,coursequeries){
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });

    require(['text!../WEB-INF/PopularCourseTemplate.html!strip'],function(Template){
        $("#courseTemplate").html(Template);//热门课程
        refreshClasses(pagCode);
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#courseTemplate",req.data,"#courselist");
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
    $("#ques-title").blur(function () {
        let val = $.trim($(this).val());
        if(val == ''){
            $(this).addClass('ipt-error');
            $('.errortip ,.ques-label').css('visibility','visible');
        }else {
            $(this).removeClass('ipt-error');
            $('.errortip ,.ques-label').css('visibility','hidden');
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
