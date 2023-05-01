// Scrollbar.initAll();
Scrollbar.initAll({
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
  
  //sidebar
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.querySelector(".content-container").style.marginLeft = "150px";
    document.querySelector(".navbar-container").style.paddingLeft = "15px";
    document.querySelector(".openbtn").classList.remove("transition-from-left");
    document.querySelector(".openbtn").classList.add("transition-to-left");
      if(window.location.pathname === '/') {
          document.querySelectorAll(".featured-content")[0].style.height = "76vh";
          document.querySelectorAll(".featured-content")[1].style.height = "76vh";
      }
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".content-container").style.marginLeft = "0";
    document.querySelector(".navbar-container").style.paddingLeft = "60px";
    document.querySelector(".openbtn").classList.remove("transition-to-left");
    document.querySelector(".openbtn").classList.add("transition-from-left");
      if(window.location.pathname === '/'){
          document.querySelectorAll(".featured-content")[0].style = "";
          document.querySelectorAll(".featured-content")[1].style = "";
      }
  }
  