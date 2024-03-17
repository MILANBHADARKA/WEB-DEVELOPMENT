const clock = document.querySelector('#clock')
//const clock = getElementById(clock)

setInterval(function () {
    let date = new Date();
    date = date.toLocaleTimeString();

    clock.innerHTML = `${date}`

} , 1000)    //1000 ms = 1s


