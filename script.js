const screen = document.querySelector('.screen');
const input = document.querySelector('#grid-size');
const button = document.querySelector('#button');

function createGrid(size) {
	size = parseInt(size);
	
	if (size <= 1) {size = 1;} 
	else if (size >= 300) {size = 300;}
	else if (isNaN(size)) {size = 64;}

	while (screen.firstChild) {
		screen.removeChild(screen.firstChild);
	}

	screen.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`

	for (let i = 0; i < (size**2); i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.addEventListener('mouseover', function() {
			square.style.backgroundColor = 'black';
		});
		screen.appendChild(square);
	}
}

createGrid(64);

button.addEventListener('click', () => createGrid(input.value));