
let slideIndex=0;
//call the funtion
slideshow();

function slideshow(){
    //don't add . for classname
    let slides=document.getElementsByClassName("slide");
    //attach the loop parameters properly
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    //increment the slideIndex
    
    if(slideIndex>=slides.length){slideIndex=0};
    slides[slideIndex].style.display="block";
    slideIndex++;
    //the time interval should be inside the function
    setTimeout(slideshow,2000);
   
    
    
}

var typed=new Typed(".auto-type",{
    strings:["Welcome To \n<span style='color:rgb(204, 100, 0);'>EMPIRE \nACADEMY</span> "],
    typeSpeed:150,
    loop:true
});




