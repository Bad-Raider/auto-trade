const btnUpTop = document.querySelector(".btn-back-to-top");

btnUpTop.addEventListener("click", () => {
  comeBackToTopPage();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) { 
    btnUpTop.style.display = 'flex';
  } else {
    btnUpTop.style.display = 'none';
  }
});

 function comeBackToTopPage() {
  window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

