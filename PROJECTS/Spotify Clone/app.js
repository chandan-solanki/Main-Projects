

// SONG INFORMATION 
let songIndex = 0;

const songsInfo = [
  { "id": "0", "songName": "Vardan", "coverPath": "assets/vardan.jfif", "filePath": "songs/0.mp3" },
  { "id": "1", "songName": "Sulthan", "coverPath": "assets/asset\ 87.jpeg", "filePath": "songs/1.mp3" },
  { "id": "2", "songName": "Chand Baaliyan", "coverPath": "assets/asset\ 14.jpeg", "filePath": "songs/2.mp3" },
  { "id": "3", "songName": "Monster KGF", "coverPath": "assets/asset\ 15.jpeg", "filePath": "songs/3.mp3" },
  { "id": "4", "songName": "Deadwood", "coverPath": "assets/asset\ 4.jpeg", "filePath": "songs/4.mp3" },
  { "id": "5", "songName": "Yaaro Ne", "coverPath": "assets/asset\ 33.jpeg", "filePath": "songs/5.mp3" },
  { "id": "6", "songName": "Snap", "coverPath": "assets/snap.jfif", "filePath": "songs/6.mp3" },
  { "id": "7", "songName": "All Time Low", "coverPath": "assets/alltimelow.jfif", "filePath": "songs/7.mp3" },
  { "id": "8", "songName": "Naruto Theme", "coverPath": "assets/naruto.jfif", "filePath": "songs/8.mp3" },
  { "id": "9", "songName": "Enemy Arcane", "coverPath": "assets/enemy.jfif", "filePath": "songs/9.mp3" },
  { "id": "10", "songName": "Love Of Shap of You", "coverPath": "assets/loveshap.jpg", "filePath": "songs/10.mp3" },
  { "id": "11", "songName": "Hymen of the Weekened", "coverPath": "assets/hymen.jfif", "filePath": "songs/11.mp3" },
  { "id": "12", "songName": "Faded", "coverPath": "assets/faded.jfif", "filePath": "songs/12.mp3" },
  { "id": "13", "songName": "Girls like you do", "coverPath": "assets/girlslike.jfif", "filePath": "songs/13.mp3" },
  { "id": "14", "songName": "Play Date", "coverPath": "assets/playdate.jpg", "filePath": "songs/14.mp3" },
  { "id": "15", "songName": "Unstoppable", "coverPath": "assets/unstoppable.jpg", "filePath": "songs/15.mp3" },
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


let songId = 0;

// VARAIBLES FOR DOM  OR MASTER CONTROLS 
const masterPlay = document.getElementById("masterPlay")
const next_btn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const handleMasterSong = document.getElementById("handleMasterSongForMobile");
const container_headersong = document.querySelector(".container-headersong");
const container_row_song1 = document.querySelector("#container-row-songs-1");
const container_row_song2 = document.querySelector("#container-row-songs-2");


const endTimeDiv = document.querySelector(".end-time-song");
const startTimeDiv = document.querySelector(".start-time-song");


const search_sectionBtn = document.getElementById("search");
const search_sectionDiv = document.getElementById("search-section");

console.log(search_sectionDiv)

const audioObj = new Audio(`${songsInfo[songId].filePath}`);


let x = window.matchMedia("(max-width: 895px)")
x.addEventListener("change", colorChange)

// for color change function
function colorChange(songId) {
  if (x.matches) {
    handleMasterSong.style.backgroundImage = `${bgColors[songId].color}`
    console.log("matches")
  } else {
    handleMasterSong.style.backgroundColor = `#000000`
  }
}

colorChange(songIndex)



window.addEventListener("load", () => {
  bootUpApp();
})


function bootUpApp() {

  generateDomOfHeaderItems();
  generateMainContainerSongs();

}

function generateMainContainerSongs() {
  let eldiv = "";
  for (let i = 6; i < 11; i++) {
    // console.log(songsInfo[i]);
    const item = `<div id="" class="row-item">
    <div class="background-img"><img src="${songsInfo[i].coverPath}" alt="song-poster"></div>
    <div id="${songsInfo[i].id}" class="container-play-button" data-song-id='${songsInfo[i].id}'></div>
    <div class="song-name">${songsInfo[i].songName}</div>
  </div>`;
    eldiv += item;
  }

  container_row_song1.innerHTML = eldiv;

  eldiv = "";

  for (let i = 11; i < songsInfo.length; i++) {
    // console.log(songsInfo[i]);
    const item = `<div id="" class="row-item">
    <div class="background-img"><img src="${songsInfo[i].coverPath}" alt="song-poster"></div>
    <div id="${songsInfo[i].id}" class="container-play-button" data-song-id='${songsInfo[i].id}'></div>
    <div class="song-name">${songsInfo[i].songName}</div>
  </div>`;
    eldiv += item;
  }

  container_row_song2.innerHTML = eldiv;

  listenContainerSongPlayButton();

}

function generateDomOfHeaderItems() {
  let eldiv = "";
  for (let i = 0; i < 6; i++) {
    // console.log(songsInfo[i]);
    const item = `<div class="headeritem">
      <img class="main-poster" src="${songsInfo[i].coverPath}" alt="boost">
      <span class="songHeadName">${songsInfo[i].songName}</span>
      <div id= "${songsInfo[i].id}" class="playbutton" data-song-id ="${songsInfo[i].id}">
        <!-- <img src="assets/asset 132.svg" alt="play-icon"> -->
      </div>
    </div>`;
    eldiv += item;
  }

  container_headersong.innerHTML = eldiv;

  listenPlayOrPauseHeaderButton();
}



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
    console.log("master function")
    // masterPlay.classList.toggle("master-play-toggle");

    if (audioObj.paused === true) {
      console.log("master play")
      audioObj.play();
      console.log(document.getElementById(`${songId}`))
      masterPlay.classList.add("master-play-toggle");
      document.getElementById(`${songId}`).classList.add("play-button-pause");
    } else {
      // hoverButtons(songIndex)
      console.log("master pause")
      audioObj.pause();
      console.log(document.getElementById(`${songId}`))
      masterPlay.classList.remove("master-play-toggle");
      document.getElementById(`${songId}`).classList.remove("play-button-pause");
    }

    masterCoverChange()
    // showMaster()
  })
}

