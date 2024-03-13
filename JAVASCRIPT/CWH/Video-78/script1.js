// let x = document.getElementById('main');

// let y = document.createElement('div');
// y.className = "div1";
// x.appendChild(y);

// let z = document.createElement('span');
// let a = document.createElement('span');
// y.appendChild(z);
// y.appendChild(a);

// z.innerText = "Hello";
// a.innerText = "World";

// let b = document.createElement('div');
// b.className = "div2";
// b.innerText = "This is a new div";

// x.appendChild(b);





function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime =+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);



async function f1() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("f1");
            console.log(getDateTime());
            resolve();
        }, 3000);
    })
}

async function f2() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("f2");
            console.log(getDateTime());

            resolve();
        }, 2000);
    })
}


async function main() {
    await f1()
    await f2()
}

main();