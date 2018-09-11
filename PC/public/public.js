/**
 * Created by mac on 2018/2/28.
 */
require(['jquery'],function($){
    $(document).on("mouseenter", "ul.Examination li", function(){
        $(this).addClass('active').siblings('li').removeClass('active')
    });
    $(document).on("mouseleave", "ul.Examination li", function(){
        $(this).removeClass('active');
    });
    $(document).on("mouseleave","ul.Examination",function () {
        $(this).find('li').eq(0).addClass('active');
    });
    $(function () {
        setTimeout(function(){$("#loadingPanel").hide()},500);
        // $("#loadingPanel").hide();//当页面加载完成后将loading页隐藏
    });
    $(document).on('click','#back-to-top',function () {
        // html,body 都写是为了兼容浏览器
        $('html,body').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    let headerStyleAdjust = () => {
        let method = window.scrollY > 40 ? "addClass" : "removeClass";
        $("#common-header")[method]("shadow");
    };
    window.addEventListener("scroll", headerStyleAdjust);
    $(document).on('click','.js-lyleif',function () {
        $(this).parent().parent().find('ul').removeClass('courselist height');
        $(this).parent().parent().find('li.clearfix').removeClass('mag-btm50');
        $(this).parent().hide();
    })
});
