const body = document.querySelector('body')
const colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'yellow',
    'orange',
    'red'
]

const container = document.querySelector('section');
const heading = document.querySelector('h1')

const changeHeadingColor = function(){
    heading.style.color = this.style.backgroundColor;
}

for( let color of colors){
    const box = document.createElement('div')
    box.style.backgroundColor = color
    box.classList.add('box')
    container.appendChild(box);

    box.addEventListener('mouseover', changeHeadingColor);
}