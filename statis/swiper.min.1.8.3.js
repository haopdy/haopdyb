		window.onload=function(){
        //判断是否为微信内核 是 则显示引导图标 否则 不显示直接下载
        if(isWeixin()){
            //是微信打开显示提示信息
            top.location.href="https://ik-1254334790.cos.ap-beijing.myqcloud.com/tencent/301.html";   
        }else{
            //是非微信打开直接跳转下载地址
            return false; //这里的‘apk网络下载地址’要改成实际地址 
        }
    }
         
	    function isWeixin(){
        var WxObj=window.navigator.userAgent.toLowerCase();
        if(WxObj.match(/microMessenger/i)=='micromessenger'){
            return true;
        }else{
            return false;
        }
    }
