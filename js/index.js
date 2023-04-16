const toggle = document.querySelector(".toggle")
const nav = document.querySelector(".head_conte")
const contenido = document.querySelectorAll(".move")
toggle.onclick = function() {
        toggle.classList.toggle('active')
        nav.classList.toggle('active')
    }
    //activar informacion
function activarInfo() {
    contenido.forEach((item) => {
        item.classList.remove('active')
    })
    this.classList.add('active')
}
contenido.forEach((item) => {
    item.addEventListener('click', activarInfo)
})