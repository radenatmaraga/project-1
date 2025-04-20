// animasi timeline
        const items = document.querySelectorAll('.timeline-item');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, {
          threshold: 0.2
        });
    
        items.forEach(item => observer.observe(item));
        
//navbar scroll
        let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-90px";
    }
    prevScrollPos = currentScrollPos;
  };
  
//surat
function toggleLetter() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.toggle('open');
  envelope.classList.toggle('opened');
}

//navbar smoother
document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll("#navbar .nav-links a"); // Select all navbar links

  navbarLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault(); // Prevent default anchor click behavior

          const targetId = this.getAttribute("href"); // Get the target section ID
          const targetSection = document.querySelector(targetId); // Find the target section

          targetSection.scrollIntoView({
              behavior: "smooth" // Smooth scroll to the target section
          });
      });
  });
});

