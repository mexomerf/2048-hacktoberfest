let grid

function setup() {
	// Initialising the HTML5 Canvas and the 2D grid array for the game
	createCanvas(500, 500);
	grid = new Array(4).fill().map(() => new Array(4).fill().map(() => new Cell()))
	addNum()
	noStroke()
	textSize(30)
}

function draw() {
	// Displaying the grid at each frame
	grid.map((row, i) => row.map((elem, j) => elem.show(i, j)))
}

function addNum() {
	// Gives an initial value to any random empty cell
	let elem = grid[floor(random(4))][floor(random(4))]
	elem = elem
	if (elem.value == 0) {
		elem.value = random() > .8 ? 4 : 2
		return;
	}
	addNum()
}