function showMaster() {
  const headerBtn = document.getElementById(`${songId}`);
  console.log(headerBtn)
  headerBtn.style.display = "flex"
  hoverButtons(songId)
}

// displayPlaybtn()

masterPlayfun(audioObj)

//NEXT BUTTON FOR LISTNER
next_btn.addEventListener('click', () => {
  if (songId >= songsInfo.length - 1) {
    songId = -1;
  }
  songId++;
  colorChange(songId)
  // handleMasterSong.style.backgroundImage = `${bgColors[songId].color}`
  console.log({ songId })
  audioObj.src = `${songsInfo[songId].filePath}`
  const MasterControl = document.getElementById(`${songId}`);
  if (audioObj.paused === true) {
    masterPlay.classList.add("master-play-toggle");
    // MasterControl.classList.add('container-button-pause');
    audioObj.play();
  } else {
    masterPlay.classList.remove("master-play-toggle");
    audioObj.pause();
  }

  masterCoverChange()
  afterContainerPlay()
  afterPlay()
})

//PREVIOUS BUTTON FOR LISTNER 
prevBtn.addEventListener('click', () => {
  if (songId <= 0) {
    songId = songsInfo.length;
  }
  songId--;
  colorChange(songId)
  console.log({ songId })
  audioObj.src = `${songsInfo[songId].filePath}`;
  const MasterControl = document.getElementById(`${songId}`);
  if (audioObj.paused === true) {
    masterPlay.classList.add("master-play-toggle");
    // MasterControl.classList.add('container-button-pause');
    audioObj.play();
  } else {
    masterPlay.classList.remove("master-play-toggle");
    audioObj.pause();
  }
  masterCoverChange()
  afterContainerPlay()
  afterPlay()

})


function afterMasterControl(passid) {
  document.querySelectorAll(".playbutton").forEach((item) => {
    console.log(item.id)
    // item.classList.toggle("play-button-pause");
    item.classList.remove("play-button-pause");
  })
}


