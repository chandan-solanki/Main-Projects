


// CONSTANT FOR DOM MANIPULATION
const board = document.getElementById("board");
const bite = new Audio('assets/bite.mp3');
const loose = new Audio('assets/loose.mp3');
const move = new Audio('assets/move.mp3');

let speed = 10;
let lastPant = 0
let score = 0



//inputDirection for controls when button is pushed
let inputDir = { x: 0, y: 0 };
//x for horizontal and y for vertical
let snakArray = [
    { x: 8, y: 13 }

]
//x for horizontal and y for vertical
let food = { x: 4, y: 8 }


// GAME FUNCTION FOR MAIN LOOP RUNNING
function main(current) {
    //REPEAT A FUNCTION 
    // console.log(current)
    requestAnimationFrame(main)

    if ((current - lastPant) / 1000 < (1 / speed)) {
        return;
    }
    lastPant = current;
    gameEngine()
}


function isGameOver() {

    for (let i = 1; i < snakArray.length; i++) {
        if (snakArray[0].x === snakArray[i].x && snakArray[0].y === snakArray[i].y) {
            return true;
        }
    }

    if (snakArray[0].x <= 0 || snakArray[0].x >= 18 || snakArray[0].y <= 0 || snakArray[0].y >= 18) {
        return true
    }

}


// GAME LOGIC 
function gameEngine() {

    // STEP 1 : MOVE THE SNAKE

    //if the gameisOver 
    if (isGameOver() === true) {
        loose.play();
        // location.reload();
        console.log("game over")
        inputDir = { x: 0, y: 0 }
        snakArray = [{ x: 8, y: 13 }]
        food = { x: 4, y: 8 }
        // alert("GAME IS OVER")

        if (highValue < score) {
            highValue = score
            localStorage.setItem('highscore', JSON.stringify(highValue))
        }

        score = 0
        document.getElementById('score').innerText = `Score : ${score} `;
        setTimeout(() => {
            location.reload();
        }, 1000)
    }

    //if the food eaten by the snake the snake size will increase 
    if (food.x === snakArray[0].x && food.y === snakArray[0].y) {
        bite.play();

        //if the food is eaten the snake array will increase
        snakArray.unshift({ x: snakArray[0].x + inputDir.x, y: snakArray[0].y + inputDir.y })
        let a = 1;
        let b = 16;

        //random food is appear in grid
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        score++
        document.getElementById('score').innerText = `Score : ${score} `;

    }

    //this loop for snakArray is move to the head
    for (let i = snakArray.length - 2; i >= 0; i--) {
        snakArray[i + 1] = { ...snakArray[i] }
    }

    //and head will be possition by input direction
    snakArray[0].x += inputDir.x
    snakArray[0].y += inputDir.y




    // STEP : 2 DISPLAY THE SNAKE AND FOOD
    // DISPLAY THE SNAKE
    board.innerHTML = " "
    snakArray.forEach((ele, index) => {
        snakElement = document.createElement('div');
        snakElement.style.gridRowStart = ele.y; // y for up and down side
        snakElement.style.gridColumnStart = ele.x; // x for right and left side
        if (index === 0) {
            snakElement.classList.add('head');
        } else {
            snakElement.classList.add('snake')
        }
        board.appendChild(snakElement)
    })


    // DISPLAY THE FOOD
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement)

}




// MAIN LOGIC
//localstorage for highscore value saving 
let highValue = localStorage.getItem('highscore')
if (highValue === null) {
    localStorage.setItem('highscore', JSON.stringify(score))
} else {
    let value = JSON.parse(highValue)
    document.getElementById('hiscore').innerText = `High Score : ${value}`
}




window.requestAnimationFrame(main)
//for moving direction of snak 
window.addEventListener('keydown', (e) => {
    move.play();
    switch (e.key) {
        case "ArrowUp":

            inputDir.x = 0
            inputDir.y = -1
            break;
        case "ArrowDown":

            inputDir.x = 0
            inputDir.y = 1
            break;
        case "ArrowLeft":

            inputDir.x = -1
            inputDir.y = 0
            break;
        case "ArrowRight":

            inputDir.x = 1
            inputDir.y = 0
            break;
        default:
            break;
    }
    console.log(inputDir)
})




// ----------------------------- FOR TOUCH AND MOUSE EVENT -----------------------------


