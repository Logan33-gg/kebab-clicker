let kebab = 0;
const counter = document.getElementById("counter");
const button = document.getElementById("kebabBtn");
const multiplierBtn = document.getElementById("upgrade")
button.addEventListener("click", function() {
    kebab = kebab + 1;
    counter.textContent = "kebab: " + kebab;
});
let clickPower = 1;

multiplierBtn.addEventListener("click", function() {
    if (kebab >= 1.5) {
        kebab = kebab - 1.5;
            clickPower = clickPower + 1;
            counter.textContent =
        "Kebab: " + kebab;
    }
})

let clickpower = 1;
multiplierBtn.addEventListener (
    "click", fuction() {
        if (kebab >= 50) {
         kebabs = kebab - 50;
         clickpower = clickpower + 1;
         counter.textcontent = "kebabs "+ kebab;
        }
      })