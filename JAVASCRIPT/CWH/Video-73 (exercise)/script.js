let x = document.getElementsByClassName('main');

document.querySelector('.button').addEventListener('click', function () {
    let a = document.querySelector('.main')

    let z = document.createElement('div')
    a.appendChild(z)

    let b = document.createElement('div')
    let c = document.createElement('div')

    b.className = "img"
    c.className = "text"

    z.appendChild(b)
    z.appendChild(c)

    let img = document.createElement('img')
    // img.src = "./picture.jpg"1
    img.src = prompt("Enter the image source")
    b.appendChild(img)



    let d = document.createElement('div')
    c.appendChild(d)
    d.className = "title"

    let e = document.createElement('div')
    c.appendChild(e)
    e.className = "description"

    let title = document.createElement('p')
    // title.innerText = "Exercise 16 - Dummy Data Generator | Sigma Web Development Course - Tutorial #97"2
    title.innerText = prompt("Enter the title")
    d.appendChild(title)


    let cname = document.createElement('span')
    // cname.innerText = "CodeWithHarry--"3
    let cn = prompt("Enter the channel name")
    cname.innerText = `${cn}--`
    e.appendChild(cname)

    let view = document.createElement('span')
    // view.innerText = "1,000 views--"4
    let vi = prompt("Enter the views")
    view.innerText = `${vi} views--`
    e.appendChild(view)

    let date = document.createElement('span')
    // date.innerText = "1 year ago"5
    // date.innerText = prompt("Enter the date")

    let date1 = new Date()
    let month = date1.getMonth()
    let year = date1.getFullYear()

    let mon = prompt("Enter the month")
    let yr = prompt("Enter the year")

    if (mon == month && yr == year) {
        date.innerText = "This Month"
    }

    else if (mon == month && yr != year) {
        date.innerText = "This Year"
    }

    else {
        date.innerText = "Long Ago"
    }
    e.appendChild(date)

    z.style.display = "flex"
    a.style.display = "flex"
    a.style.flexDirection = "column"
    a.style.gap = "100px"
    z.style.border = "2px solid black"
    z.style.borderRadius = "10px"
    z.style.backgroundColor = "black"
    a.style.position = "relative"

    c.style.fontSize = "15px"
    c.style.color = "white"

    d.style.fontSize = "18px"
    d.style.fontWeight = "bold"

    e.style.fontSize = "15px"
    e.style.fontWeight = "lighter"

    img.style.height = "100px"
    img.style.borderRadius = "10px"

})

