function initGrid() {
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    // Generate the color codes
    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                var hexColor = "#" + range[r] + range[g] + range[b];
                // Convert hex to RGB
                var rgbColor = hexToRgb(hexColor);
                colors.push(rgbColor);
            }
        }
    }

    // Get reference to the colors and selected divs
    var colorsDiv = document.getElementById('colors');
    var selectedDiv = document.getElementById('selected');

    // Create and append color tiles
    colors.forEach(function(rgb) {
        var tile = document.createElement('div');
        tile.className = 'choice';
        tile.style.backgroundColor = rgbToHex(rgb); // Set tile color as hex

        // Add click event listener to update the selected color
        tile.addEventListener('click', function() {
            selectedDiv.textContent = rgb; // Show RGB code
            selectedDiv.style.backgroundColor = rgbToHex(rgb); // Set background color as hex
        });

        colorsDiv.appendChild(tile);
    });
}

// Convert hex color to RGB
function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// Convert RGB color to hex
function rgbToHex(rgb) {
    var result = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return result ? "#" +
        ("0" + parseInt(result[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(result[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(result[3], 10).toString(16)).slice(-2) : '';
}

window.onload = function () {
    initGrid();
}