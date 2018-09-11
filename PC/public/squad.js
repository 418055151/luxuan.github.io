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
        'index':'lib/squad/index',
        'tipsBox':'tipsBox',
        'MyGroupCourse':'lib/squad/MyGroupCourse',
        'video_Play':'lib/squad/video_Play',
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
        'tipsBox':{
            deps: ['jquery','css!../css/tipsBox.css'],
            exports: '$'
        },
        'squad':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'index',
            'css!../css/index/common-header.css',
            'css!../css/courseTemplate.css',
            'css!../css/CreditTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/squad/squad.css'
        ],
        'MyGroupCourse':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'css!../css/index/common-header.css',
            'css!../css/CreditTemplate.css',
            'css!../css/Hot-issueTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/squad/MyGroupCourse.css'
        ],
        'video_Play':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'layer',
            'css!../css/CreditTemplate.css',
            'css!../css/Hot-issueTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/squad/video_Play.css'
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

