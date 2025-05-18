document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
  
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transition = "opacity 1s ease-in-out";
    });
  
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.style.opacity = 1;
        }
      });
    });
  });
  