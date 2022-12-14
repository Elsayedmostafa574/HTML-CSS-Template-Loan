const links = document.getElementById("links");
const showLinks = document.getElementById("showLinks");

links.onclick = function(){
    showLinks.classList.toggle("showLinks")
}
new WOW().init();