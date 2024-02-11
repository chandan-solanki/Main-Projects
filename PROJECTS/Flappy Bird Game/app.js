
// --------------  VARAIABLE  ------------------
let birdTimeId = null;
let pos = 0;
let birddiv = document.querySelector(".bird");
let basediv = document.querySelector(".base");
let gameOverMsg = document.querySelector(".gameOverMsg");
let gamecontainer = document.querySelector(".game-container");
let overlaydiv = document.querySelector(".overlay");
let scorediv = document.querySelector(".scorediv");
let highScoreDiv = document.querySelector(".high-score");
let gap = 70;
let gameOver = false;
let score = 0;


/// ------------ GAME SOUNDS ---------------
let wing = new Audio('/assets/wing.wav');
let point = new Audio('/assets/point.wav');
let die = new Audio('/assets/die.wav');





//---------- GET THE HIGH SCORE ON THE LOCALSTORAGE AND DIPLAY --------
let high_score = JSON.parse(localStorage.getItem("highscore"));
if (high_score > 0) {
    highScoreDiv.innerHTML = `High Score : <span>${formatScore(high_score)}</span>`;
}

gameOverMsg.addEventListener("click", restartGame);





// ------------------------ GAME OBSTACLE GENERATE AND COLLISION DETECTION --------------

//this function Generate the Bottom Obstacle using setInterval() and setTimeOut();
function generateObstacle() {

    let height = randomHeight();
    let obstclacleel;

    if (!gameOver) {
        obstclacleel = document.createElement("div");
        if (!gameOver) obstclacleel.className = "obstacle";
        obstclacleel.style.left = `100%`;
        obstclacleel.style.bottom = `0`;
        obstclacleel.style.height = 400 - height + "px";
        gamecontainer.appendChild(obstclacleel);
    }



    function moveObstacle() {
        if (gameOver) clearInterval(obstacleTimerId);
        else {
            speed--;
            if (speed <= -20) {
                clearInterval(obstacleTimerId)
                gamecontainer.removeChild(obstclacleel);
            } else {
                obstclacleel.style.left = `${speed}%`;
                detectCollision(obstclacleel, obstacleTimerId);
            }
        }
    }

    let speed = 100;
    let obstacleTimerId = null;


    obstacleTimerId = setInterval(moveObstacle, 40);

    if (!gameOver) setTimeout(generateObstacle, 2000);
}

//this function Generate the Top Obstacle using setInterval() and setTimeOut();
function generateObstacleUp() {

    let height = randomHeight();
    let obstclacleel;

    if (!gameOver) {

        obstclacleel = document.createElement("div");
        if (!gameOver) obstclacleel.className = "obstacleUp";
        obstclacleel.style.left = `100%`;
        obstclacleel.style.height = 400 - height + "px";
        obstclacleel.style.bottom = `${gap + randomGap()}%`;
        gamecontainer.appendChild(obstclacleel);

    }

    function moveObstacle() {
        if (gameOver) clearInterval(obstacleTimerId);
        else {
            speed--;
            if (speed <= -20) {
                updateScore();
                clearInterval(obstacleTimerId)
                gamecontainer.removeChild(obstclacleel);
            } else {
                obstclacleel.style.left = `${speed}%`;
                detectCollision(obstclacleel, obstacleTimerId);
            }
        }
    }

    let speed = 100;
    let obstacleTimerId = null;

    obstacleTimerId = setInterval(moveObstacle, 40);

    if (!gameOver) setTimeout(generateObstacleUp, 2000);
}

