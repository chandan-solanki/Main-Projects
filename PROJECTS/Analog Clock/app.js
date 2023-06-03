console.log("analog clock4")


setInterval(() => {
    // console.log("seconds")
    dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();

    let hrRotation = (30 * hours) + (minutes / 2);
    let minRotation = 6 * minutes;
    let secRotation = 6 * seconds;
    // console.log(secRotation)
    
    document.getElementById("hour").style.transform = `rotate(${hrRotation}deg)`
    document.getElementById("minute").style.transform = `rotate(${minRotation}deg)`
    document.getElementById("second").style.transform = `rotate(${secRotation}deg)`
}, 1000)