var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    let navbarHeight = $("#navbar").height() + 30;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#navbar").style.top = "0";
    }
    else {
        $("#navbar").css("top", -navbarHeight);
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    if (prevScrollpos < $(window).height()) {
        if (window.location.href.indexOf("helikoptery") > -1 || window.location.href.indexOf('/#heli') > -1) {
            const element = document.querySelector("#heli");
            element.scrollIntoView();
        }
        else if (window.location.href.indexOf("kontakt") > -1 || window.location.href.indexOf('/#contact') > -1) {
            const element = document.querySelector("#contact");
            element.scrollIntoView();
        }
    }
});

$(".logo").click(function () {
    location = "home";
});