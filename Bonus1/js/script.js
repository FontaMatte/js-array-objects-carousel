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
const thumbnails = document.querySelector('.thumbnails');


for (let i = 0; i < images.length; i++) { //OPPURE images.forEach((Singleimage) => {});

    // creazione Slide
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `<img src="${images[i].image/*forEach -> singleImage.image*/}">
                        <div class="img-info">
                            <h2>
                            ${images[i].title/*forEach -> singleImage.title*/}
                            </h2>
                            <p>
                            ${images[i].text/*forEach -> singleImage.text*/}
                            </p>
                        </div>`;
    carousel.append(slide);

    // creazione thumbnails
    const thumb = document.createElement('div');
    thumb.classList.add('thumb');
    // thumb.style.height = (100 / images.length + '%'); setting dinamico height delle thumb in base al n di elementi
    thumb.innerHTML = `<img src="${images[i].image}">`;
    thumbnails.append(thumb);

}


const allSlides = document.querySelectorAll('.slide');
const allThumbnails = document.querySelectorAll('.thumb');

let currentSlide = 0;
allSlides[currentSlide].classList.add('current');
allThumbnails[currentSlide].classList.add('current-thumb');

const previousImage = document.querySelector('.previous');
const nextImage = document.querySelector('.next');

// al click passo all'immagine sucessiva
nextImage.addEventListener('click',
    function() {
        console.log('cliccato next');

        allSlides[currentSlide].classList.remove('current'); //rimuovo classe "current" alla vecchia slide
        allThumbnails[currentSlide].classList.remove('current-thumb');

        if ( currentSlide < (images.length - 1)) {

            currentSlide += 1; //ad ogni click incemento l'indice di 1 per cambiare immagine

        } 

        else {

            currentSlide = 0; 
 
        }

        allSlides[currentSlide].classList.add('current');  //aagiungo la classe "current" alla nuova slide
        allThumbnails[currentSlide].classList.add('current-thumb');
    }
    
);

// al click passo all'immagine precedente
previousImage.addEventListener('click',
    function() {
        console.log('cliccato previous');

        allSlides[currentSlide].classList.remove('current'); //rimuovo classe "current" alla vecchia slide
        allThumbnails[currentSlide].classList.remove('current-thumb');

        if ( currentSlide > 0 ) {   

            currentSlide -= 1;

        }

        else {

            currentSlide = images.length - 1;
        }

        allSlides[currentSlide].classList.add('current');  //aagiungo la classe "current" alla nuova slide    
        allThumbnails[currentSlide].classList.add('current-thumb');    
    }
    
);