let randomcolor = function() {
    //random color in rgb
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //return the color in rgb format
    return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('body').addEventListener( 'mousemove' , function () {
    let color = randomcolor();
    document.body.style.backgroundColor = color;
})

document.querySelector('body').addEventListener( 'mouseout' , function () {
    document.body.style.backgroundColor = '#fff';
})