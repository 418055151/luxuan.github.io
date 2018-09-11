require(['jquery','Handlebars'],function ($,Handlebars){
    /*导入模板*/
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });
    require(['text!../WEB-INF/PopularCourseTemplate.html!strip'],function(Template){
        $("#courseTemplate").html(Template);//热门课程
        refreshClasses(pagCode);
    });
    require(['text!../WEB-INF/LearningTimelistTemplate.html!strip'],function(Template){
        $("#CreditTemplate").html(Template);//学时排行榜
        refreshClasses(pagCode);
    });
    /*
     初始化第一页
     * */
    let pagCode = 1;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#examTemplate",req.data,"#examList");
            renderTemplate("#courseTemplate",req.data,"#courselist");
            renderTemplate("#CreditTemplate",req.data,"#Creditlist");
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
