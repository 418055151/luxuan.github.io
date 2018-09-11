/**
 * Created by mac on 2018/3/1.
 */
define(['jquery'],function($) {
    return {
        /*收搜*/
        queries:function(msg){
            require(['layer'],function(layer){
                layer.msg(msg)
            })
        },
        queriesBtn:function (id) {
            let msg = $.trim($("#"+id).val());
            if(msg != ''){
                this.queries(msg);
            }else {
                return false
            }
        },
        keyDown:function (e,id) {
            let ev= window.event||e,
                msg = $.trim($("#"+id).val());
            if (ev.keyCode == 13) {
                if(msg != ''){
                    this.queries(msg);
                }else {
                    return false
                }

            }
        },
        /*懒加载*/
        lazyload:function(){
            require(['lazyload'],function(){
                setTimeout(function(){
                    $("img").lazyload({
                        effect : "slideDown", //渐现，show(直接显示),fadeIn(淡入),slideDown(下拉)
                        threshold : 200, //预加载，在图片距离屏幕180px时提前载入
                        failure_limit : 20,
                        container: $("#courseList"), // 指定对某容器中的图片实现效果
                        event : "sporty",
                        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                    });
                },300);
            })
        },
        /*分页*/
        /*
         将接口返回的当前页,最大页码进行逻辑处理封装成模板可用数组(该方法同样适用于它处)
         * */
        formatPag:function (pagData) {
            let arr = [];
            let total = parseInt(pagData.totalCount);
            let cur = parseInt(pagData.curPage);
            //处理到首页的逻辑
            let toLeft = {};
            toLeft.index = 1;
            toLeft.text = "首页";
            if(cur != 1){
                toLeft.clickable = true;
            }else {
                toLeft.prevPage = true;
            }
            //处理到上一页的逻辑
            arr.push(toLeft);
            let pre = {};
            pre.index = cur -1;

            pre.text = '上一页';
            if(cur != 1){
                pre.clickable = true;
            }else {
                pre.prevPage = true;
            }
            arr.push(pre);
            //处理到cur页前的逻辑
            if(cur <= 5){
                for(let i = 1; i<cur;i++){
                    let pag = {};
                    pag.text = i;
                    pag.index = i;
                    pag.clickable = true;
                    arr.push(pag);
                }
            }else {
                //如果cur>5,那么cur前的页要显示
                arr.push({text: "1", index: 1, clickable: true},{text: "...", index: 1, omit: true});
                for(let i = cur-2;i<cur;i++){
                    let pag = {};
                    pag.text = i;
                    pag.index = 1;
                    pag.clickable = true;
                    arr.push(pag);
                }
            }
            //处理cur页的逻辑
            var pag = {};
            pag.text = cur;
            pag.index = cur;
            pag.cur = true;
            arr.push(pag);
            //处理cur页后的逻辑
            if(cur >= total-4){
                for(let i = cur+1;i<=total;i++){
                    let pag = {};
                    pag.text = i;
                    pag.index = i;
                    pag.clickable = true;
                    arr.push(pag);
                }
            }else {
                for(let i = cur+1; i<= cur+2;i++){
                    let pag = {};
                    pag.text = i;
                    pag.index = i;
                    pag.clickable = true;
                    arr.push(pag);
                }
                var pag = {};
                pag.text = '...';
                pag. omit = true;
                arr.push(pag);
                var pag = {};
                pag.text = total;
                pag.index = total;
                pag. clickable = true;
                arr.push(pag)
            }
            //处理下一页的逻辑
            let next = {};
            next.index = cur+1;
            next.text = '下一页';
            if(cur != total){
                next.clickable = true;
            }else {
                next.nextPage = true;
            }
            arr.push(next);
            //处理到尾页的逻辑
            let toRight = {};
            toRight.index = total;
            toRight.text = '尾页';
            if(cur != total){
                toRight.clickable = true;
            }else {
                toRight.nextPage = true;
            }
            arr.push(toRight);
            return arr;
        }
    }
});
