document.querySelector("body").addEventListener('load',loader);

function loader(){
    setTimeout(showPage,3000);
}
function showPage(){
    document.querySelector("body").classList.remove("loader-body");
    document.querySelector(".loader-section").style.display="none";
    document.getElementById("page-content").style.display="block";
}