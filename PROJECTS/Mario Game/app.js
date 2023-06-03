
const desktopQuery = window.matchMedia('(min-width: 768px)')
console.log("desktopQuery query min width : ", desktopQuery.matches)

if (desktopQuery.matches) {


    const jump = new Audio('assets/jump.mp3')
    const overSound = new Audio('assets/gameover.mp3');


    let cross = true;
    let gameOver = true;
    let score = 0


    //for jumping and moving player 
    document.addEventListener("keydown", (e) => {
        console.log(e.key)
        if (gameOver) {

            if (e.key === "ArrowUp" || e.key === " ") {
                jump.play();
                document.getElementById("player").classList.add("jump");
                setTimeout(() => {
                    document.getElementById("player").classList.remove("jump");
                    jump.pause();
                }, 500)
            }

            if (e.key === "ArrowRight") {
                px = parseInt((window.getComputedStyle(player, null).getPropertyValue('left')));
                document.getElementById("player").style.left = px + 120 + "px";
            }

            if (e.key === "ArrowLeft") {
                px = parseInt((window.getComputedStyle(player, null).getPropertyValue('left')));
                document.getElementById("player").style.left = px + -120 + "px";
            }
        }

    })




    setInterval(() => {

        const turtle = document.getElementById("turtle");
        const player = document.getElementById("player");
        //calculate px left and value for player and turtle is close and then game is over
        px = parseInt((window.getComputedStyle(player, null).getPropertyValue('left')));
        tx = parseInt((window.getComputedStyle(turtle, null).getPropertyValue('left')));
        py = parseInt((window.getComputedStyle(player, null).getPropertyValue('top')));
        ty = parseInt((window.getComputedStyle(turtle, null).getPropertyValue('top')));

        //offsetX is for left side 
        let offsetX = Number(Math.abs(px - tx))
        //offsetY is for jumping side 
        let offsetY = Number(Math.abs(py - ty))

        //this condition is true then gameOver
        if (offsetX < 80 && offsetY < 70) {
            gameOver = false
            console.log("game over")
            turtle.classList.remove('move')
            document.querySelector('.bg').classList.remove('bgmove')
            document.getElementById('finalResult').classList.add("show");
            document.getElementById('btn').style.display = "flex";

            overSound.play();
        }


        //game is not over then animataion duration fast and score update 
        else if (offsetX < 150 && cross) {
            cross = false

            setTimeout(() => {
                cross = true
                gameScoreUpdate()
            }, 800)

            setTimeout(() => {
                let anidur = parseFloat((window.getComputedStyle(turtle, null).getPropertyValue('animation-duration')));
                let newDur = parseFloat(anidur - 0.1);
                if (newDur >= 2) {
                    console.log({ newDur })
                    turtle.style.animationDuration = newDur + "s"
                }
            }, 500)
        }

    }, 10)

    //play again button
    document.getElementById('playbutton').addEventListener('click', () => {
        location.reload();
    })


    function gameScoreUpdate() {
        if (gameOver) {
            score += Number(50)
            document.getElementById('finalScore').innerText = `Your Score ${score}`
        }
    }
}