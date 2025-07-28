// Add your code to this file

let imageArray = document.querySelectorAll('img');
let color = document.querySelector('body');
let pokemonFont = document.querySelector('h3');
for(let i = 0; i < imageArray.length; i++){
    imageArray[i].style.borderStyle = 'dotted'
    imageArray[i].style.borderColor = 'orange';
    imageArray[i].style.borderwidth = '5px'
}

    color.style.backgroundColor = 'blue'

let centerh2 = document.querySelector('h2');

centerh2.style.textAlign = 'center'