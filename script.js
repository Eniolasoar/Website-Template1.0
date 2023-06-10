
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
    slideIndex++;
    if(slideIndex>=slides.length){slideIndex=0};
    slides[slideIndex].style.display="block";
    //the time interval should be inside the function
    setTimeout(slideshow,2000);
   
    
    
}

var typed=new Typed(".auto-type",{
    strings:["Welcome To SOAR ACADEMY "],
    typeSpeed:150,
    loop:true
});


