var counter = document.querySelector(".counter");
var followers = document.querySelector(".follower");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++
    counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers in Instagram";
}, 6820);
