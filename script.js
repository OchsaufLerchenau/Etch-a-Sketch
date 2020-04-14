

const button = document.createElement('button');
let gridSize = prompt('What size grid would you like?');
    


function createGrid() {
    container.style.setProperty('--grid-size', gridSize);
    for (i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('element');
        container.appendChild(div);
    }
    
}

function makeArray () {
    for (i = 0; i < elem.length; i++) {
        elements.push(elem[i]);
    }
}

function hover() {
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', function (e) {
            e.target.style.background = 'black';
            e.target.style.borderRadius = '50%'
        });
        
    }   
}



var elements = []
const elem = document.getElementsByClassName('element');
const body = document.querySelector('body')
const container = document.getElementById('container');
body.insertBefore(button, container);
window.onload = createGrid();
window.onload = makeArray();
window.onload = hover()

