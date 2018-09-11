/**
 * Created by mac on 2018/3/2.
 */
require(['jquery','Handlebars','../public/lib/coursequeries'],function ($,Handlebars,coursequeries){
    require(['text!../WEB-INF/footer.html!strip'],function(Template){
        $("#Footer").html(Template);//底部
    });
});