function masterCoverChange() {
  document.getElementById("masterImage").src = `${songsInfo[songId].coverPath}`
  document.getElementById("masterPosterName").textContent = `${songsInfo[songId].songName}`
}




// -------------------------------------------------


//THIS SECTION FOR CONTAINER PLAY OR PAUSE SONGS 
//LISTNER FOR ALL BUTTON IN CONTAINER PLAY OR PAUSE BUTTONS

function listenContainerSongPlayButton() {

  const arrayBtn = document.querySelectorAll(".container-play-button");

  arrayBtn.forEach((element) => {

    element.addEventListener("click", (e) => {

      songId = e.target.id;
      colorChange(songId)
      audioObj.src = `${songsInfo[songId].filePath}`;


      afterPlay();
      afterContainerPlay();
      playORpause();
      masterCoverChange();
    })
  })

}



//THIS FUNCTION FOR SAME PLAY OR PAUSE IN THE MASTER CONTROLS 
function playORpause() {
  console.log("master play")
  if (audioObj.paused === true) {
    audioObj.play();
    document.getElementById(`${songId}`).classList.add("play-button-pause");
    masterPlay.classList.add("master-play-toggle");
  } else {
    audioObj.pause();
    masterPlay.classList.remove("master-play-toggle");
    document.getElementById(`${songId}`).classList.remove("play-button-pause");

  }
}


//AFTER PLAY OR PAUSE BUTTON THIS FUNCTION DEFINE WHICH BUTTON AND OTHE AUTO REMOVE PAUSE CLASS 
function afterContainerPlay() {
  const arrayBtn = document.querySelectorAll(".container-play-button");
  arrayBtn.forEach((element) => {
    element.classList.remove("play-button-pause");
  })

}



// -------------------------------------------------------------------------
// THIS SECTION FOR HANDLE THE HEADER SONGS PLAY OR PAUSE

//show the playbutton in header songs container and control when button pause or play

//LISTNER FOR PLAY HEADER BUTTON TO PLAY OR PAUSE SONGS
function listenPlayOrPauseHeaderButton() {

  const headeritem = document.querySelectorAll(".headeritem");
  console.log(headeritem);

  headeritem.forEach((item, i) => {
    // console.log(item.childNodes[5])
    const playButton = item.childNodes[5];

    playButton.addEventListener("click", () => {

      songId = playButton.getAttribute('data-song-id');

      console.log({ songId }); // "myValue"

      colorChange(songId);

      audioObj.src = `${songsInfo[songId].filePath}`;


      afterContainerPlay()
      afterPlay();
      playORpause()
      masterCoverChange()
    })
  })

}


//this function use for play por pause button display in the element 
function afterPlay() {
  const playButtons = document.querySelectorAll('.playbutton');

  playButtons.forEach((playButton) => {
    // console.log("CUREENT BUTTON : ", currentButton.id, currentButton.id === playButton.id)
    playButton.classList.remove('play-button-pause');
  });

  document.getElementById(`${songId}`).classList.add("play-button-pause");

}



// -------------------------------------------------------------------------
// PROGRESS and TIME UPDATE SECTION

const progressbar = document.getElementById("progressbar");
// let percProgress = 0
let timeOfsong = "";

