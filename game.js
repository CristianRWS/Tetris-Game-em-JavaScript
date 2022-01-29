const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");
const highScoreElement = document.getElementById("highScore");

const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255,255,255,0.1)";

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;






let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = [];
    for(let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
}

drawBoard();

const PIECES = [
    [Z,'red'],
    [S,'green'],
    [T,'yellow'],
    [O,'blue'],
    [L,'purple'],
    [I,'cyan'],
    [J,'orange'],
];

let piece = randomPiece();

//drop();

document.addEventListener("keydown", CONTROL);


//Musica:

var easy = new Audio('./easy.mp3'); 
if (typeof easy.loop == 'boolean')
{
    easy.loop = true;
}
else
{
    easy.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
easy.loop = true;

var normal = new Audio('./normal.mp3'); 
if (typeof normal.loop == 'boolean')
{
    normal.loop = true;
}
else
{
    normal.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
normal.loop = true;

var hard = new Audio('./hard.mp3'); 
if (typeof hard.loop == 'boolean')
{
    hard.loop = true;
}
else
{
    hard.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
hard.loop = true;


