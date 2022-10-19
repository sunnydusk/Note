const avatar = document.getElementsByClassName("avatar_size")[0]
let flag = true;
avatar.addEventListener("click",function(){
    const music = document.getElementById("music")
    if(flag){
        music.play();
        avatar.setAttribute("style","animation-name:music")
        flag=false;
    }else{
        music.pause();
        avatar.setAttribute("style","animation-name:mu");
        flag=true;
    }
})