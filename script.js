var gridSize;
var rgb;
function promptForGridSize() {
    gridSize = prompt('What size grid would you like? Enter a whole number, 2-80');
    if (gridSize > 80 || gridSize < 2 || isNaN(gridSize)) {
        alert('Wrong imput, please try again!');
        location.reload();
    }
}

function createGrid() {
    container.style.setProperty('--grid-size', gridSize);
    for (i = 0; i < gridSize*gridSize; i++) {
        const p = document.createElement('p');
        p.setAttribute('id', i);
        
        container.appendChild(p);
    }  
}

function makeArray () {
    for (i = 0; i < elem.length; i++) {
        elements.push(elem[i]);
    }
}



function hoverColors() {  
    for (i = 0; i < elements.length; i++) {  
        elements[i].addEventListener('mouseenter', function (e) { 
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.borderRadius = '35%';
            e.target.classList.add('element');
            e.target.style.backgroundColor = '#' + randomColor;
            console.log(randomColor)
        });     
    }   
}

/*
function mouseOverCount() {
    for (i = 0; i < 16; i++) {
        mouseOverAmount--;
    }
}
*/

function toHexConverter (int) {
    var hexa = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    if (int < 10) {
        return int;
    } else {
        return hexa[int];
    }
}

var mouseOverAmount = 0;
function hoverGrays() {
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.add('12');
        elements[i].addEventListener('mouseenter', function (e) { 
           
            e.target.style.borderRadius = '35%';
            var counter = e.target.getAttribute('class');
            hex = toHexConverter(counter);
            if (counter >= 0) {
                var grayScale = '#' + hex + hex + hex;
                e.target.style.backgroundColor = grayScale;

                e.target.setAttribute('class', counter-3)   
            }
        });
    }
}

var elements = []
const elem = document.getElementsByTagName('p');
const body = document.querySelector('body')
const container = document.getElementById('container');
window.onload = promptForGridSize()
window.onload = createGrid();
window.onload = makeArray();
//window.onload = hover()


