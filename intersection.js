function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showPage');
      } else {
        entry.target.classList.remove('showPage');
      }
    });
  }

const options = {
    threshold: 0.75,
  }

const target=document.querySelector(".hiddenPage");
const observer=new IntersectionObserver(handleIntersection);
observer.observe(target)

function handleIntersection2(entries2){
  entries2.map((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("auto-type2");

      var typed2=new Typed(".auto-type2",{
        strings:["We are an organisation devoted in impacting you with the necessary knowledge you need to be a world-class student.We pride in giving you the best educational services needed. "],
        typeSpeed:30
    });
    }
  })
}

const target2=document.querySelector("#textType");
const observer2=new IntersectionObserver(handleIntersection2);
observer2.observe(target2);

const observer3=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log("no fear");
      if(entry.isIntersecting){
          entry.target.classList.add("showServices");
          console.log("i am here");
      }
    
  })
})

const target3=document.querySelectorAll(".service");
target3.forEach((el)=>observer3.observe(el));

