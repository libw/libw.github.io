// 8e556cb0f12a4aa5ba8af4613da4b7f1
// 32b783aa291246d1b6acfd81e4d9965d 
var options={
	baseUrl:"https://free-api.heweather.com/v5/",
	token:'32b783aa291246d1b6acfd81e4d9965d',
	city:'xian'
};

function getUrl(type='weather'){
	return options.baseUrl +type+"?city="+options.city+'&key='+options.token
}
var store = {
	getWeather:function(cb){
		tools.get({
			url:getUrl('weather'),
			success:function(data){
				cb(data);
			}
		})
	},
	getSuggestion:function(cb){
		tools.get({
			url:getUrl('suggestion'),
			success:function(data){
				cb(data);
			}
		})
	},
	getNow:function(cb){
		tools.get({
			url:getUrl('now'),
			success:function(data){
				cb(data);
			}
		})
	},
	getHour:function(cb){
		tools.get({
			url:getUrl('hourly'),
			success:function(data){
				cb(data);
			}
		})
	},
	getweak:function(cb){
		tools.get({
			url:getUrl('forecast'),
			success:function(data){
				cb(data);
			}
		})
	}
};


