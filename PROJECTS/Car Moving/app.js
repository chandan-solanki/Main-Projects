const audio = document.getElementById('carSound');
audio.loop = true
// audio.mute = false;

document.body.addEventListener("mousemove", function () {
    audio.play()
})