var ratingChoices = document.querySelectorAll(".rating-choice")
var rating = document.querySelector(".rating")
console.log(ratingChoices)

var x;

const selectorFunc = (i) => {
   return function () {
    ratingChoices[i].classList.add("active")
    x = ratingChoices[i].innerHTML;
    rating.innerHTML = x
    console.log(Number(x))
     for(var j = 0; j<ratingChoices.length; ++j) {
        if(i != j) {
            ratingChoices[j].classList.remove("active")
        }
    }
   }
}

for(var i = 0; i<ratingChoices.length; ++i) {
    ratingChoices[i].addEventListener("click",selectorFunc(i))
}

// Submit Functionality

const ratingCont = document.querySelector(".rating-comp-container")
const thankYou = document.querySelector(".thank-you-cont")
const Submit = document.querySelector(".submit-button")

Submit.addEventListener("click", ()=> {
    ratingCont.classList.add("shower")
    thankYou.classList.remove("shower")
})