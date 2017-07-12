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
     // var Total=document.querySelector('.Total');
     var time=data['HeWeather5'][0]['basic']['update'];
     var aa=time['loc']; //2017-01-02 18:00
     var bb=aa.split(" ");   //18:00
     var cc=bb[1].split(":")[0];//18
     var dd=`url(images/bg/${cond}.jpg)`
     var dds="url(images/bg/99.jpg)"
     var body=document.querySelector('body');
     // 通过时间确定背景图片  开始
     if(parseInt(cc)>18){
             // Total.style.backgroundImage=dds;
             body.style.backgroundImage=dds;
      }else{
       // Total.style.backgroundImage=dd;
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
// 今天详细信息 开始
var Konows_message={
  tody:"今日预报",
  fl:"体感温度",
  hum:"空气湿度",
  wind:"反向风力"
};
var Knowsleft=document.querySelector('.Knows_left');
var Knowsright=document.querySelector('.Knows_right');
Knowsleft.innerHTML=`<img src=${imgurl} alt="">`
Knowsright.innerHTML=`<li>
          <span>${Konows_message['tody']}</span>
          <span>${txt}</span>
          </li>
          <li>
          <span>${Konows_message['fl']}</span>
          <span>${Nows['fl']}℃</span>
          </li>
          <li>
          <span>${Konows_message['hum']}</span>
          <span>${Nows['hum']}%</span>
          </li>
          <li>
          <span>${Konows_message['wind']}</span>
          <span>${Nows['wind']['dir']}${Nows['wind']['sc']}</span>
          </li>`

// 今天详细信息 结束
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
                              // 本地图片的处理 开始
                              var imgurl=`images/${v['cond']['code']}`;
                              // 本地图片处理 完
			                   only.innerHTML+=`<li>
								<div>${timeb[1]}</div>
								<div>
									<img src=${imgurl}.png alt="">
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
      // 本地图片的处理 开始
                              var imgurl=`images/${v['cond']['code_d']}`;
                              // 本地图片处理 完
     onlyfaturebotton.innerHTML+=`<li>
					<div class="only_color">${weak}</div>
					<div class="images_icon">
						<img src=${imgurl}.png alt="">
						<div>${v['tmp']['max']}°</div>
						<div class="icon_bottom">${v['tmp']['min']}°</div>
					</div>
					<div>${v['cond']['txt_d']}</div>
				</li>`
	onlyfaturebottons.innerHTML+=`<li>
					<div class="only_color">${weak}</div>
					<div class="images_icon">
						<img src=${imgurl}.png alt="">
						<div>${v['tmp']['max']}°</div>
						<div class="icon_bottom">${v['tmp']['min']}°</div>
					</div>
					<div>${v['cond']['txt_d']}</div>
				</li>`
				 
    })
})
// 星期天气获取 结束
// 这个是 通过上线获取的图片
// <img src=${icon}${v['cond']['code_d']}.png alt="">
// 完

// 生活质量
store.getWeather(function(data){
 var life=data['HeWeather5'][1]['aqi']['city'];
 var farturetopss=document.querySelector('#asdf');
  farturetopss.innerHTML=`<div>${life['qlty']}-<span style="color: #fff;">${life['aqi']}</span></div>`
  var Colordong=document.querySelector('.Color_dong>li');
 Colordong.style.marginLeft=`${(parseInt(life['aqi'])/10)*2}%`;
 var Someing=document.querySelector('.Someing');
 Someing.innerHTML=`<li>
          <div>
            <div>
              <span>PM2.5</span>
              <span>${life['pm25']}</span>
            </div>
            <div id="color_Soming">入肺颗粒物</div>
          </div>
          <div>
            <div>
              <span>NO2</span>
              <span>${life['no2']}</span>
            </div>
            <div id="color_Soming">二氧化氮</div>
          </div>
        </li>
         <li>
          <div>
            <div>
              <span>PM10</span>
              <span>${life['pm10']}</span>
            </div>
            <div id="color_Soming">可吸颗粒物</div>
          </div>
          <div>
            <div>
              <span>PM2.5</span>
              <span>${life['o3']}</span>
            </div>
            <div id="color_Soming">臭氧</div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <span>SO2</span>
              <span>${life['so2']}</span>
            </div>
            <div id="color_Soming">二氧化硫</div>
          </div>
          <div>
            <div>
              <span>CO</span>
              <span>${life['co']}</span>
            </div>
            <div id="color_Soming">一氧化氮</div>
          </div>
        </li>`
 
})
// 生活指数 开始
var zhishu={
  comf:'舒适度指数',
  cw:'洗车指数',
  drsg:'穿衣指数',
  flu:'感冒指数',
  sport:'运动指数',
  trav:'旅游指数',
  uv:'紫外线指数'
}
var icon={
  comf:'&#xe71c;',
  cw:'&#xec69;',
  drsg:'&#xe66e;',
  flu:'&#xe601;',
  sport:'&#xe606;',
  trav:'&#xe61a;',
  uv:'&#xe911;'
}
store.getSuggestion(function(data){
    var LifeTotall=document.querySelector('#Life_Totall');
    var LifeTotalls=document.querySelector('#Life_Totalls');

   var lifetol=data['HeWeather5'][0]['suggestion'];
for(var v in data['HeWeather5'][0]['suggestion']){
  if(v=="trav"){
      LifeTotalls.innerHTML=`<ul class="Life_good">
        <li><span>${icon[v]}</span></li>
        <li>
          <div>
            <span style="color:#fff">${lifetol[v]['brf']}</span>
            <span style="color:#767A79">[${zhishu[v]}]</span>
          </div>
          <div><span style="color:#fff;font-size:.2rem;"> ${lifetol[v]['txt']}</span></div>
        </li>
      </ul>`
  }else{
     LifeTotall.innerHTML+=`<ul class="Life_good">
        <li><span>${icon[v]}</span></li>
        <li>
          <div>
            <span style="color:#fff">${lifetol[v]['brf']}</span>
            <span style="color:#767A79">[${zhishu[v]}]</span>
          </div>
          <div><span style="color:#fff;font-size:.2rem;"> ${lifetol[v]['txt']}</span></div>
        </li>
      </ul>`
  }
}
})
// 生活指数 结束