window.onload = function() {
  const picker = document.querySelector("#picker");
  //let color = 'picker.value';
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const showHex = document.querySelector("#show-hex");
  const btnRandom = document.getElementById('random');
  //const btnPicker = document.getElementById('pick-color');
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

    /*btnPicker.addEventListener('click', () => {
      color = picker.value;
      btnPicker.classList.add('mode-active');
      btnRandom.classList.remove('mode-active');
      pickerStyle();
    })*/
  
    btnRandom.addEventListener('click', () => {
      btnRandom.classList.add('mode-active');
      //btnPicker.classList.remove('mode-active');
      randomStyle();
    })
  
  function randomStyle() {
    //picker.classList.add('hide');
    //showHex.classList.remove('hide');
      // random coloring
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        svg.addEventListener('click', () => {
          let hexColor = "#";
          for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
            color = hexColor;
          }
          
          //showHex.innerHTML = hexColor;
          
          function getRandomNumber() {
            return Math.floor(Math.random() * hex.length);
          }
        })
      }

    /*function pickerStyle() {
      picker.addEventListener('input', () => {
      color = picker.value;
      }, false);
      svg.addEventListener('click', () => {
        color = picker.value;
      })
      picker.classList.remove('hide');
      showHex.classList.add('hide');
    }*/

  // controls
  clearBtn.addEventListener('click', () => {
    location.reload();
    console.log('reloaded')
  })

  // palette
  const swatchArray = [
    {
        name: 'swatch_01',
        hexColor: '#FFFF00'
    },
    {
        name: 'swatch_02',
        hexColor: '#FF8532'
    },
    {
        name: 'swatch_03',
        hexColor: '#80FF80' 
    },
    {
        name: 'swatch_04',
        hexColor: '#00CC00' 
    },
    {
        name: 'swatch_05',
        hexColor: '#009999' 
    },
    {
        name: 'swatch_06',
        hexColor: '#820000' 
    },
    {
        name: 'swatch_07',
        hexColor: '#002B80' 
    },
    {
        name: 'swatch_08',
        hexColor: '#CC0052' 
    },
    {
        name: 'swatch_09',
        hexColor: '#B30047' 
    },
    {
        name: 'swatch_10',
        hexColor: '#C653C6' 
    },
    {
        name: 'swatch_11',
        hexColor: '#006666' 
    },
    {
        name: 'swatch_12',
        hexColor: '#F7AAC9' 
    }
  ]
  let color = swatchArray[0].hexColor;
  const swatchList = document.querySelector('.swatch-list');

  function createPalette() {
    for (let i = 0; i < swatchArray.length; i++) {
      let swatch = document.createElement('li');
      swatch.className = 'swatch-item--circle transition';
      swatch.style.backgroundColor = swatchArray[i].hexColor;
      swatch.addEventListener('click', setColor);
      swatchList.appendChild(swatch);
      function setColor() {
        color = swatchArray[i].hexColor;
        swatch.addEventListener('click', function() {
          (document.querySelector('.mode-active')) ? document.querySelector('.mode-active').classList.remove('mode-active') : '';
          this.classList.add('mode-active');
        })
      }
    }
  }
  createPalette();

}