

// SONG INFORMATION 
let songIndex = 0;

const songsInfo = [
  { "songName": "Vardan", "coverPath": "assets/vardan.jfif", "filePath": "songs/0.mp3" },
  { "songName": "Sulthan", "coverPath": "assets/asset\ 87.jpeg", "filePath": "songs/1.mp3" },
  { "songName": "Chand Baaliyan", "coverPath": "assets/asset\ 14.jpeg", "filePath": "songs/2.mp3" },
  { "songName": "Monster KGF", "coverPath": "assets/asset\ 15.jpeg", "filePath": "songs/3.mp3" },
  { "songName": "Deadwood", "coverPath": "assets/asset\ 4.jpeg", "filePath": "songs/4.mp3" },
  { "songName": "Yaaro Ne", "coverPath": "assets/asset\ 33.jpeg", "filePath": "songs/5.mp3" },
  { "songName": "Snap", "coverPath": "assets/snap.jfif", "filePath": "songs/6.mp3" },
  { "songName": "All Time Low", "coverPath": "assets/alltimelow.jfif", "filePath": "songs/7.mp3" },
  { "songName": "Naruto Theme", "coverPath": "assets/naruto.jfif", "filePath": "songs/8.mp3" },
  { "songName": "Enemy Arcane", "coverPath": "assets/enemy.jfif", "filePath": "songs/9.mp3" },
  { "songName": "Love Of Shap of You", "coverPath": "assets/loveshap.jpg", "filePath": "songs/10.mp3" },
  { "songName": "Hymen of the Weekened", "coverPath": "assets/hymen.jfif", "filePath": "songs/11.mp3" },
  { "songName": "Faded", "coverPath": "assets/faded.jfif", "filePath": "songs/12.mp3" },
  { "songName": "Girls like you do", "coverPath": "assets/girlslike.jfif", "filePath": "songs/13.mp3" },
  { "songName": "Play Date", "coverPath": "assets/playdate.jpg", "filePath": "songs/14.mp3" },
  { "songName": "Unstoppable", "coverPath": "assets/unstoppable.jpg", "filePath": "songs/15.mp3" },
]

const bgColors = [
  { color: "linear-gradient(rgb(19, 80, 133), rgb(22 92 146 / 44%))" },
  { color: "linear-gradient(rgb(116 110 96), rgb(82 82 82 / 60%))" },
  { color: "linear-gradient(rgb(230 219 170 / 80%), rgba(173, 117, 95, 0.48))" },
  { color: "linear-gradient(rgb(126 94 65), rgb(36 5 1 / 21%))" },
  { color: "linear-gradient(#2196f3ad, rgb(32 38 176 / 41%))" },
  { color: "linear-gradient(#b819d3d4, rgb(73 32 176 / 13%))" },
  { color: "linear-gradient(rgb(53 63 54), rgb(77 90 73 / 94%))" },
  { color: "linear-gradient(rgb(199 42 43), rgb(244 67 54 / 21%))" },
  { color: "linear-gradient(rgb(238 134 30 / 87%), rgb(227 216 83 / 49%))" },
  { color: "linear-gradient(rgb(229 45 31 / 86%), rgba(226, 173, 173, 0.18))" },
  { color: "linear-gradient(rgb(255 175 169 / 90%), rgb(226 173 173 / 18%))" },
  { color: "linear-gradient(#2196f3b8, rgb(103 58 183 / 40%))" },
  { color: "linear-gradient(rgb(220 199 117 / 70%), rgb(101 95 68))" },
  { color: "linear-gradient(#d0d0d0de, #9e9e9e57)" },
  { color: "linear-gradient(rgb(32 75 84 / 80%), rgb(63 136 122 / 87%))" },
  { color: "linear-gradient(rgb(214 187 142 / 82%), rgb(214 187 142 / 41%))" }
]




// VARAIBLES FOR DOM  OR MASTER CONTROLS 
const masterPlay = document.getElementById("masterPlay")
const audioObj = new Audio(`${songsInfo[songIndex].filePath}`);
const next_btn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const handleMasterSong = document.getElementById("handleMasterSongForMobile");

let x = window.matchMedia("(max-width: 895px)")
x.addEventListener("change", colorChange)
//for color change function
function colorChange(songIndex) {
  if (x.matches) {
    handleMasterSong.style.backgroundImage = `${bgColors[songIndex].color}`
    console.log("matches")
  } else {
    handleMasterSong.style.backgroundColor = `#000000`
  }
}

colorChange(songIndex)

