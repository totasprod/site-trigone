document.addEventListener("DOMContentLoaded", () => {
    // Récupération des éléments du DOM
    const workshops = document.querySelector(".workshops");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
  
    // Récupération de la largeur d'un atelier et de l'espace entre les ateliers
    const workshopWidth = workshops.querySelector(".workshop").offsetWidth;
    const gap = parseFloat(getComputedStyle(workshops).gap);
  
    // Fonction pour faire défiler les ateliers vers la gauche
    arrowLeft.addEventListener("click", () => {
      workshops.scrollBy({
        left: -(workshopWidth + gap),
        behavior: "smooth",
      });
    });
  
    // Fonction pour faire défiler les ateliers vers la droite
    arrowRight.addEventListener("click", () => {
      workshops.scrollBy({
        left: workshopWidth + gap,
        behavior: "smooth",
      });
    });
  });
  


  