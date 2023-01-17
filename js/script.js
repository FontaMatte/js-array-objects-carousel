const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.querySelector('.carousel');
const previousImage = document.querySelector('.previous');
const nextImage = document.querySelector('.next');


for (let i = 0; i < images.length; i++) {

    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `<img src="${images[i].image}">
                        <div class="img-info">
                            <h2>
                            ${images[i].title}
                            </h2>
                            <p>
                            ${images[i].text}
                            </p>
                        </div>`;
    carousel.append(slide);

}

const allSlides = document.querySelectorAll('.slide');

let currentSlide = 0;
allSlides[currentSlide].classList.add('current');

// al click passo all'immagine sucessiva
nextImage.addEventListener('click',
    function() {
        console.log('cliccato next');

        allSlides[currentSlide].classList.remove('current'); //rimuovo classe "current" alla vecchia slide

        if ( currentSlide < (images.length - 1)) {

            currentSlide += 1; //ad ogni click incemento l'indice di 1 per cambiare immagine

            previousImage.classList.remove('hidden');    //rimuovo la classe hidden per rendere visibile la freecia previous  

        } 

        else {

            currentSlide = 0; 
 
        }

        allSlides[currentSlide].classList.add('current');  //aagiungo la classe "current" alla nuova slide
    }
    
);

// al click passo all'immagine precedente
previousImage.addEventListener('click',
    function() {
        console.log('cliccato previous');

        allSlides[currentSlide].classList.remove('current'); //rimuovo classe "current" alla vecchia slide

        if ( currentSlide > 0 ) {   

            currentSlide -= 1;

            nextImage.classList.remove('hidden');
        }

        else {

            currentSlide = images.length - 1; //ad ogni click incemento l'indice di 1 per cambiare immagine
        }

        allSlides[currentSlide].classList.add('current');  //aagiungo la classe "current" alla nuova slide        
    }
    
);