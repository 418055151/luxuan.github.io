/**
 * Created by mac on 2018/3/7.
 */
(function ($) {
    $.extend({
        tipsBox: function (options) {
            options = $.extend({
                obj: null,  //jq对象，要在那个html标签上显示
                str: null,  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                startSize: "12px",  //动画开始的文字大小
                endSize: "30px",    //动画结束的文字大小
                interval: 300,  //动画时间间隔
                color: "#93999f",    //文字颜色
                callback: function () { }    //回调函数
            }, options);
            $("body").append("<span class='tipsBox'>" + options.str + "</span>");
            let box = $(".tipsBox");
            let left = options.obj.offset().left + options.obj.width() / 2;
            let top = options.obj.offset().top - options.obj.height();
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval, function () {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);
