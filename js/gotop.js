$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('#return-top').fadeIn(300);
    }else{
        $('#return-top').fadeOut(200);
    }
})

$(".top_e").mouseover(function(){
    $("#imggotop").hide();
    $("#font").show();
})
$(".top_e").mouseout(function(){
    $("imgotop").hide();
    $("imggotop").show();
})