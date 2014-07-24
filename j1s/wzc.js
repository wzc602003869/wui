
    require(['jquery'],function($){

        $(".input").on("focus",function(){
            var p = $(this).attr('placeholder');
            $(this).removeAttr('placeholder');
            $(this).on('blur',function(){
                if($(this).val()==""){
                    $(this).attr('placeholder',p);
                }
            })

        });
        $('#box').on('click',function(){
            alert(111);
            getColor();
        });
        function getColor(color)
{
    var sInitColor = color;                                 
//获取参数传递的颜色
    if (sInitColor == null||sInitColor=="")
            var sColor = myColor.ChooseColorDlg();          
//打开颜色对话框
    else
            var sColor = myColor.ChooseColorDlg(sInitColor);
//设置颜色
            sColor = sColor.toString(16);                   
//转换为16进制颜色
    if (sColor.length < 6) {                                
//如果颜色小于6位
      var sTempString = "000000".substring(0,6-sColor.length);
//格式化为6位
      sColor = sTempString.concat(sColor);
    }
    sColor = "#" + sColor;                                      
//添加颜色标签
    return sColor;
}
    });
    /*  var test = $(".test")
     test.on("mouseover",function(){
     var class1 = $(this).attr("class");
     var class2 = class1.split(" ");
     var over = class2[0] + "-over";
     $(this).addClass(over);
     });
     test.on("mouseout",function(){
     var class1 = $(this).attr("class");
     var class2 = class1.split(" ");
     var over = class2[0] + "-over";
     $(this).removeClass(over);
     });
     test.on("mousedown",function(){
     var class1 = $(this).attr("class");
     var class2 = class1.split(" ");
     var active = class2[0] + "-active";
     $(this).addClass(active);
     })
     $(".test").on("mouseup",function(){
     var class1 = $(this).attr("class");
     var class2 = class1.split(" ");
     var active = class2[0] + "-active";
     $(".test").removeClass(active);
     })*/