const picker = document.querySelector("#picker");
let color = picker.value;
const clsOne = document.querySelectorAll('.cls-1');
const clearBtn = document.getElementById('clear-btn');

picker.addEventListener('input', () => {
color = picker.value;
},false);

let selectedPath;

const svg = document.querySelector('.illustration');
svg.onclick = function(event) {
  let target = event.target;
  highlight(target); 
  console.log(target);
};

function highlight(path) {
  selectedPath = path;
  selectedPath.style.cssText=`fill: ${color}`;
}

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  console.log('storage cleared')
})
