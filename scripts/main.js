window.onload = function() {
  const picker = document.querySelector("#picker");
  let color = picker.value;
  const clsOne = document.querySelectorAll('.cls-1');
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const showHex = document.querySelector("#show-hex");

  if (document.getElementById('toggle').checked) {
    console.log('if');
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
    picker.classList.remove('hide');
    showHex.classList.add('hide');

  } else {
    console.log('else');
      // random coloring
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      for (let i = 0; i < clsOne.length; i++) {
        clsOne[i].addEventListener('click', () => {
          let hexColor = "#";
          for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
          }
          clsOne[i].style.fill = hexColor;
          console.log(hexColor);
          showHex.innerHTML = hexColor;
          picker.classList.add('hide');
          showHex.classList.remove('hide');
        });
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  }

  // controls
  clearBtn.addEventListener('click', () => {
    location.reload();
    console.log('reloaded')
  })
}