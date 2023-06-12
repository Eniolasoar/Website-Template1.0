
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
