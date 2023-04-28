const inputField = document.querySelector(".searchInput > input")
const resultContainer = document.querySelector(".searchLiveResult")
inputField.addEventListener("focus", function () {
    resultContainer.style.display = "block";
})

// hide result container when clicked outside of it
document.addEventListener('click', function(event) {
    // console.log(event.target)
    let isClickInsideElement = resultContainer === event.target || inputField === event.target || event.target.classList.contains("searchResults");
    // console.log(isClickInsideElement)
    if (!isClickInsideElement) {
        resultContainer.style = "";
    }
});
function showResultsContainer () {
    resultContainer.style.opacity = 1;
    resultContainer.style.transform = "translateY(0)";
    resultContainer.style.pointerEvents = "auto";
}
function hideResultsComtainer () {
    resultContainer.style = ""
    resultContainer.style.display = "block"
}

inputField.addEventListener("input", function () {
    let searchStr = this.value
    // console.log(searchStr)
    if (searchStr !== "") {
        const xhr = new window.XMLHttpRequest()
        xhr.open('GET', `/search?query=${searchStr}`, true)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
        xhr.onload = function () {
            // console.log("done")
            let elements = JSON.parse(this.responseText).results;
            // console.log(elements)
            if (elements.length !== 0) {
                let resultContainerHtml = "";
                for (let e of elements) {
                    // console.log(e.image)
                    resultContainerHtml += `<div class="searchResults">
                        <a href="/${e.type}/${e.link}" target="_blank"><img src="/static/img/${e.image}" alt="${e.image}"></a>
                        <a href="/${e.type}/${e.link}" target="_blank"><h4>${e.title} <span>in ${e.type}</span></h4></a>
                    </div>`
                }
                resultContainer.innerHTML = resultContainerHtml
                showResultsContainer()
            }else {
                resultContainer.innerHTML = '<div class="noResult">no result</div>'
                showResultsContainer()
            }
        }
        xhr.send()
    }else {
        resultContainer.innerHTML = ''
        hideResultsComtainer()
    }
})

//Toggle dark and light theme
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.featured-content,.search"
);
// let slidepgnn = document.querySelectorAll("ul.splide__pagination li button.splide__pagination__page");

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    //   slidepgnn.forEach(function (element) {
    //     element.classList.toggle("active");
    //   });
    ball.classList.toggle("active");
});

//sidebar
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".content-container").style.marginLeft = "150px";
    document.querySelector(".navbar-container").style.paddingLeft = "15px";
    document.querySelectorAll(".featured-content")[0].style.height = "76vh";
    document.querySelectorAll(".featured-content")[1].style.height = "76vh";
    document.querySelector(".openbtn").classList.remove("transition-from-left");
    document.querySelector(".openbtn").classList.add("transition-to-left");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".content-container").style.marginLeft = "0";
    document.querySelector(".navbar-container").style.paddingLeft = "60px";
    document.querySelectorAll(".featured-content")[0].style = "";
    document.querySelectorAll(".featured-content")[1].style = "";
    document.querySelector(".openbtn").classList.remove("transition-to-left");
    document.querySelector(".openbtn").classList.add("transition-from-left");
}

// scroll to the element it is homepage else redirect to homepage with element id query parameter
const scrollTo = elem_id => {
    if (window.location.pathname !== '/'){
        window.location.replace(window.location.origin + "?scrollto=" + elem_id);
        return;
    }
    scrollbar.scrollIntoView(document.getElementById(`${elem_id}`));
}

let nav_elem = document.querySelector(".menu-list").children;
for (let i of nav_elem) {
    if (i !== nav_elem[0]) {
        i.addEventListener("click", function (e) {
            e.preventDefault()
            let elem_id = i.firstElementChild.href.split("#")[1]
            // console.log(elem_id)
            scrollTo(elem_id)
            // scrollbar.scrollIntoView(document.getElementById(`${elem_id}`))
        })
    }
}

let side_elem = document.querySelector("#mySidebar").children;
for (let i of side_elem) {
    if (i !== side_elem[0] && i !== side_elem[1]) {
        i.addEventListener("click", function (e) {
            e.preventDefault()
            let elem_id = i.href.split("#")[1]
            // console.log(elem_id)
            closeNav()
            setTimeout(function () {
                scrollTo(elem_id);
                // scrollbar.scrollIntoView(document.getElementById(`${elem_id}`))
            }, 500)
        })
    }
}

// get element id from search param and scroll to the view
(function (){
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);
    if (!urlParams.has('scrollto')){
        return;
    }
    setTimeout(() => scrollTo(urlParams.get('scrollto')), 200);
    // scrollTo(urlParams.get('scrollto'));
})();