class Cell {
	// Class for each element in the grid
	constructor() {
		// the value stored by each cell
		this.value = 0
	}

	show(y, x) {
		// displays every cell and it's value at the correct position
		push()
		translate(x * 125, y * 125)
		if (this.value == 0) {
			fill(200)
			rect(2.5, 2.5, 120, 120)
		} else {
			let col = map(Math.log2(this.value), 1, 11, 100, 0)
			fill(col)
			rect(2.5, 2.5, 120, 120)
			fill(255)
			text(this.value, 45, 70)
		}
		pop()
	}
}
