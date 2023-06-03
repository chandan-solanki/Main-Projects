console.log("tic tac toe")



//constant for dom manipulation
const tingAudio = new Audio('sounds/click.wav')
const overAudio = new Audio('sounds/winning.mp3')
const boxes = document.getElementsByClassName('box');
let isGameOver = false;
const boxtexts = document.getElementsByClassName("boxText");


const turnChange = (input) => {


    return (input === "X") ? "O" : "X";
}

const checkWin = () => {


    const mediaQuery = window.matchMedia('(max-width: 768px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        // Then trigger an alert
        const win = [
            [0, 1, 2, 5, 15, 89, 0],
            [3, 4, 5, 5, 49, 89, 0],
            [6, 7, 8, 5, 83, 89, 0],
            [0, 3, 6, -23, 49, 79, 90],
            [1, 4, 7, 11, 49, 79, 90],
            [2, 5, 8, 44, 49, 79, 90],
            [0, 4, 8, 1, 50, 100, 42],
            [2, 4, 6, -2, 48, 105, 315]
        ]

        win.forEach((itr) => {
            if ((boxtexts[itr[0]].innerText === boxtexts[itr[1]].innerText) && (boxtexts[itr[2]].innerText === boxtexts[itr[1]].innerText) && (boxtexts[itr[0]].innerText !== "")) {

                const winPlayer = (boxtexts[itr[0]].innerText);
                document.getElementById("GameResult").innerText = `${winPlayer} WON`
                document.getElementById("lineGame").style.left = `${itr[3]}%`
                document.getElementById("lineGame").style.top = `${itr[4]}%`
                document.getElementById("lineGame").style.width = `${itr[5]}%`
                document.getElementById("lineGame").style.transform = `rotate(${itr[6]}deg)`
                console.log("width : ", itr[3])
                isGameOver = true
            }
        })

    } else {

        const win = [
            [0, 1, 2, 6, 8, 30, 0],
            [3, 4, 5, 6, 26, 30, 0],
            [6, 7, 8, 6, 43, 30, 0],
            [0, 3, 6, -9, 25, 21, 90],
            [1, 4, 7, 15, 25, 21, 90],
            [2, 5, 8, 40, 25, 21, 90],
            [0, 4, 8, 0, 26, 37, 34],
            [2, 4, 6, 3, 25, 34, 325]
        ]

        win.forEach((itr) => {
            if ((boxtexts[itr[0]].innerText === boxtexts[itr[1]].innerText) && (boxtexts[itr[2]].innerText === boxtexts[itr[1]].innerText) && (boxtexts[itr[0]].innerText !== "")) {

                const winPlayer = (boxtexts[itr[0]].innerText);
                document.getElementById("GameResult").innerText = `${winPlayer} WON`
                document.getElementById("lineGame").style.left = `${itr[3]}vh`
                document.getElementById("lineGame").style.top = `${itr[4]}vh`
                document.getElementById("lineGame").style.width = `${itr[5]}vw`
                document.getElementById("lineGame").style.transform = `rotate(${itr[6]}deg)`
                console.log("width : ", itr[3])
                isGameOver = true
            }
        })
    }
}



let turn = "";

const GameStart = () => {
    // document.getElementsByClassName("boxText")
    Array.from(boxes).forEach((box) => {
        box.addEventListener("click", () => {
            if (isGameOver === false) {
                turn = turnChange(turn);
                tingAudio.playbackRate = 4
                tingAudio.play()
                box.childNodes[0].innerText = `${turn} `;
                checkWin()
                const value = (turn === "X") ? "O" : "X";
                document.getElementById("turnResult").innerText = `TURN ${value} `
            }
            if (isGameOver) {
                overAudio.play()
                overAudio.playbackRate = 1
                document.getElementById("gifImg").style.width = "100%"
            }
        })
    })

}


const GameReset = () => {
    document.getElementById("resetBtn").addEventListener("click", () => {
        Array.from(boxtexts).forEach((e) => {
            console.log(e)
            e.innerText = ""
        })
        turn = ""
        document.getElementById("turnResult").innerText = `TURN X`
        document.getElementById("gifImg").style.width = "0vw"
        document.getElementById("GameResult").innerText = ""
        isGameOver = false;
        document.getElementById("lineGame").style.width = `0vw`

    })
}
GameStart()
GameReset()