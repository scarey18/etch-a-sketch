const screen = document.querySelector('.screen');

for (let i = 0; i < (64*64); i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', function() {
		square.style.backgroundColor = 'black';
	});
	screen.appendChild(square);
}