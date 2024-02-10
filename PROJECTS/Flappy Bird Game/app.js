
// --------------VARAIBLES------------------
let birdTimeId = null;
let pos = 0;
let birddiv = document.querySelector(".bird");
let basediv = document.querySelector(".base");
let gamecontainer = document.querySelector(".game-container");
let gap = 70;
let gameOver = false;

function generateObstacle() {

    let height = randomHeight();
    let obstclacleel;

    obstclacleel = document.createElement("div");
    if (!gameOver) obstclacleel.className = "obstacle";
    obstclacleel.style.left = `100%`;
    obstclacleel.style.bottom = `0%`;
    obstclacleel.style.height = 300 - height + "px";
    gamecontainer.appendChild(obstclacleel);



    function moveObstacle() {
        speed--;
        if (speed <= -20) {
            clearInterval(obstacleTimerId)
            gamecontainer.removeChild(obstclacleel);
        } else {
            obstclacleel.style.left = `${speed}%`;
            detectCollision(obstclacleel, obstacleTimerId);
            if (gameOver) clearInterval(obstacleTimerId);
        }
    }

    let speed = 100;
    let obstacleTimerId = null;


    obstacleTimerId = setInterval(moveObstacle, 40);

    if (!gameOver) setTimeout(generateObstacle, 2000);
}


function generateObstacleUp() {

    let height = randomHeight();
    let obstclacleel;

    obstclacleel = document.createElement("div");
    if (!gameOver) obstclacleel.className = "obstacleUp";

    obstclacleel.style.left = `100%`;
    obstclacleel.style.height = 300 - height + "px";
    obstclacleel.style.bottom = `${gap}%`;
    gamecontainer.appendChild(obstclacleel);

    function moveObstacle() {
        speed--;
        if (speed <= -20) {
            clearInterval(obstacleTimerId)
            gamecontainer.removeChild(obstclacleel);
        } else {
            obstclacleel.style.left = `${speed}%`;
            detectCollision(obstclacleel, obstacleTimerId);
            if (gameOver) clearInterval(obstacleTimerId);
        }
    }

    let speed = 100;
    let obstacleTimerId = null;

    obstacleTimerId = setInterval(moveObstacle, 40);

    if (!gameOver) setTimeout(generateObstacleUp, 2000);
}

generateObstacle();

generateObstacleUp()


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
        birdTop + birddiv.offsetHeight > obsTop
    ) {
        // Collision detected
        console.log("Collision detected !!!!!");
        gameOver = true;
        clearInterval(obstacleTimerId); // Stop the game
        clearInterval(birdTimeId); // Stop the game
    }
}


function randomHeight() {
    return Math.floor(Math.random() * 50);
}


//--------- CONTROL THE BIRD ----------
document.addEventListener("keydown", (e) => {
    // console.log(e.key)

    switch (e.key) {
        case "ArrowUp":
            pos -= 60;
            // console.log("up...");
            break;
    }
});

// -------GET MOVE DOWN THE BIRD FOR GET HEIGHT OF GAME-CONTAINER AND BASE HEIGHT MINUS BIRD HEIGHT
let baseheight = basediv.getBoundingClientRect().height;
let gamecontainerheight = gamecontainer.getBoundingClientRect().height
let movedown = (gamecontainerheight - baseheight) - birddiv.getBoundingClientRect().height;


// ----THIS FUNCTION MOVE BIRD TOP TO DOWN
function myMove() {
    clearInterval(birdTimeId);
    birdTimeId = setInterval(frame, 10);
}

// ---------FRME FUNCTION RUN UNTIL HEIGHT IS GREATHER THEN MOVEDOWN HEIGHT AND CLEAINTERVALE
//-- USING INTERVAL ID DECLARE IN GLOBAL let id = null;
function frame() {
    // console.log({ pos })
    if (pos >= movedown) {
        clearInterval(birdTimeId);
        // console.log('game over')
    } else {
        pos += 2;
        birddiv.style.top = pos + 'px';
        // birddiv.style.left = pos + 'px';
    }
}
myMove()