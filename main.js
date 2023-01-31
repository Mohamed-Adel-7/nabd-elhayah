let bar = document.getElementById("bar");
let linksNav  =document.getElementById("links-nav");
let xMrk = document.getElementById("xMark");
// bar.onclick=function(){
//    linksNav.style.display="block";
// };
bar.addEventListener("click", function(){
    linksNav.style.display="block";
    xMrk.style.display="block"
})
xMrk.addEventListener("click", function(){
    linksNav.style.display="none";
    xMrk.style.display="none"
})