let displayImgIndex = 0
Array.from(document.querySelectorAll(".main-poster")).forEach((img) => {
  img.src = `${songsInfo[displayImgIndex++].coverPath}`
  // console.log(displayImgIndex)
})

//dispaly the all cover in the DOM
document.querySelectorAll('.background-img').forEach((element) => {
  element.style.backgroundImage = `url('${songsInfo[displayImgIndex++].coverPath}')`;
})


displayNameIndex = 0
// display the name of song in the header song name  DOM
Array.from(document.querySelectorAll(".songHeadName")).forEach((element) => {
  element.textContent = `${songsInfo[displayNameIndex++].songName}`
  // console.log(displayNameIndex)
})

// display the name of song in the container song DOM
document.querySelectorAll('.song-name').forEach((element) => {
  element.textContent = `${songsInfo[displayNameIndex++].songName}`
})





const headeritem = document.querySelectorAll(".headeritem");
const headeritemarr = Array.from(headeritem)



//display the playbutton 
const displayPlaybtn = (() => {

  headeritemarr.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const plbutton = item.childNodes[5];
      plbutton.style.display = "flex"
    })
  })

})


//this function for other side hover then playbutton diseaper
function hoverButtons(currentButton) {
  document.addEventListener('mouseover', (e) => {
    headeritemarr.forEach((item) => {
      // console.log("default hover runn ...")
      const playButton = item.childNodes[5];
      // console.log(e.target)
      if (playButton.id === currentButton.id) {
        console.log("cureent button is hover ")
        playButton.style.display = "flex";
      } else {
        if (!item.contains(e.target)) {
          playButton.style.display = "none";
        }
      }
    })
  })
}


// hoverButtonsDefault()
//defalut hide the button 
function hoverButtonsDefault() {
  document.addEventListener('mouseover', (e) => {
    headeritemarr.forEach((item) => {
      // console.log("default hover runn ...")
      const playButton = item.childNodes[5];
      // console.log(e.target)
      if (!item.contains(e.target)) {
        playButton.style.display = "none";
      }
    })
  })
}



// ------------------------------------------------------------------------


// handleMasterSong.style.backgroundImage = `${bgColors[songIndex].color}`


//THIS SECTION FOR HANDLE THE MASTER CONTROLS 
function masterPlayfun(audioObj) {

  masterPlay.addEventListener('click', () => {
    console.log("master play")
    // masterPlay.classList.toggle("master-play-toggle");
    if (audioObj.paused === true) {
      audioObj.play();
      masterPlay.classList.add("master-play-toggle");
    } else {
      // hoverButtons(songIndex)
      audioObj.pause();
      masterPlay.classList.remove("master-play-toggle");
    }
    afterPlay(songIndex);
    afterContainerPlay(songIndex)
    masterCoverChange()
    // showMaster()
  })
}

function showMaster() {
  const headerBtn = document.getElementById(`${songIndex}`);
  console.log(headerBtn)
  headerBtn.style.display = "flex"
  hoverButtons(songIndex)
}

// displayPlaybtn()

masterPlayfun(audioObj)

//NEXT BUTTON FOR LISTNER
next_btn.addEventListener('click', () => {
  if (songIndex >= 15) {
    songIndex = -1;
  }
  songIndex++;
  colorChange(songIndex)
  // handleMasterSong.style.backgroundImage = `${bgColors[songIndex].color}`
  console.log({ songIndex })
  audioObj.src = `${songsInfo[songIndex].filePath}`
  const MasterControl = document.getElementById(`${songIndex}`);
  if (audioObj.paused === true) {
    masterPlay.classList.add("master-play-toggle");
    // MasterControl.classList.add('container-button-pause');
    audioObj.play();
  } else {
    masterPlay.classList.remove("master-play-toggle");
    audioObj.pause();
  }

  masterCoverChange()
  afterPlay(songIndex)
  afterContainerPlay(songIndex)
})

//PREVIOUS BUTTON FOR LISTNER 
prevBtn.addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 16;
  }
  songIndex--;
  colorChange(songIndex)
  console.log({ songIndex })
  audioObj.src = `${songsInfo[songIndex].filePath}`
  const MasterControl = document.getElementById(`${songIndex}`);
  if (audioObj.paused === true) {
    masterPlay.classList.add("master-play-toggle");
    // MasterControl.classList.add('container-button-pause');
    audioObj.play();
  } else {
    masterPlay.classList.remove("master-play-toggle");
    audioObj.pause();
  }
  masterCoverChange()
})


function afterMasterControl(passid) {
  document.querySelectorAll(".playbutton").forEach((item) => {
    console.log(item.id)
    // item.classList.toggle("play-button-pause");
    item.classList.remove("play-button-pause");
  })
}


