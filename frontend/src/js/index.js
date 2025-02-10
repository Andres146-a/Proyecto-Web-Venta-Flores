
//Carrusel
document.addEventListener("DOMContentLoaded", function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.image-box');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalImages = images.length;
    const imageWidth = images[0].offsetWidth + 20; // Incluye margen

    function moveSlide(direction) {
        currentIndex += direction;

        // Control de límites
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Vuelve al último elemento
        } else if (currentIndex >= totalImages) {
            currentIndex = 0; // Vuelve al primero
        }

        // Aplicar desplazamiento
        const offset = -currentIndex * imageWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    // Eventos de los botones
    prevButton.addEventListener("click", function () {
        moveSlide(-1);
    });

    nextButton.addEventListener("click", function () {
        moveSlide(1);
    });

    // Asegurar que inicia correctamente
    moveSlide(0);
});

//
