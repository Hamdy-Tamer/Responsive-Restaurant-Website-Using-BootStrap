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

// Reservation Form

const reservationForm = document.querySelector('.reservation-form');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const fullNameInput = this.querySelector('input[placeholder="Full Name"]');
        
        // Validate Full Name (at least first and last name)
        const nameParts = fullNameInput.value.trim().split(/\s+/);
        const nameRegex = /^[A-Z][a-z]{2,14}$/;
        
        // Check if at least 2 names provided
        if (nameParts.length < 2) {
            alert('Please enter both first and last name');
            fullNameInput.focus();
            return;
        }
        
        // Validate each name part
        for (let i = 0; i < nameParts.length; i++) {
            if (!nameRegex.test(nameParts[i])) {
                alert('Each name must:\n- Start with capital letter\n- Other letters must be lowercase\n- Contain only letters (no numbers/special characters)\n- Be 3-15 characters long');
                fullNameInput.focus();
                return;
            }
        }
        
        // If all validations pass, submit the form
        this.submit();
        this.reset();
        alert('Your book is done');
    });
}

// Disable past dates in reservation form
const dateInput = document.getElementById('reservationDate');
if (dateInput) {
    // Set min date to today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const minDate = yyyy + '-' + mm + '-' + dd;
    
    dateInput.setAttribute('min', minDate);
}

//================================================================================================================================================

// Comments Form

const commentForm = document.querySelector('.comment-form');

if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const firstNameInput = this.querySelector('input[placeholder="First Name"]');
        const lastNameInput = this.querySelector('input[placeholder="Last Name"]');
        const commentText = this.querySelector('textarea');
        
        // Validation regex - first capital, rest lowercase, 3-15 letters
        const nameRegex = /^[A-Z][a-z]{2,14}$/;
        
        // Validate First Name
        if (!nameRegex.test(firstNameInput.value)) {
            alert('First name must:\n- Start with capital letter\n- All other letters lowercase\n- Contain only letters\n- Be 3-15 characters long');
            firstNameInput.focus();
            return;
        }
        
        // Validate Last Name
        if (!nameRegex.test(lastNameInput.value)) {
            alert('Last name must:\n- Start with capital letter\n- All other letters lowercase\n- Contain only letters\n- Be 3-15 characters long');
            lastNameInput.focus();
            return;
        }
        
        // Validate Comment
        if (commentText.value.trim().length < 10) {
            alert('Please provide a more detailed comment (at least 10 characters)');
            commentText.focus();
            return;
        }
        
        // If all validations pass
        this.submit();
        this.reset();
        alert('Thank you for your feedback!');
    });
}

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
