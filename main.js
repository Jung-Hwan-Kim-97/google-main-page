let imgEl = document.querySelector(".img2")
let formEl = document.querySelector(".form")

imgEl.addEventListener("click", function () {
   if (formEl.id == "close") {
      formEl.id = "open"
   }else{
      formEl.id = "close"
   }
})



