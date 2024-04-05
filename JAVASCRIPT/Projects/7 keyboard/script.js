let insert = document.querySelector('.insert');

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
    <table>

    <tr>
        <td>KEY</td>
        <td>CODE</td>
        <td>KEYCODE</td>
    </tr>

    <tr>
        <td>${e.key === ' ' ? "Space" : e.key}</td>
        <td>${e.code}</td>
        <td>${e.keyCode}</td>
    </tr>
</table>
    `

});