// const speed = 200;
$('.accordion dt.expanded + dd').slideDown(200)

$('.accordion dt').on('click', function () {
    let that = $(this);

    // Collapsable
    if (that.parent().hasClass('collapsable')) {

        if (!that.hasClass('expanded')) {
            that.siblings('dt').removeClass('expanded').next('dd').slideUp(200)
        }

        that.toggleClass('expanded').next('dd').slideToggle(200)
        // Standard
    }
})
const csimg = $("dl.viewSeasons > dt");
const cs = $("dl.viewSeasons > dd > dl > dt");
$("img.currentSImage, .currentSDetails > h3").click(function() {
    if (csimg.hasClass("")) {
        csimg.last().click()
    }
    if (cs.last().hasClass("")) {
        cs.last().click()
    }
})
