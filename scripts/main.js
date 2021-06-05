const picker = document.querySelector("#picker");
let color = picker.value;
const clsOne = document.querySelectorAll(".cls-1");
picker.addEventListener("input", function() {
color = picker.value;
},false);
for (let i = 0; i < clsOne.length; i++) {
  clsOne[i].addEventListener('click', () => {
    clsOne[i].style.fill = color;
    console.log(color);
  });
}

