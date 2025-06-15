
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 795px)')
// Check if the media query is true
if (mediaQuery.matches) {
    const projectDetails = [
        { name: "Spotify Clone", path: "assets/spotifyMobile.png" },
        { name: "Mario Game", path: "assets/marioGameMobile.png" },
        { name: "Personal Portfolio", path: "assets/protfolioMobile.png" },
        { name: "Tic Tac Toe", path: "assets/ticTacToeMobile.png" },
        { name: "Snake Game", path: "assets/snakeMobile.png" },
        { name: "Car Move", path: "assets/carMobile.png" },
        { name: "Live Code Editor", path: "assets/livecodeeditormobile.png" },
        { name: "Grocery List", path: "assets/grocerymobile.png" },
        { name: "Countries App", path: "assets/countrieAppMobile.png" }
    ]

    const containItem = document.querySelectorAll('.containe-item');
    const hover = document.querySelectorAll('.hover');


    Array.from(containItem).forEach((el, index) => {
        el.childNodes[1].src = `${projectDetails[index].path}`;
    })
    Array.from(hover).forEach((el, index) => {
        el.childNodes[1].textContent = `${projectDetails[index].name}`
    })

    // alert('Media Query Matched!')
}




// this media query for pc or big screen and laptop
const mediaQuery1 = window.matchMedia('(min-width: 795px)')

if (mediaQuery1.matches) {
    // for print the background image and name of the project
    const projectDetails = [
        { name: "Spotify Clone", path: "assets/spotify.png" },
        { name: "Mario Game", path: "assets/marioGame.png" },
        { name: "Personal Portfolio", path: "assets/portfolio.png" },
        { name: "Tic Tac Toe", path: "assets/tic-tac-toe.png" },
        { name: "Snake Game", path: "assets/snakeGame.png" },
        { name: "Car Move", path: "assets/carMove.png" },
        { name: "Live Code Editor", path: "assets/livecodeeditorpc.png" },
        { name: "Grocery List", path: "assets/grocerypc.png" },
        { name: "Countries App", path: "assets/countrieAppDesk.png" }
    ]

    const containItem = document.querySelectorAll('.containe-item');
    const hover = document.querySelectorAll('.hover');


    Array.from(containItem).forEach((el, index) => {
        el.childNodes[1].src = `${projectDetails[index].path}`;
    })
    Array.from(hover).forEach((el, index) => {
        el.childNodes[1].textContent = `${projectDetails[index].name}`
    })
}






let menubtn = document.getElementById('menu-icon');
let nav = document.getElementById('navbar');

menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('bx-x');
    nav.classList.toggle('active');
})


//header section toogle
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = (() => {

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach((nav) => {
                nav.classList.remove('active');
                if (nav.className === id) {
                    nav.classList.add('active');
                }
            })

            section.classList.add('show-animate');
        }
        else {
            // section.classList.remove('show-animate');
        }

    })


    let header = document.getElementById('header');

    header.classList.toggle('bgchange', window.scrollY > 100)

    //when click or scroll then remove class of menu bar and navbar
    menubtn.classList.remove('bx-x');
    nav.classList.remove('active');


    //add the show-animate class in footer for animation
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
})


