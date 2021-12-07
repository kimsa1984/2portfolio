$(function(){
  $(".food img").click(function(){
    $(".modalWrap").css("display","block");
    $("#cimg").attr("src", $(this).attr("src"));
  });

  $(".modalWrap .close").click(function(){
    $(".modalWrap").css("display","none");
  });
});