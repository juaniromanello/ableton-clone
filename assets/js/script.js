window.onscroll = function() {stickyScroll()};

var submenu = document.getElementById("submenu");

var sticky = submenu.offsetTop;

function stickyScroll() {
    if (window.pageYOffset >= sticky) {
        submenu.classList.add("sticky");
    } else {
        submenu.classList.remove("sticky");
    }
}