/*
开源代码 感谢大佬
q2228184004

凑合用吧
*/




if(lo.indexOf('\u5317\u4eac\u5e02')!==-1){
    $(".windows").html('<div style="text-align:center;padding-top:100px;color:#0317ff;font-size:19px;">&#26412;&#31449;&#21482;&#25552;&#20379;&#24433;&#29255;&#20171;&#32461;&#65292;&#19981;&#25552;&#20379;&#22312;&#32447;&#35266;&#30475;&#26381;&#21153;&#65292;&#35831;&#21040;&#27491;&#35268;&#28192;&#36947;&#35266;&#30475;&#24433;&#29255;&#65281;</div>');
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
        $(".windows").html('<div style="text-align:center;padding-top:100px;color:#0317ff;font-size:75px;">&#26412;&#31449;&#21482;&#25552;&#20379;&#24433;&#29255;&#20171;&#32461;&#65292;&#19981;&#25552;&#20379;&#22312;&#32447;&#35266;&#30475;&#26381;&#21153;&#65292;&#35831;&#21040;&#27491;&#35268;&#28192;&#36947;&#35266;&#30475;&#24433;&#29255;&#65281;</div>');
    }
}
