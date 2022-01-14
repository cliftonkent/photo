const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
var currentphoto = document.querySelectorAll(".photo");


next.addEventListener('click', () => {
      
      if(currentphoto[0].classList.contains("show")) {
          currentphoto[0].classList.remove("show")
          return
      }if (currentphoto[1].classList.contains("show")) {
          currentphoto[1].classList.remove("show")
          return 

      }if (currentphoto[2].classList.contains("show")){
          currentphoto[2].classList.remove("show")
          return
      }
    });


prev.addEventListener('click', () => {
        if(currentphoto[1].classList.contains("show")) {
            currentphoto[0].classList.add("show")
            return
        }if(currentphoto[2].classList.contains("show")){
            currentphoto[1].classList.add("show")
            return
        }else {
            currentphoto[2].classList.add("show")
        }
        
    });

console.log(currentphoto)