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