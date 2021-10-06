function keyPressed() { 
	// Detects keypress event and calls move function 
	// based on which button was pressed
	if (keyCode == UP_ARROW) 
		moveUp()
	if (keyCode == DOWN_ARROW) 
		moveDown()
	if (keyCode == RIGHT_ARROW) 
		moveRight()
	if (keyCode == LEFT_ARROW) 
		moveLeft()
}

function moveLeft() {
	// Moves all elements to the left and conducts combination
	let moved = false
	for (var i = 0; i < grid.length; i++) {
		// Iteration occurs row-wise
		ptr = 1;
		minPtr = 1
		while (ptr < 4) {
			// Check each cell in a row from left to right
			if (grid[i][ptr].value) {
				// If it has a value
				if (!grid[i][ptr - 1].value) {
					// keep moving it to the left while there are empty spaces
					grid[i][ptr - 1].value = grid[i][ptr].value
					grid[i][ptr].value = 0
					ptr -= 2
					if (ptr < minPtr - 1)
						++ptr
					moved = true
				} else if (grid[i][ptr - 1].value == grid[i][ptr].value) {
					// If it hits a cell with the same value, combine them
					grid[i][ptr - 1].value *= 2
					grid[i][ptr].value = 0
					minPtr ++
					moved = true
				}
			}
			++ptr
		}
	}
	if (moved) 
		addNum()
}

function moveRight() {
	// Modifies the grid so that the necessary move becomes
	// a left move, carries out the move and then restores the array
	grid = grid.map((row) => row.reverse())
	moveLeft()
	grid = grid.map((row) => row.reverse())
}

function moveUp() {
	// Modifies the grid so that the necessary move becomes
	// a left move, carries out the move and then restores the array
	grid = grid[0].map((col, i) => grid.map((row) => row[i]))
	moveLeft()
	grid = grid[0].map((col, i) => grid.map((row) => row[i]))
}

function moveDown() {
	// Modifies the grid so that the necessary move becomes
	// a left move, carries out the move and then restores the array
	grid = grid[0].map((col, i) => grid.map((row) => row[i]))
	moveRight()
	grid = grid[0].map((col, i) => grid.map((row) => row[i]))	
}