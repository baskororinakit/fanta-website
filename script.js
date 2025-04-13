document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate");
  
    animatedElements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(40px)";
      el.style.transition = `all 1s ease-out ${index * 0.2}s`;
    });
  
    setTimeout(() => {
      animatedElements.forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 100);
  });
  