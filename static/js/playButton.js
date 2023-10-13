const playBtn = document.getElementById("play");
const vidCont = document.querySelector("#vidCont");
const vid = vidCont.querySelector("video");
const background = document.querySelector(".background");
const modal_content = document.querySelector("div.content");

modal_content.addEventListener('click', initEventListener);

function initEventListener() {
    playBtn.classList.add('goDown');
    background.classList.add('blur');
    vidCont.classList.add('show');
    vid.play().then(() => {
        vid.volume = 0.2;
        modal_content.removeEventListener("click", initEventListener);
    });
}

vid.addEventListener('pause', () => {
    playBtn.classList.remove('goDown');
});

vid.addEventListener('playing', () => {
    playBtn.classList.add('goDown');
});