function masterCoverChange() {
  document.getElementById("masterImage").src = `${songsInfo[songIndex].coverPath}`
  document.getElementById("masterPosterName").textContent = `${songsInfo[songIndex].songName}`
}









// -------------------------------------------------


//THIS SECTION FOR CONTAINER PLAY OR PAUSE SONGS 
const arrayBtn = document.querySelectorAll(".container-play-button");
Array.from(arrayBtn);


//LISTNER FOR ALL BUTTON IN CONTAINER PLAY OR PAUSE BUTTONS
arrayBtn.forEach((element) => {

  element.addEventListener("click", (e) => {


    // console.log(e.target)

    // console.log(audioObj.pa)
    songIndex = e.target.id
    colorChange(songIndex)
    if (audioObj.paused === true) {
      console.log("play song ..")
      audioObj.src = `${songsInfo[songIndex].filePath}`;
    } else {
      console.log("pause song ..")
      // audioObj.pause();
      e.target.classList.add("container-button-pause");
    }
    afterPlay(-10000);
    afterContainerPlay(e.target.id)
    playORpause(audioObj)
    masterCoverChange()
  })
})



//THIS FUNCTION FOR SAME PLAY OR PAUSE IN THE MASTER CONTROLS 
function playORpause(audioObj) {
  console.log("master play")
  masterPlay.classList.toggle("master-play-toggle");
  if (audioObj.paused === true) {
    audioObj.play();
  } else {
    audioObj.pause();
    masterPlay.classList.remove("master-play-toggle");
  }

}


//AFTER PLAY OR PAUSE BUTTON THIS FUNCTION DEFINE WHICH BUTTON AND OTHE AUTO REMOVE PAUSE CLASS 
function afterContainerPlay(playbtnID) {
  arrayBtn.forEach((element) => {
    if (element.id === playbtnID) {
      // console.log("afeteContainerPlay Id " + playbtn.id);
      element.classList.toggle("container-button-pause");
      // element.classList.add("container-button-pause");

    } else {
      element.classList.remove("container-button-pause");
    }
  })
}








// -------------------------------------------------------------------------
// THIS SECTION FOR HANDLE THE HEADER SONGS PLAY OR PAUSE

//show the playbutton in header songs container and control when button pause or play



//LISTNER FOR PLAY HEADER BUTTON TO PLAY OR PAUSE SONGS
headeritem.forEach((item, i) => {
  // console.log(item.childNodes[5])
  const playButton = item.childNodes[5];

  playButton.addEventListener("click", () => {

    console.log(playButton.id)
    songIndex = playButton.id
    colorChange(songIndex)
    if (audioObj.paused === true) {
      audioObj.src = `${songsInfo[songIndex].filePath}`
    } else {
      console.log("pause song ..")
      playButton.classList.add("play-button-pause");
      // hoverButtonsDefault();
    }
    afterContainerPlay(-1000)
    afterPlay(playButton.id);
    playORpause(audioObj)
    masterCoverChange()
  })
})



//this function use for play por pause button display in the element 
function afterPlay(currentButtonID) {
  const playButtons = document.querySelectorAll('.playbutton');
  playButtons.forEach((playButton) => {
    // console.log("CUREENT BUTTON : ", currentButton.id, currentButton.id === playButton.id)
    if (currentButtonID === playButton.id) {
      // console.log("aftePlayHeaderSong Id : " + playButton.id);
      playButton.classList.toggle('play-button-pause');

    } else {
      playButton.classList.remove('play-button-pause');
    }
  })
}



// -------------------------------------------------------------------------
// PROGRESS  UPDATE SECTION

const progressbar = document.getElementById("progressbar");
// let percProgress = 0
audioObj.addEventListener("timeupdate", () => {
  //   console.log("update")
  // let percProgress = 0
  let percProgress = parseInt((audioObj.currentTime / audioObj.duration) * 100);
  // console.log({ percProgress })
  progressbar.value = percProgress;


  progressbar.style.background = `linear-gradient(to right, rgb(34 255 0)  ${percProgress}%, #ccc ${percProgress}%)`

  if (percProgress === 100) {
    autoPlay();
  }
})

progressbar.addEventListener("input", () => {
  console.log(audioObj.duration)
  let currentTime = ((audioObj.duration * progressbar.value) / 100)
  // console.log({ currentTime })
  audioObj.currentTime = currentTime
  // playORpause(audioObj)
})


