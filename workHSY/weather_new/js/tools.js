var tools={};
tools.ajax = function(options){
	var url = options.url;
	var data = options.data;
	if(!url){return false;};
	var type = options.type==undefined?'GET':options.type;
	var asynch= options.asynch==undefined?true:options.asynch;
	var dataType = options.dataType==undefined?'text':options.dataType;
	//创建ajax对象
	var ajax = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	if(type=='GET'){
		ajax.open('GET',url,asynch);
		ajax.send();
	}
	if(type=="POST"){
		ajax.open('POST',url,asynch);
		if(typeof data =="object"){
			//{user:admin,pwd:123456}
			//"user=admin&pwd=123456"
			var str="";
			for(var i in data){
				str+=i+'='+data[i]+'&';
			}
			//"user=admin&pwd=123456&"
			data = str.slice(0,-1);
		}
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send(data);
	}
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4){
			if(ajax.status ==200){
				if(dataType=='text'){
					options.success(ajax.responseText);
				}else if(dataType=='xml'){
					options.success(ajax.responseXML)
				}else if(dataType=='json'){
					//"[]"   " {}"
					options.success(JSON.parse(ajax.response))
				}
			}
		}
	}
};
tools.post = function(options){
	this.ajax({
		url:options.url,
		type:'POST',
		data:options.data,
		dataType:options.dataType,
		success:options.success
	})
};
tools.get = function(options){
	this.ajax({
		url:options.url,
		type:'GET',
		data:options.data,
		dataType:'json',
		success:options.success
	})
};

