$(function(){
  var red= 1;
  var green = 2
  var blue = 3;


  $("g").click(function(){
    $(this).children("path").css("fill","#"+ red + green + blue);
    red+=3;
    green+=2;
    blue+=1;
    if(red>=9){
      red %= 9;
    }
    if(blue>=9){
      blue%= 9;
    }
    if(green>=9){
      green %= 9;
    }
  })
  $("g").each(function(){
    $(this).children("path").css("fill","#"+ red + green + blue);
    red+=3;
    green+=2;
    blue+=1;
    if(red>=9){
      red %= 9;
    }
    if(blue>=9){
      blue%= 9;
    }
    if(green>=9){
      green %= 9;
    }
  })

})