//this function detect the collison of the bird collide of the obstacle
function detectCollision(obstclacleel, obstacleTimerId) {

    let obsLeft = obstclacleel.getBoundingClientRect().left;
    let obsTop = obstclacleel.getBoundingClientRect().top;
    let obsBottom = obsTop + obstclacleel.getBoundingClientRect().height;

    let birdLeft = birddiv.getBoundingClientRect().left;
    let birdTop = birddiv.getBoundingClientRect().top;
    let birdBottom = birdTop + birddiv.getBoundingClientRect().height;

    // Check for collision
    if (
        birdLeft < obsLeft + obstclacleel.offsetWidth &&
        birdLeft + birddiv.offsetWidth > obsLeft &&
        birdTop < obsBottom &&
        birdBottom > obsTop
    ) {
        // Collision detected
        // console.log("Collision detected !!!!!");
        gameOverFun(obstacleTimerId, birdTimeId);
    }
}


//get random height using random() function
function randomHeight() {
    return Math.floor(Math.random() * 50);
}

//get random gap using random() function
function randomGap() {
    return Math.floor(Math.random() * 10);
}

generateObstacle();

generateObstacleUp()





//--------------------- CONTROLS THE BIRD -----------------------------


document.addEventListener("keydown", (e) => {
    switch (e.code) {

        case "ArrowUp":
            birdUp();
            break;

        case "Space":
            birdUp();
            break;

    }
});


document.addEventListener("click", (e) => {
    birdUp();
});


function birdUp() {


    if (!gameOver) {

        if (birddiv.getBoundingClientRect().top >= 20) {
            wing.play();
            pos -= 60;
        }

        birddiv.style.backgroundImage = "";
        birddiv.style.backgroundImage = "url('/assets/bluebird-upflap.png')";
        birddiv.style.transform = "rotate(-20deg)";
        // console.log("up...");
        setTimeout(() => {
            birddiv.style.backgroundImage = "";
            birddiv.style.backgroundImage = "url('/assets/bluebird-midflap.png')";
            birddiv.style.transform = "rotate(0deg)";
        }, 500);

        setTimeout(() => {
            birddiv.style.backgroundImage = "";
            birddiv.style.backgroundImage = "url('/assets/bluebird-downflap.png')";
            birddiv.style.transform = "rotate(20deg)";

        }, 500);

    }

}





// -------  GET MOVE DOWN THE BIRD FOR GET HEIGHT OF GAME-CONTAINER AND BASE HEIGHT MINUS BIRD HEIGHT   ----------

let baseheight = basediv.getBoundingClientRect().height;
let gamecontainerheight = gamecontainer.getBoundingClientRect().height
let movedown = (gamecontainerheight - baseheight) - birddiv.getBoundingClientRect().height;

// -- THIS FUNCTION MOVE BIRD TOP TO DOWN
function myMove() {
    clearInterval(birdTimeId);
    birdTimeId = setInterval(frame, 10);
}

// -- FRAME FUNCTION RUN UNTIL HEIGHT IS GREATHER THEN MOVEDOWN HEIGHT AND CLEAINTERVALE
//-- USING INTERVAL ID DECLARE IN GLOBAL let id = null;
function frame() {

    if (pos - 20 > movedown) {
        gameOverFun(null, birdTimeId);
    } else {
        pos += 2;
        birddiv.style.top = pos + 'px';
        // birddiv.style.left = pos + 'px';
    }
}

myMove();




// ---------- Gameover , formatScore, restartGame and UpdateScore funciton ---------
function gameOverFun(obstacleTimerId, birdTimeId) {
    die.play();
    gameOver = true;
    if (obstacleTimerId !== null)
        clearInterval(obstacleTimerId); // Stop the game
    if (birdTimeId !== null)
        clearInterval(birdTimeId); // Stop the game

    gameOverMsg.classList.add("show-gameover");
    overlaydiv.classList.add("active-overlay");

    scorediv.innerHTML = `Score : ${formatScore(score)}`;

    if (score > high_score) {
        localStorage.setItem("highscore", JSON.stringify(score));
    }

}

function formatScore(item) {
    if (item > 9) {
        return item;
    } else {
        return `0${item}`
    }
}

function restartGame() {
    location.reload();
}

function updateScore() {
    score++;
    if (score > high_score) {
        highScoreDiv.innerHTML = `High Score : <span>${formatScore(score)}</span>`;
    }
    point.play();
}
