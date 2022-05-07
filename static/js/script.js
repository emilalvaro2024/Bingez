//splidejs initiation
document.addEventListener("DOMContentLoaded", function () {
  let elms = document.getElementsByClassName("splide");
  for (let i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i], {
      type: "slide",
      rewind: true,
      // height   : '11rem',
      autoWidth: true,
      focus: "center",
      drag: true,
      perPage: 5,
      //   padding: "3em",
      perMove: 1,
      waitForTransition: true,
      // autoplay: true,
      // pauseOnHover: true,
      // pauseOnFocus: true,
    }).mount();
  }
});

// Scrollbar.initAll();
const scrollbar = Scrollbar.init(document.querySelector("body"), {
  // Momentum reduction damping factor, a float value between (0, 1), the lower the value is, the more smooth the scrolling will be (also the more paint frames).
  damping: 0.04,

  // Minimal size for scrollbar thumb.
  thumbMinSize: 5,

  // Render scrolling by integer pixels
  renderByPixels: true,

  // Whether allow upper scrollable content to continue scrolling when current scrollbar reaches edge.
  // When set to 'auto', it will be enabled on nested scrollbars, and disabled on first-class scrollbars.
  continuousScrolling: "auto",
});
