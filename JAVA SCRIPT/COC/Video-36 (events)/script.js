document.querySelector('#photos').addEventListener('click' , function(e) {
    let removeit = e.target.parentNode
    removeit.remove()
})