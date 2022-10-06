$("#music").get(0).play();
var flag = false;
$(".avatar_size").click(function () {
    if (!flag) {
        // $(this).css({"-webkit-animation-iteration-count":"0"});
        $(this).css({ "-webkit-animation-play-state": "paused" });
        // 音乐停止
        $("#music").get(0).pause();
        flag = true;
    } else {
        // $(this).css({"-webkit-animation-iteration-count":"infinite"});
        $(this).css({ "-webkit-animation-play-state": "running" });
        // 音乐播放
        $("#music").get(0).play();
        flag = false;
    }
})
