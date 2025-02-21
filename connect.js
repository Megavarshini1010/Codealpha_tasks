const buttonsBut = document.querySelectorAll(".buttons_but button");
const cardsCar = document.querySelectorAll(".cards_car .main");
const cardclick =(e) =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
       cardsCar.forEach(main => {
         main.classList.add("hide");
          if (main.dataset.name === e.target.dataset.name ||  e.target.dataset.name === "all" ) {
      main.classList.remove("hide");
        }
    });
};
buttonsBut.forEach(button => button.addEventListener("click",cardclick)); 
