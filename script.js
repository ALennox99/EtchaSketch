const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');

function makeGrid(size) {
  container.innerHTML = ''; // Clear previous squares
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'red';
    });

    container.appendChild(square);
  }
}

resetBtn.addEventListener('click', () => {
  let newSize = prompt("Enter grid size (max 100):", 16);
  if (newSize > 100) newSize = 100;
  if (newSize < 1) newSize = 1;
  makeGrid(newSize);
});

makeGrid(16); // Initial grid
