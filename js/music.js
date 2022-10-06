var music = document.getElementById('music')
var avatar_size = document.getElementById('avatar_size')
var tem = true

function musiccc() {
    if (tem == false) {
        music.play()
        tem = true
        document.getElementById('avatar_size').style.animationPlayState = 'running'
    } else {
        music.pause()
        tem = false
        document.getElementById('avatar_size').style.animationPlayState = 'paused'
    }
}


