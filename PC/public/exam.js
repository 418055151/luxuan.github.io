require.config({
    baseUrl:'../../public/',
    urlArge:'_=' + new Date().getTime(),
    paths:{
        'css':'css.min',
        'jquery':'jquery-2.1.4.min',
        'Handlebars':'handlebars',
        'text':'text',
        'public':'public',
        'index':'lib/exam/index',
    },
    /*依赖设置*/
    shim:{

        'jquery':['css!../public/font/font-awesome.min.css'],
        'lazyload': {
            deps: ['jquery'],
            exports: '$'
        },
        'exam':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'index',
            'css!../css/index/common-header.css',
            'css!../css/courseTemplate.css',
            'css!../css/CreditTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/exam/exam.css'
        ]
    },
    config:{
        text:{
            onXhr:function (xhr,url) {
                xhr.setRequestHeader("x-REQUESTED-With","XMLHttpRequest")
            }
        }
    }
});

