  let sliderimages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left'),
arrowRight = document.querySelector('#arrow-right'),
current = 0;

function reset() {
    for(let i = 0; i < sliderimages.length; i++) {
        sliderimages[i].style.display = 'none';

    } 
}

function startSlide(){
    reset();
    sliderimages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderimages[current - 1].style.display = 'block';
    current--;
}

function slideRigth(){
    reset();
    sliderimages[current + 1].style.display = 'block';
    current++
}

arrowLeft.addEventListener('click', function() {
    if(current === 0){
        current = sliderimages.length;
    }
    slideLeft();
})

arrowRight.addEventListener('click', function() {
    if(current === sliderimages.length - 1){
        current = - 1;
    }
    slideRigth();
})

startSlide();