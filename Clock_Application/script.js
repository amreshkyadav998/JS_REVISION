const time = document.getElementById("time");

function updateTime() {
    const currentTime = new Date();
    time.innerHTML = currentTime.toTimeString().slice(0, 8);  // Displaying HH:MM:SS
}

// Update the time every second (1000 milliseconds)
let interval = setInterval(updateTime, 1000);

// Optionally, you can call updateTime() immediately to avoid waiting 1 second for the first update
updateTime();


button.addEventListener('click' , () =>{
    clearInterval(interval);
})

// showTime();