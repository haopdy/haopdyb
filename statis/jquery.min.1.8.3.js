/*

感谢开源


q2228184004

*/
function fuckyou(){

 

window.close(); //关闭当前窗口(防抽)

 

window.location="https://www.diyipa.cc"; //将当前窗口跳转置空白页

 

}

 

 

 

function click(e) {

 

if (document.all) {

 

  if (event.button==2||event.button==3) { 

 

alert("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");

 

oncontextmenu='return false';

 

}

 

 

 

}

 

if (document.layers) {

 

if (e.which == 3) {

 

oncontextmenu='return false';

 

}

 

}

 

}

 

if (document.layers) {

 

fuckyou();

 

document.captureEvents(Event.MOUSEDOWN);

 

}

 

document.onmousedown=click;

 

document.oncontextmenu = new Function("return false;")

 

document.onkeydown =document.onkeyup = document.onkeypress=function(){ 

 

if(window.event.keyCode == 123) { 

 

fuckyou();

 

window.event.returnValue=false;

 

return(false); 

 

} 

 

}



if(lo.indexOf('\u5317\u4eac\u5e02')!==-1){
    $(".MacPlayer").html('<div style="text-align:center;padding-top:100px;color:#0317ff;font-size:19px;">&#26412;&#31449;&#21482;&#25552;&#20379;&#24433;&#29255;&#20171;&#32461;&#65292;&#19981;&#25552;&#20379;&#22312;&#32447;&#35266;&#30475;&#26381;&#21153;&#65292;&#35831;&#21040;&#27491;&#35268;&#28192;&#36947;&#35266;&#30475;&#24433;&#29255;&#65281;</div>');
}else{
        
    if (navigator.userAgent.match(/(iPhone|iPod|ios|iPad|Android|Mobile)/i) && navigator.userAgent.match(/(spider|bot)/i)==null) {
    
            $('#haopdy').css({
                'height':'90px',
                'background':'url('+cpspic+')',
                'background-size':'100% 100%'
                  
            })
              
            $('#haopdy').click(function(){
                window.open(cpsurl);
            });

    }else{
        $(".MacPlayer").html('<div style="text-align:center;padding-top:100px;color:red;font-size:19px;">&#26412;&#31449;&#21482;&#25552;&#20379;&#24433;&#29255;&#20171;&#32461;&#65292;&#19981;&#25552;&#20379;&#22312;&#32447;&#35266;&#30475;&#26381;&#21153;&#65292;&#35831;&#21040;&#27491;&#35268;&#28192;&#36947;&#35266;&#30475;&#24433;&#29255;&#65281;</div>');
    }
}
