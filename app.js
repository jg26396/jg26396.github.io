const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const btnIcons = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
let slideIndex = 0;
showSlides();

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';

        })
    }

    //Sections active class
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            console.log(id);
            //remove selected from the other buttons 
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active');
            })
            
            e.target.classList.add('active');

            //hide other sections 
            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle theme
    const themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}



function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let lists = document.querySelectorAll(".item-list");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if(slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    lists[i].className = lists[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  lists[slideIndex-1].className += " active1";
  setTimeout(showSlides,2000);
}

PageTransitions();