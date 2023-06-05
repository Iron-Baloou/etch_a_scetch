const drawpad = document.getElementById('drawpad');

// random farben bei span elementen
const span = document.querySelectorAll('span');

function changeColors() {
  span.forEach(span => {
    const colorred = Math.floor(Math.random() * 255);
    const colorgreen = Math.floor(Math.random() * 255);
    const colorblue = Math.floor(Math.random() * 255);
    span.style.color = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
  });
}

setInterval(changeColors, 2000);

//rastergr0esse button
const rasterButton = document.getElementById('raster');
rasterButton.addEventListener('click', () => {
    const size = prompt('Rastergroesse eingeben');
    drawpad.innerHTML = '';
    raster(size);
});

//reset
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

// Raster erstellen 
function raster(size) {
    for (let i = 0; i < size; i++) {
        // Zeilen erzeugen
        const row = document.createElement('div');
        row.classList.add('row');
        drawpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            // Zellen erzeugen
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid black';
            row.appendChild(cell);
            //einfärben
            cell.addEventListener('mouseover', () => {
                colorred = Math.floor(Math.random() * 255);
                colorgreen = Math.floor(Math.random() * 255);
                colorblue = Math.floor(Math.random() * 255);
                //console.log(colorred, colorgreen, colorblue);
                cell.style.backgroundColor = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
            });
        }
    }
}
raster();




