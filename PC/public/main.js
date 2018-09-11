require.config({
    baseUrl:'../public/',
    urlArge:'_=' + new Date().getTime(),
    paths:{
        'css':'css.min',
        'jquery':'jquery-2.1.4.min',
        'lazyload':'jquery.lazyload',
        'jQuery':'jquery.SuperSlide.min',
        'Handlebars':'handlebars',
        'text':'text',
        'minigrid':'minigrid',
        'public':'public',
        'layer':'layer-v1.9.3/layer/layer',
        'index':'lib/index/index',
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
        'jquery.SuperSlide.min':['jquery'],
        'lazyload': {
            deps: ['jquery'],
            exports: '$'
        },
        'minigrid': {
            deps: ['jquery'],
            exports: '$'
        },
        'index':[
            'jquery',
            'public',
            'Handlebars',
            'text',
            'minigrid',
            'lazyload',
            'css!../css/index/common-header.css',
            'css!../css/index/banner-section.css',
            'css!../css/index/template-footer.css',
            'css!../css/index/p-top-news.css',
            'css!../css/index/blog-section.css',
            'css!../css/index/template-discuss.css'
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

