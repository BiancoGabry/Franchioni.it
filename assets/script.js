const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
let slideInterval;

// Duplica le slide per creare un effetto infinito
function duplicateSlides() {
    slidesContainer.innerHTML += slidesContainer.innerHTML;
    slidesContainer.classList.add('duplicate');
}

// Avvia lo slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000); // Cambia slide ogni 4 secondi
}

// Ferma lo slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Avvia e gestisci lo slideshow infinito
function initSlideshow() {
    duplicateSlides();
    startSlideshow();
}

function nextSlide() {
    const slidesWidth = slidesContainer.offsetWidth / 2; // Dato che abbiamo duplicato, la larghezza è divisa per 2
    if (currentIndex >= totalSlides) {
        slidesContainer.style.transition = 'none'; // Disattiva la transizione per il reset
        slidesContainer.style.transform = `translateX(0)`; // Torna alla prima immagine
        currentIndex = 0; // Ripristina l'indice
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 1s ease-in-out'; // Riattiva la transizione
            currentIndex++;
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex++;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        slidesContainer.style.transition = 'none'; // Disattiva la transizione per il reset
        slidesContainer.style.transform = `translateX(-${totalSlides * 100}%)`; // Vai all'ultimo gruppo di immagini
        currentIndex = totalSlides - 1; // Ripristina l'indice
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 1s ease-in-out'; // Riattiva la transizione
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex--;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventi di navigazione
document.querySelector('.arrow.right').addEventListener('click', nextSlide);
document.querySelector('.arrow.left').addEventListener('click', prevSlide);

// Gestione dello scorrimento automatico
document.querySelector('.arrow.right').addEventListener('mouseenter', stopSlideshow);
document.querySelector('.arrow.left').addEventListener('mouseenter', stopSlideshow);
document.querySelector('.arrow.right').addEventListener('mouseleave', startSlideshow);
document.querySelector('.arrow.left').addEventListener('mouseleave', startSlideshow);

// Inizializza lo slideshow
initSlideshow();


//Immagini macchine vendita
function showImage(container, index) {
    const images = container.querySelectorAll('img');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function prevImage(button) {
    const container = button.parentElement;
    let currentIndex = parseInt(container.getAttribute('data-current-index'));
    currentIndex = (currentIndex === 0) ? container.querySelectorAll('img').length - 1 : currentIndex - 1;
    container.setAttribute('data-current-index', currentIndex);
    showImage(container, currentIndex);
}

function nextImage(button) {
    const container = button.parentElement;
    let currentIndex = parseInt(container.getAttribute('data-current-index'));
    currentIndex = (currentIndex === container.querySelectorAll('img').length - 1) ? 0 : currentIndex + 1;
    container.setAttribute('data-current-index', currentIndex);
    showImage(container, currentIndex);
}

// Magic Island
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // or any other threshold value
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


//spostamento href header
// Get all anchor links with an href attribute
const anchorLinks = document.querySelectorAll('a[href*="#"]');

// Add an event listener to each anchor link
anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Get the target element (the section with the corresponding id)
        const target = document.querySelector(link.getAttribute('href'));

        // Calculate the offset (in this case, the height of the header + 20px)
        const offset = document.querySelector('.header').offsetHeight + 20;

        // Scroll to the target element with the offset
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth',
        });

        // Prevent the default anchor link behavior
        event.preventDefault();
    });
});

//menu hamburger
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


// Aggiungi un evento al pulsante "Show more"
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', () => {
        console.log("click");
        const informazioniExtra = button.nextElementSibling;
        if (informazioniExtra.style.display === 'none') {
            informazioniExtra.style.display = 'block';
            button.textContent = 'Mostra di meno';
        } else {
            informazioniExtra.style.display = 'none';
            button.textContent = 'Mostra di più';
        }
    });
});


// schermata di Caricamento
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    
    // Nascondi il caricamento dopo l'animazione
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 3000); // La durata deve corrispondere a quella dell'animazione (2s)
});