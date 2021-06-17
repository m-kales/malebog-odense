window.onload = function() {
  const picker = document.querySelector("#picker");
  let color = picker.value;
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const showHex = document.querySelector("#show-hex");
  const btnRandom = document.getElementById('random');
  const btnPicker = document.getElementById('pick-color');
  let selectedPath;

  svg.onclick = function clickSvg(event) {
    let target = event.target;
    paint(target); 
  };

  function paint(path) {
    selectedPath = path;
    selectedPath.style.cssText=`fill: ${color}`;
    selectedPath.classList.add('transition');
  }
  
randomStyle();

    btnPicker.addEventListener('click', () => {
      color = picker.value;
      btnPicker.classList.add('active-mode');
      btnRandom.classList.remove('active-mode');
      console.log('Picker clicked');
      pickerStyle();
    })
  
    btnRandom.addEventListener('click', () => {
      btnRandom.classList.add('active-mode');
      btnPicker.classList.remove('active-mode');
      console.log('Random clicked');
      randomStyle();
    })
  
  function randomStyle() {
    picker.classList.add('hide');
    showHex.classList.remove('hide');
      // random coloring
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        svg.addEventListener('click', () => {
          let hexColor = "#";
          for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
            color = hexColor;
          }
          
          showHex.innerHTML = hexColor;
          
          function getRandomNumber() {
            return Math.floor(Math.random() * hex.length);
          }
        })
      }

    function pickerStyle() {
      picker.addEventListener('input', () => {
      color = picker.value;
      }, false);
      svg.addEventListener('click', () => {
        color = picker.value;
      })
      picker.classList.remove('hide');
      showHex.classList.add('hide');
    }

  // controls
  clearBtn.addEventListener('click', () => {
    location.reload();
    console.log('reloaded')
  })
}