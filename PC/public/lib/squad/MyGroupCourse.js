require(['jquery','Handlebars','MyGroupCourse','../public/lib/coursequeries'],function ($,Handlebars,MyGroupCourse,coursequeries){
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
    let pagCode = 1,
        current = 0;
    function refreshClasses (pagCode) {
        $.getJSON('http://imoocnote.calfnote.com/inter/getClasses.php',{curPage:pagCode},function (req) {
            renderTemplate("#CreditTemplate",req.data,"#Creditlist");
            renderTemplate("#Hot-issusTemplate",req.data,"#Hot-issuslist");
            renderTemplate("#marketlist-Template",req.data,"#titintrobox");
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
    /*本班的学习完成进度*/
    let interval = setInterval(increment,50);
    function increment(){
        let counter = $("#counter"),
            loadbarinner =  $('.load-bar-inner'),
            percentage = $.trim(counter.attr('data-value').replace(/%/g, ''));
        if(current == percentage){
            clearInterval(interval);
        }
        counter.html(current+'%');
        loadbarinner.css('width',current+'%');
        if(current < percentage) {
            current++;
        }
    }
    /*课程列表样式处理*/
    $(document).on('mouseenter','#marketlist-content li',function () {
        $(this).find('.front').stop().animate({'height':0,'top':'50px'}).hide();
        $(this).find('.back ').stop().animate({'height':'160px','top':0}).show();
        let dataId = $(this).attr('data-id'),
            dataVal = $(this).attr('data-value'),
            percentage = $.trim(dataVal.replace(/%/g, '')),
            Progress =  MyGroupCourse.Progress();
       new Progress.renderOne('canvas'+dataId,150,5,percentage);
    });
    $(document).on('mouseleave','#marketlist-content li',function () {
        $(this).find('.back').stop().animate({'height':0,'top':'50px'}).hide();
        $(this).find('.front ').stop().animate({'height':'160px','top':0}).show();
    });
});

define(['jquery'],function($){
    return{
        /*canvas百分比效果*/
        Progress:function() {
            let progress = {
                textheight: null,
                renderOne: function(id, length, r, percent) {
                    let canvas = document.getElementById(id);
                    let context = canvas.getContext("2d");
                    canvas.width = length;
                    canvas.height = length;
                    let i = 0;
                    let interval = setInterval(function() {
                        i++;
                        progress.render(context, length, r, i, percent);
                        if (i >= percent) {
                            clearInterval(interval)
                        }
                    }, 10)
                },

                render: function(context, length, r, i, percent) {
                    context.clearRect(0, 0, length, length);
                    context.beginPath();
                    let gradient = context.createLinearGradient(length, 0, 0, 0);
                    gradient.addColorStop("0", "#c4ec52");
                    gradient.addColorStop("1.0", "#97c513");
                    context.strokeStyle = gradient;
                    context.lineWidth = r;
                    context.arc(length / 2, length / 2, length / 2 - r, -0.5 * Math.PI, -0.5 * Math.PI + i * 0.02 * Math.PI, false);
                    context.stroke();
                    context.closePath();
                    context.beginPath();
                    context.strokeStyle = "#8d8d8d";
                    context.lineWidth = 2;
                    context.fillStyle = "#ffffff";
                    context.arc(length / 2, r, 0.6 * r, 0, 2 * Math.PI, false);
                    context.stroke();
                    context.fill();
                    context.closePath();
                    context.beginPath();
                    let radian = percent / 100 * 2 * Math.PI - 0.5 * Math.PI;
                    let x = Math.cos(radian) * (length / 2 - r) + length / 2;
                    let y = Math.sin(radian) * (length / 2 - r) + length / 2;
                    context.arc(x, y, 0.6 * r, 0, 2 * Math.PI, false);
                    context.stroke();
                    context.fill();
                    context.closePath();
                    context.beginPath();
                    context.lineWidth = 1;
                    context.strokeStyle = "#c4ec52";
                    context.fillStyle = "#97c513";
                    context.arc(length / 2, length / 2, length / 2 - 2 * r, 0, 2 * Math.PI);
                    context.fill();
                    context.closePath();
                    context.beginPath();
                    context.font = "bold " + (length / 2 - 2.5 * r) / 2 + "px 微软雅黑";
                    context.fillStyle = "#ffffff";
                    let text = percent + "%";
                    textwidth = context.measureText(text).width;
                    if (this.textheight == null) {
                        let div = document.createElement("div");
                        document.body.appendChild(div);
                        div.innerHTML = text;
                        div.style.fontSize = ((length / 2 - 2.5 * r) / 2) + "px";
                        this.textheight = div.offsetHeight;
                        div.parentNode.removeChild(div)
                    }
                    textheight = this.textheight;
                    context.fillText(text, (length - textwidth) / 2, length / 2 + textheight / 4);
                    context.fill();
                    context.closePath()
                }
            };
            return progress
        }
    }
});