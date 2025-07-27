/* Scroll to Top */

document.addEventListener('DOMContentLoaded', function() {
            const scrollTopBtn = document.getElementById("scrollTopBtn");

            // Show/Hide the button on scroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 2000) { //
                    scrollTopBtn.style.display = "block";
                } else {
                    scrollTopBtn.style.display = "none";
                }
            });

            // Scroll to top after clicking on button
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

//================================================================================================================================================
// Media Queries for Cards 

document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    function adjustCarouselItems() {
        carousels.forEach(carousel => {
            const inner = carousel.querySelector('.carousel-inner');
            const cards = Array.from(inner.querySelectorAll('.col-lg-4, .col-md-6'));

            // Remove previously generated slides
            if (inner.dataset.originalHtml) {
                inner.innerHTML = inner.dataset.originalHtml;
            } else {
                inner.dataset.originalHtml = inner.innerHTML;
            }

            // Determine how many cards per slide
            let cardsPerSlide = 3;
            if (window.innerWidth <= 768) {
                cardsPerSlide = 1;
            } else if (window.innerWidth <= 992) {
                cardsPerSlide = 2;
            }

            const newSlides = [];
            for (let i = 0; i < cards.length; i += cardsPerSlide) {
                const item = document.createElement('div');
                item.classList.add('carousel-item');
                if (i === 0) item.classList.add('active');

                const row = document.createElement('div');
                row.classList.add('row', 'g-4', 'justify-content-center');

                for (let j = i; j < i + cardsPerSlide && j < cards.length; j++) {
                    row.appendChild(cards[j].cloneNode(true));
                }

                item.appendChild(row);
                newSlides.push(item);
            }

            inner.innerHTML = '';
            newSlides.forEach(slide => inner.appendChild(slide));
        });
    }

    adjustCarouselItems();
    window.addEventListener('resize', adjustCarouselItems);
});
        
//================================================================================================================================================

function openLightbox(src) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox(event) {
  event.stopPropagation(); // prevent clicking on img from closing immediately
  document.getElementById('imageLightbox').style.display = 'none';
}
