let clearBtn = document.querySelector('.clearboard')
let board = document.querySelector('.board');
let newBoard = document.querySelector('.generateboard');

newBoard.addEventListener('click', generateBoard);
clearBtn.addEventListener('click', clearBoard);

function generateBoard() {
  let size = prompt('Please enter a number between 2 and 100')
  if (size < 2 || size > 100) {
    return prompt('You did not enter a valid number. Please enter a number between 2 and 100');
  }
  board.style.cssText = `
  grid-template-rows: repeat(${size}, 1fr);
  grid-template-columns: repeat(${size}, 1fr)`

  let amount = size * size

  for (let i = 0; i < amount; i++ ) {
    let square = document.createElement('div')
    board.appendChild(square)
    square.addEventListener('mouseover', () => {
      square.style.cssText = 'background-color: black;'
    });
  };
};

function clearBoard() {
  let board = document.querySelector('.board');
  let clearSquares = board.querySelectorAll('div');
  clearSquares.forEach((div) => div.style.cssText = '');
}