 //address strat
store.getNow(function (data){
    var address=data['HeWeather5'][0]['basic']['city'];
    var str1=`	<li>&#xe685;</li><li>${address}</li>`;
    var addressli=document.querySelector(".address>ul");
    addressli.innerHTML=str1;
    //message start
    var Nows=data['HeWeather5'][0]['now'];
    var str2=`<span>${Nows['tmp']}℃</span>`
    var messageleft=document.querySelector(".message_left");
    messageleft.innerHTML=str2;
    var cond=data['HeWeather5'][0]['now']['cond']['code'];//多云
    var txt=data['HeWeather5'][0]['now']['cond']['txt'];
    var weathericon=document.querySelector('.weather_icon>img');
    var imgurl=`images/${cond}.png`;
    var weatherone=document.querySelector('.weather_icon');
    var messageright=document.querySelector('.message_right');
    messageright.innerHTML=`<li class="weather_icon">
					<img src=${imgurl} alt="">
				</li>
				<li>${txt}</li>
				<li>${Nows['fl']-5}℃ - ${Nows['tmp']}℃</li>`
    //message end
//    bg start
     var Total=document.querySelector('.Total');
     var time=data['HeWeather5'][0]['basic']['update'];
     var aa=time['loc']; //2017-01-02 18:00
     var bb=aa.split(" ");   //18:00
     var cc=bb[1].split(":")[0];//18
     var dd=`url(images/bg/${cond}.jpg)`
     var dds="url(images/bg/99.jpg)"
     var body=document.querySelector('body');
     // 通过时间确定背景图片  开始
     if(parseInt(cc)>18){
             Total.style.backgroundImage=dds;
             body.style.backgroundImage=dds;
      }else{
       Total.style.backgroundImage=dd;
        body.style.backgroundImage=dd;
      }
       // 通过时间确定背景图片 完
//    bg end
// Farture start
    //星期的处理
        var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var dateStr =aa;
    var myDate = new Date(Date.parse(dateStr.replace(/-/g, "/")));
      weak=weekDay[myDate.getDay()];
      //星期的处理
       var farturetops=document.querySelector('.farture_tops');
       farturetops.innerHTML=` <div>今天</div><div>${weak}</div>`
// Farture end
});
//address end

// 最近几小时的天气 开始
var only=document.querySelector('.only');
store.getHour(function(data){
     data['HeWeather5'][0]['hourly_forecast'].slice(0,6).forEach(function(v)
     {
     	                      var timess=v['date'];
     	                      var timeb=timess.split(" ");
     	                      var icon="https://cdn.heweather.com/cond_icon/"

			                   only.innerHTML+=`<li>
								<div>${timeb[1]}</div>
								<div>
									<img src=${icon}${v['cond']['code']}.png alt="">
								</div>
								<div>${v['tmp']}℃</div>
							</li>`
     });
    //数据可以获取到都是

});
// 最近几小时的天气 结束
// 星期天气获取 开始
var onlyfaturebotton=document.querySelector('.only_fature_botton');
var onlyfaturebottons=document.querySelector('.only_fature_bottons');
store.getweak(function(data){
    data['HeWeather5'][0]['daily_forecast'].forEach(function(v){
    	//星期的处理
        var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var dateStr =v['date'];
    var myDate = new Date(Date.parse(dateStr.replace(/-/g, "/")));
      weak=weekDay[myDate.getDay()];
      var icon="https://cdn.heweather.com/cond_icon/"
      //星期的处理
     onlyfaturebotton.innerHTML+=`<li>
					<div class="only_color">${weak}</div>
					<div class="images_icon">
						<img src=${icon}${v['cond']['code_d']}.png alt="">
						<div>${v['tmp']['max']}°</div>
						<div class="icon_bottom">${v['tmp']['min']}°</div>
					</div>
					<div>${v['cond']['txt_d']}</div>
				</li>`
	onlyfaturebottons.innerHTML+=`<li>
					<div class="only_color">${weak}</div>
					<div class="images_icon">
						<img src=${icon}${v['cond']['code_d']}.png alt="">
						<div>${v['tmp']['max']}°</div>
						<div class="icon_bottom">${v['tmp']['min']}°</div>
					</div>
					<div>${v['cond']['txt_d']}</div>
				</li>`
				 
    })
})
// 星期天气获取 结束