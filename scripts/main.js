window.onload = function() {
  const picker = document.querySelector("#picker");
  let color = picker.value('#ff00ff');
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const showHex = document.querySelector("#show-hex");
  const toggle = document.getElementById('toggle');
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
  
  toggle.addEventListener('change', (e) => {
    this.checkboxValue = e.target.checked ? 'on' : 'off';

    if (toggle.checked) {
      console.log('if');
      color = picker.value;
      picker.addEventListener('input', () => {
      color = picker.value;
      }, false);
      svg.addEventListener('click', () => {
        color = picker.value;
      })
      picker.classList.remove('hide');
      showHex.classList.add('hide');
      

    } else if (!toggle.checked) {
      console.log('else');

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
    }
  )
  // controls
  clearBtn.addEventListener('click', () => {
    location.reload();
    console.log('reloaded')
  })
}
