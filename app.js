const board = document.querySelector('#board')
const SQUARES_NUMBER = 300

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', (e) => setColor(e.target))

	square.addEventListener('mouseleave', (e) => removeColor(e.target))

	board.append(square)
}

function setColor(element) {
	element.style.backgroundColor = `${getRandomColor()}`
	element.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 5px ${getRandomColor()}`
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = '0 0 2px #000'
}
function getRandomColor(){
	return `#${Math.floor(Math.random()*16777215).toString(16)}`
}