audioObj.addEventListener("timeupdate", () => {
  //   console.log("update")
  // let percProgress = 0
  let percProgress = parseInt((audioObj.currentTime / audioObj.duration) * 100);
  // console.log({ percProgress })
  progressbar.value = percProgress;

  // ------------ for end time song -----------
  const minutes = Math.floor(audioObj.duration / 60); // Get the whole minutes
  const remainingSeconds = audioObj.duration % 60; // Get the remaining seconds
  if (remainingSeconds <= 9) {
    timeOfsong = `${minutes}:0${remainingSeconds.toFixed(0)}`;
  } else {
    timeOfsong = `${minutes}:${remainingSeconds.toFixed(0)}`;
  }
  // console.log({ timeOfsong })

  if (percProgress >= 0) {
    endTimeDiv.innerHTML = `${timeOfsong}`
  }

  // ------ for start Time of Song ----------
  let startMinutes = Math.floor(audioObj.currentTime / 60);
  let startSeconds = audioObj.currentTime % 60;
  let startTime = "";

  if (startSeconds <= 9) {
    startTime = `${startMinutes}:0${startSeconds.toFixed(0)}`;
  } else {
    startTime = `${startMinutes}:${startSeconds.toFixed(0)}`;
  }


  // console.log({ startTime })
  startTimeDiv.innerHTML = `${startTime}`

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
  if (songId >= songsInfo.length - 1) {
    songId = -1
  }
  songId++;
  audioObj.src = `${songsInfo[songId].filePath}`

  if (audioObj.paused === true) {
    audioObj.play();
  } else {
    audioObj.pause();
  }

  afterContainerPlay()
  afterPlay();
  // playORpause(audioObj)
  masterCoverChange()
}


// -----------------------------------------------
// SECTION FOR HANDLE VOLUME  OF THE SONGS 
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
const accountPanel = document.getElementById("show-account");

userDiv.addEventListener("click", () => {
  const column_button = document.getElementById("column");
  column_button.classList.toggle("toggle");
  accountPanel.classList.toggle("toggle-account");
})


document.addEventListener("click", (e) => {
  if (e.target !== userDiv && !accountPanel.contains(e.target)) {
    // Clicked outside of userDiv and account panel
    accountPanel.classList.remove("toggle-account");
  }
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




// --------------- SEARCH SECTION --------------------



const homeBtn = document.getElementById("home");
const main_section_div = document.getElementById("main-section");
const searchInput = document.getElementById("search-song");
const searchFrm = document.querySelector(".search-frm");

homeBtn.addEventListener("click", () => {
  search_sectionDiv.style.display = "none"
  main_section_div.style.display = "block"
})


searchFrm.addEventListener("submit", (e) => {
  e.preventDefault();
})

search_sectionBtn.addEventListener("click", () => {
  console.log('serch section')
  console.log(search_sectionDiv)
  search_sectionDiv.style.display = "block"
  main_section_div.style.display = "none"
})

searchInput.addEventListener("keyup", () => {
  console.log("key down search")
  let searchValue = searchInput.value;
  if (searchValue !== "")
    generateSearchSong(searchValue);
  else {
    const search_songs_items = document.querySelector(".search-songs-items");
    search_songs_items.innerHTML = "";
  }
})



function generateSearchSong(searchValue) {
  const search_songs_items = document.querySelector(".search-songs-items");

  let eldiv = songsInfo.map((song) => {
    let songName = song.songName.toLowerCase();
    if (songName.includes(searchValue.toLowerCase())) {
      return `
      <div id="" class="row-item search-song-items">
        <div class="background-img"><img src="${song.coverPath}" alt="song-poster"></div>
        <div id="${song.id}" class="container-play-button"></div>
        <div class="song-name">${song.songName}</div>
      </div>`
    }
    else {
      return "";
    }

  }).join("");

  search_songs_items.innerHTML = eldiv;

  playSongOrPauseSearch();

}


function playSongOrPauseSearch() {
  let searchSongItems = document.querySelectorAll(".search-song-items");

  Array.from(searchSongItems).forEach((songItem) => {
    let playBtn = songItem.children[1];
    playBtn.addEventListener("click", (e) => {
      songId = playBtn.id;
      audioObj.src = songsInfo[songId].filePath;
      console.log({ songId });
      afterContainerPlay();
      afterPlay();
      masterCoverChange();
      playORpause();
      e.target.classList.add("play-button-pause");
    })
  })
}






// ----------------- SET TIME OR SHOW TIME BASE GREETING -------------

// Depending on timezone, your results will vary
const time = new Date();

console.log(time.toLocaleTimeString());

const currentTime = time.toLocaleTimeString()
const hour = time.getHours();
const greetig_msg = document.getElementById("greeting_msg");

setGreeting();

function setGreeting() {
  if (hour >= 0 && hour < 12) {
    console.log("It is morning.");
    greetig_msg.innerHTML = `Good Morning`;
  } else if (hour >= 12 && hour < 5) {
    greetig_msg.innerHTML = `Good Afternoon`;
  } else {
    console.log("It is evening.");
    greetig_msg.innerHTML = `Good Evening`;
  }
}

// Expected output: "1:15:30 AM"