function autoPlay() {
  if (songIndex >= 15) {
    songIndex = -1
  }
  songIndex++;
  audioObj.src = `${songsInfo[songIndex].filePath}`
  if (audioObj.paused === true) {
    audioObj.play();
  } else {
    audioObj.pause();
  }

  // afterContainerPlay(songIndex)
  // afterPlay(songIndex);
  // playORpause(audioObj)
  masterCoverChange()
}



// -----------------------------------------------
// SECTION FOR HANDLE THE AUDIO OF SONGS 
let perVolume
const volumeEL = document.getElementById("volume-range")
volumeEL.addEventListener("input", () => {
  let valuevolume = volumeEL.value;
  audioObj.volume = volumeEL.value
  perVolume = valuevolume * 100;
  console.log({ perVolume })
  volumeEL.style.background = `linear-gradient(to right, rgb(77, 255, 0) ${perVolume}%, #ccc ${perVolume}%)`
})


//this mouseover on the volume_div then apply 1 opacity
const volume_div = document.getElementById("volume_div");
// console.log(volume_div)
volume_div.addEventListener("mouseover", () => {
  document.getElementById("volumeImg").style.opacity = "1";
})


//style apply when not click on the volume-div 
document.addEventListener("mouseover", (e) => {

  if (!volume_div.contains(e.target)) {
    document.getElementById("volumeImg").style.opacity = ".6";
    // volumeEL.style.background = `linear-gradient(to right, white ${perVolume}%, #ccc9 ${perVolume}%);`
  }

})




// ------------------------------------------------------------------------------

// THIS SECTION FOR LEFT NAV BAR OR COLOUMN OF USER NAV BAR 


//user - column section
const userDiv = document.getElementById("user-div");
let open = false;
userDiv.addEventListener("click", () => {
  const column_button = document.getElementById("column");
  column_button.classList.toggle("toggle");
  document.getElementById('show-account').classList.toggle("toggle-account");
})


// this listner for left nav-bar active links
const navbar = document.querySelectorAll(".nav-item");

const arrItem = Array.from(navbar);

arrItem.forEach((item) => {
  item.addEventListener("click", () => {
    const nodeImg = item.childNodes[1];
    const nodeSpan = item.childNodes[2];
    console.log(item.childNodes);
    console.log(nodeImg);
    console.log(nodeSpan);
    if (item.id === "home") {
      beforeSearch();
      beforeLibrary();
      nodeImg.src = "assets/asset 117.svg";
      nodeImg.style.filter = "invert(100%)";
      nodeSpan.style.filter = "invert(0%)";
    } else if (item.id === "search") {
      beforeHome();
      beforeLibrary();
      nodeImg.src = "assets/asset 119.svg";
      nodeImg.style.filter = "invert(100%)";
      nodeSpan.style.filter = "invert(0%)";
    } else if (item.id === "library") {
      beforeHome();
      beforeSearch();
      nodeImg.src = "assets/asset 121.svg";
      nodeImg.style.filter = "invert(100%)";
      nodeSpan.style.filter = "invert(0%)";
    }
  });
});

function beforeHome() {
  const homeDiv = document.getElementById("home");
  homeDiv.childNodes[1].src = "assets/asset 116.svg";
  homeDiv.childNodes[2].style.filter = "invert(30%)";
  homeDiv.childNodes[1].style.filter = "invert(70%)";
}

function beforeSearch() {
  const searchDiv = document.getElementById("search");
  searchDiv.childNodes[1].src = "assets/asset 118.svg";
  searchDiv.childNodes[2].style.filter = "invert(30%)";
  searchDiv.childNodes[1].style.filter = "invert(70%)";
}

function beforeLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.childNodes[1].src = "assets/asset 120.svg";
  // console.log(libraryDiv.childNodes)
  libraryDiv.childNodes[2].style.filter = "invert(30%)";
  libraryDiv.childNodes[1].style.filter = "invert(70%)";
}




// --------------------------------------------------
//THIS SECTION FOR CLOSE AND OPEN MENUBAR

const closediv = document.getElementById('closediv');
// console.log(closediv)
const menubar = document.getElementById("menu-bar");
// console.log(menubar)

menubar.addEventListener("click", () => {
  // console.log("menu bar ")
  document.getElementById("navbar-pc").style.left = "0px";
})

closediv.addEventListener('click', () => {
  // console.log("click close")

  document.getElementById("navbar-pc").style.left = "-50%";
})



// --------------------- for scroll change the color ----------------


window.addEventListener('scroll', (e) => {
  document.querySelector('nav').classList.toggle('bgchange', window.scrollY > 100)
})