let board = ["", "", "", "", "", "", "", "", ""];
const cells = document.querySelectorAll(".cell");

cetListener("click", () => {
    console.log("Clicked!");
    let currentPlayer = "X";
if (cell.textContent !== "") return;

board[index] = currentPlayer;

currentPlayer = currentPlayer === "X" ? "O" : "X";
});
