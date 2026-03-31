let board = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll(".cell");

cetListener("click", () => {
    console.log("Clicked!");
    let currentPlayer = "X";
if (cell.textContent !== "") return;

board[index] = currentPlayer;

currentPlayer = currentPlayer === "X" ? "O" : "X";
});





const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;

    if (board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
let gameOver = false;
if (gameOver) return;

function showMessage(text){
  message.textContent = text;
}

function resetGame(){
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameOver = false;
}