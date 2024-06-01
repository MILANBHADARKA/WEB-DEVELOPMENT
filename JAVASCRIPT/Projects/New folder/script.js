// const body = document.querySelector('body');

// body.addEventListener('click', (e) => {
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
    
//     // circle.style.width = '100px';
//     // circle.style.height = '100px';
//     let size = Math.floor(Math.random() * (200+1)) + 50;

//     circle.style.width = `${size}px`;
//     circle.style.height = `${size}px`;

//     circle.style.position = 'absolute'; // Set position type to absolute
    
//     circle.style.borderRadius = '50%';
//     circle.style.border = '2px solid black';

//     let x = e.clientX;
//     let y = e.clientY;

//     circle.style.left = `${x-(size/2)}px`;
//     circle.style.top = `${y-(size/2)}px`;
    
//     body.appendChild(circle);
    
//     let circles = document.querySelectorAll('.circle');
//     console.log(circles.length);
    
//     if(circles.length > 2){
//         // Remove the oldest circle (the first one in the NodeList)
//         // body.removeChild(circles[0]);
//         circles.forEach((circle) => {
//             body.removeChild(circle);
//         });

//     }


//     let x1 = parseInt(circles[0].style.left);
//     let y1 = parseInt(circles[0].style.top);

//     let x2 = parseInt(circles[1].style.left);
//     let y2 = parseInt(circles[1].style.top);

//     let distance = Math.hypot(x2-x1, y2-y1);
//     // console.log(distance);

//     let size1 = parseInt(circles[0].style.width);
//     let size2 = parseInt(circles[1].style.width);

//     if(distance <= size1+size2){
//         console.log('Collision');
//     }

// });




// const body = document.querySelector('body');

// body.addEventListener('click', (e) => {
//     const circle = document.createElement('div');
//     circle.classList.add('circle');
    
//     let size = Math.floor(Math.random() * (200+1)) + 50;

//     circle.style.width = `${size}px`;
//     circle.style.height = `${size}px`;

//     circle.style.position = 'absolute';
    
//     circle.style.borderRadius = '50%';
//     circle.style.border = '2px solid black';

//     let x = e.clientX;
//     let y = e.clientY;

//     circle.style.left = `${x-(size/2)}px`;
//     circle.style.top = `${y-(size/2)}px`;
    
//     body.appendChild(circle);
    
//     let circles = document.querySelectorAll('.circle');
//     console.log(circles.length);
    
//     if(circles.length > 2){
//         circles.forEach((circle) => {
//             body.removeChild(circle);
//         });
//         circles = document.querySelectorAll('.circle'); // Update the NodeList after removing circles
//     }

//     if(circles.length === 2) {
//         let x1 = parseInt(circles[0].style.left);
//         let y1 = parseInt(circles[0].style.top);

//         let x2 = parseInt(circles[1].style.left);
//         let y2 = parseInt(circles[1].style.top);

//         let distance = Math.hypot(x2-x1, y2-y1);

//         let size1 = parseInt(circles[0].style.width);
//         let size2 = parseInt(circles[1].style.width);

//         if(distance <= size1+size2){
//             console.log('Interscting');
//         }
//     }
// });





const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    let size = Math.floor(Math.random() * (200+1)) + 50;

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.position = 'absolute';
    
    circle.style.borderRadius = '50%';
    circle.style.border = '2px solid black';

    let x = e.clientX;
    let y = e.clientY;

    circle.style.left = `${x-(size/2)}px`;
    circle.style.top = `${y-(size/2)}px`;
    
    body.appendChild(circle);
    
    let circles = document.querySelectorAll('.circle');
    console.log(circles.length);
    
    if(circles.length > 2){
        circles.forEach((circle) => {
            body.removeChild(circle);
        });
        circles = document.querySelectorAll('.circle'); // Update the NodeList after removing circles
    }

    if(circles.length === 2) {
        let x1 = parseInt(circles[0].style.left) + parseInt(circles[0].style.width)/2;        //here we do +width/2 because when we give left we do -size/2
        let y1 = parseInt(circles[0].style.top) + parseInt(circles[0].style.height)/2;

        let x2 = parseInt(circles[1].style.left) + parseInt(circles[1].style.width)/2;
        let y2 = parseInt(circles[1].style.top) + parseInt(circles[1].style.height)/2;

        let distance = Math.hypot(x2-x1, y2-y1);

        let size1 = parseInt(circles[0].style.width);
        let size2 = parseInt(circles[1].style.width);

        if(distance <= (size1+size2)/2){
            console.log('Intersecting');
        }
    }
});