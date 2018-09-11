require.config({
    baseUrl:'../../public/',
    paths:{
        'css':'css.min',
        'jquery':'jquery-2.1.4.min',
        'lazyload':'jquery.lazyload',
        'Handlebars':'handlebars',
        'text':'text',
        'public':'public',
        'layer':'layer-v1.9.3/layer/layer',
        'index':'lib/curriculum/index',
    },
    /*依赖设置*/
    shim:{
        'layer':{
            'deps':[
                'jquery',
                'css!../public/layer-v1.9.3/layer/skin/layer.css',
            ]
        },
        'jquery':['css!../public/font/font-awesome.min.css'],
        'lazyload': {
            deps: ['jquery'],
            exports: '$'
        },
        'curriculum':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'lazyload',
            'index',
            'css!../css/index/common-header.css',
            'css!../css/index/template-footer.css',
            'css!../css/index/p-top-news.css',
            'css!../css/curriculum/curriculum.css',
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

