// Put your JavaScript heres
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navbar" + " shadow" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" shadow animate-top white", "");
    }
}
