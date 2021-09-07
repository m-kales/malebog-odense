window.onload = function() {
  const clearBtn = document.getElementById('clear-btn');
  const svg = document.querySelector('.illustration');
  const swatchRandom = document.querySelector('.swatch-random');
  const eraser = document.querySelector('.eraser');
  let selectedPath;
  let pathId;
  let color;
  let md5Hash;

  function setFills() {
    let fillPath = svg.querySelectorAll('path[d]');
    Object.entries(localStorage).forEach(([key, value]) => {
      fillPath.forEach(function(path) {
        let d = path.getAttribute('d');
        if ( key === md5(d)) {
        path.style.fill = value;
        }
      });
    });
  }

  setFills();

  svg.onclick = function clickSvg(event) {
    let target = event.target;
    paint(target);
    pathId = selectedPath.getAttribute('d');
    md5Hash = md5(pathId);
    localStorage.setItem(md5Hash, color);
    console.log(md5Hash);
  }

  function paint(path) {
    selectedPath = path;
    selectedPath.style.fill = color;
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
  })

  // palette
  const swatchArray = [
    {
        name: 'swatch_01',
        hexColor: '#ffcd00'
    },
    {
        name: 'swatch_02',
        hexColor: '#faff98'
    },
    {
        name: 'swatch_03',
        hexColor: '#bbdd00' 
    },
    {
        name: 'swatch_04',
        hexColor: '#5a8900' 
    },
    {
        name: 'swatch_05',
        hexColor: '#009c89' 
    },
    {
        name: 'swatch_06',
        hexColor: '#e31d04' 
    },
    {
        name: 'swatch_07',
        hexColor: '#ff7b83' 
    },
    {
        name: 'swatch_08',
        hexColor: '#ffa6a0' 
    },
    {
        name: 'swatch_09',
        hexColor: '#320e00' 
    }
  ]
  color = swatchArray[0].hexColor;
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