let time = document.getElementById("time");
let clock = document.getElementById("clock");

setInterval(() => {
    let date = new Date();
    let currentTime = date.toLocaleTimeString();
    clock.innerHTML = currentTime;
}, 1000);

let Count = 0;
let interval;
function startWatch() {
    clearInterval(interval);
    interval = setInterval(() => {
        Count++;
        time.innerHTML = Count;
    }, 1000)
}
function stopWatch() {
    clearInterval(interval);
}
let counters = Array.from(document.querySelectorAll(".counter"));
counters.map((item) => {
    let start = 0;
    let endNumber = item.dataset.number;
    let stopCounter = setInterval(() => {
        start++;
        item.innerHTML = start;
        if (start == endNumber) {
            clearInterval(stopCounter);
        }
    }, 20);
});