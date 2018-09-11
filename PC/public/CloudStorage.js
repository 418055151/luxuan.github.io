require.config({
    baseUrl:'../../public/',
    urlArge:'_=' + new Date().getTime(),
    paths:{
        'css':'css.min',
        'jquery':'jquery-2.1.4.min',
        'layer':'layer-v1.9.3/layer/layer',
        'Handlebars':'handlebars',
        'text':'text',
        'public':'public',
        'index':'lib/CloudStorage/index',
    },
    /*依赖设置*/
    shim:{

        'jquery':['css!../public/font/font-awesome.min.css'],
        'lazyload': {
            deps: ['jquery'],
            exports: '$'
        },
        'layer':{
            'deps':[
                'jquery',
                'css!../public/layer-v1.9.3/layer/skin/layer.css',
            ]
        },
        'nicescroll': {
            deps: ['jquery'],
            exports: '$'
        },
        'CloudStorage':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'nicescroll',
            'layer',
            'index',
            'css!../css/index/common-header.css',
            'css!../css/CreditTemplate.css',
            'css!../css/Hot-issueTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/CloudStorage/CloudStorage.css'
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

