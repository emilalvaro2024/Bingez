// watch now modal js
document.querySelector("input#watchButton").addEventListener('change', (e) => {
    // console.log(e.target.checked);
    if (e.target.checked){
        document.body.classList.add("modalActive");
        scrollbar.scrollTo(0, 0, 10);
        // scrollbar.destroy(document.body);
    } else {
        document.body.classList.remove("modalActive");
        vid.pause();
    }
});