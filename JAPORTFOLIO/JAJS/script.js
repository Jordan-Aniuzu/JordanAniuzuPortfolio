<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

 document.addEventListener("DOMContentLoaded", function() {
            let elements = document.querySelectorAll(".AboutMe img, .AboutMe p, .AboutMe h2");

            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(element => {
                observer.observe(element);
            });
        });

        function autoScroll() {
            let scrollStep = 2;
            let scrollInterval = setInterval(() => {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    clearInterval(scrollInterval);
                } else {
                    window.scrollBy(0, scrollStep);
                }
            }, 10);
        }


function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".LOGOS img");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        observer.observe(img);
    });
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById('aboutMeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.scrollBy({
        top: 815, // Scroll the page down by 696 pixels
        behavior: 'smooth' // Smooth scrolling 
                                                                              
    });
});

document.getElementById('skillsLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.scrollBy({
        top: 1600, // Scroll the page down by 696 pixels
        behavior: 'smooth' // Smooth scrolling animation
    });
});


document.getElementById('ModulesLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.scrollBy({
        top: 2300, // Scroll the page down by 696 pixels
        behavior: 'smooth' // Smooth scrolling animation
    });
});


  document.getElementById('portfolioLink').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.scrollBy(0, 1000); // Scroll the page down by 10 pixels

          });

    
    
    var typed = new Typed(".auto-type", {
        
        strings: ["University Student", "Brand Representative", "Driven Individual", "Aspiring Software Engineer", "Technician"],
        
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
        
    });

    

