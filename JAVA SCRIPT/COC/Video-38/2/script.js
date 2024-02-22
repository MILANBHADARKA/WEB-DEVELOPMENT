// const randomcolor = function() {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for(let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


const randomcolor = function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


let intervalId;
const startchangingcolor =function() {

    const change = function() {
        document.body.style.backgroundColor = randomcolor();
    }

    if(!intervalId)     //we do interval = null so this condition is naccerty otherwise it is not naccery.
    {
        intervalId = setInterval(change, 100);
    }
}

const stopchangingcolor = function() {
        clearInterval(intervalId);
        document.body.style.backgroundColor = '#212121';
        intervalId = null;  //this is not naccery but it is good to do to avoid overright value of intervalId.
}


document.getElementById('start').addEventListener('click', startchangingcolor);

document.getElementById('stop').addEventListener('click' , stopchangingcolor);