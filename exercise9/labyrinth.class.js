var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
    this.width = this.map[0].length;
    this.height = this.map.length;
}

Labyrinth.START = { x: 0, y: 0 }; // Starting position
Labyrinth.END = { x: 5, y: 4 };   // Ending (destination) position

Labyrinth.prototype.printConsole = function() {
    for (var y = 0; y < this.height; y++) {
        var row = '';
        for (var x = 0; x < this.width; x++) {
            row += this.map[y][x] === 1 ? '*' : ' ';
        }
        console.log(row);
    }
};

Labyrinth.prototype.addPlayerAndDestination = function() {
    this.player = { ...Labyrinth.START };
    this.destination = { ...Labyrinth.END };
};

Labyrinth.prototype.printDisplay = function(id) {
    var container = document.getElementById(id);
    container.style.position = 'relative';
    container.style.width = this.width * CELL_SIZE + 'px';
    container.style.height = this.height * CELL_SIZE + 'px';
    container.style.border = '2px solid black';

    container.innerHTML = ''; // Clear existing content

    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var cell = document.createElement('div');
            cell.style.position = 'absolute';
            cell.style.width = cell.style.height = CELL_SIZE + 'px';
            cell.style.left = x * CELL_SIZE + 'px';
            cell.style.top = y * CELL_SIZE + 'px';
            if (this.map[y][x] === 1) {
                cell.style.backgroundColor = 'grey'; // Wall
            } else if (this.player.x === x && this.player.y === y) {
                cell.style.backgroundColor = 'red'; // Player
            } else if (this.destination.x === x && this.destination.y === y) {
                cell.style.backgroundColor = 'green'; // Destination
            } else {
                cell.style.backgroundColor = 'white'; // Empty space
            }
            cell.style.border = '1px solid black';
            container.appendChild(cell);
        }
    }
};

Labyrinth.prototype.movePlayer = function(dx, dy) {
    var newX = this.player.x + dx;
    var newY = this.player.y + dy;

    if (newX >= 0 && newX < this.width && newY >= 0 && newY < this.height && this.map[newY][newX] === 0) {
        this.player.x = newX;
        this.player.y = newY;

        // Check if player has reached the destination
        if (this.player.x === this.destination.x && this.player.y === this.destination.y) {
            alert('Congratulations!');
        }
    }
};