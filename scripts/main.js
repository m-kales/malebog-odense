window.onload = function() {
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const swatchRandom = document.querySelector('.swatch-random');
  const eraser = document.querySelector('.eraser');
  let selectedPath;
  let pathId;

  svg.onclick = function clickSvg(event) {
    let target = event.target;
    paint(target);
    pathId = selectedPath.getAttribute('d');
    localStorage.setItem(pathId, color);

  }

  function paint(path) {
    selectedPath = path;
    selectedPath.style.cssText=`fill: ${color}`;
    selectedPath.classList.add('transition');

  }

  eraser.addEventListener('click', () => {
    color = '#fff';
  })
  
  function randomStyle() {
      // random coloring
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        swatchRandom.addEventListener('click', () => {
          let hexRandom = "#";
          for (let i = 0; i < 6; i++) {
            hexRandom += hex[getRandomNumber()];
            color = hexRandom;
            swatchRandom.style.backgroundColor = hexRandom;
            swatchRandom.classList.add('active');
          }
          
          function getRandomNumber() {
            return Math.floor(Math.random() * hex.length);
          }
        })
        
      }
    randomStyle();

  // controls
  clearBtn.addEventListener('click', () => {
    location.reload();
    localStorage.clear();
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
  let color = swatchArray[11].hexColor;
  const swatchList = document.querySelector('.swatch-list');
  function createPalette() {
    for (let i = 0; i < swatchArray.length; i++) {
      let swatch = document.createElement('li');
      swatch.className = 'swatch-item transition';
      swatch.style.backgroundColor = swatchArray[i].hexColor;
      swatch.addEventListener('click', setColor);
      swatchList.appendChild(swatch);

      function setColor() {
        color = swatchArray[i].hexColor;
          if (document.querySelector('.active') !== null) {
            document.querySelector('.active').classList.remove('active');
          }
          swatch.classList.add('active');
      }
    }
  }

  createPalette();

}
