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

function hoverGrays() {
    for (i = 0; i < elements.length; i++) {
          
        elements[i].addEventListener('mouseenter', function (e) { 
            var mouseOverAmount = 0;
            mouseOverAmount++;
            e.target.style.borderRadius = '35%';
            e.target.classList.add('element');
            //mouseOverAmount = mouseOverAmount - 8;
            var grayScale = '#' + mouseOverAmount.toString(16)
            + mouseOverAmount.toString(16) + mouseOverAmount.toString(16);
            console.log(grayScale);
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


