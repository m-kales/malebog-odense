const picker = document.querySelector("#picker");
let color = picker.value;
const clsOne = document.querySelectorAll('.cls-1');
const clearBtn = document.getElementById('clear-btn');
const svg = document.querySelector('.illustration');

picker.addEventListener('input', () => {
color = picker.value;
},false);

let selectedPath;
let fillArr = [];

svg.onclick = function(event) {
  let target = event.target;
  paint(target); 
  fillArr.push({selectedPath: selectedPath});
};

function paint(path) {
  selectedPath = path;
  selectedPath.style.cssText=`fill: ${color}`;
  selectedPath.classList.add('transition');
}

clearBtn.addEventListener('click', () => {
  location.reload();
  console.log('reloaded')
})
