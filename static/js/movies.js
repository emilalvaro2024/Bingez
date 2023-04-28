let genreOption = document.querySelector('#slct');
genreOption.addEventListener("change", function () {
    console.log(this.value)
    if (this.value === "all") {
        window.location.replace(`${window.location.origin + window.location.pathname}`)
    } else {
        window.location.replace(`${window.location.origin + window.location.pathname}?genre=${this.value}`)
    }
})
let genre = window.location.search.split("=")[1];
if (window.location.search !== "" && genre !== "" || genre !== undefined) {
    genreOption.value = genre
}
