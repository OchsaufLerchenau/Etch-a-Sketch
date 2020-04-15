var gridSize;
var rgb;
function promptForGridSize() {
    gridSize = prompt('What size grid would you like?');  
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

function createRandomRGB () {
    rgb = '\'rgb(' + Math.floor(Math.random()*256) + ', '
    + Math.floor(Math.random()*256) + ', ' + Math.floor(Math.random()*256) +')\'';
}

function hover() {
    for (i = 0; i < elements.length; i++) {
            
        elements[i].addEventListener('mouseenter', function (e) {
            createRandomRGB()
            e.target.style.borderRadius = '50%';
            e.target.classList.add('element');
            e.target.setProperty('--rgb', rgb);
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
window.onload = hover()


