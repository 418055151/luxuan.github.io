define(['jquery'],function($) {
	return {
		show:function(){
			require(['layer'],function(layer){
				layer.msg('Hello world I will destroy you')
			})
			require(['fun'],function(fun){
				fun.seest()
			})
		},
		delete:function(data){
			console.log(data)
		},
		change:function(){
			$('body').css({'backgroundColor':'red'})
		}
	}
})