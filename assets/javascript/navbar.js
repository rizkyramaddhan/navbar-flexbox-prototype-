let toggle = document.getElementById("toggle")
const list = document.getElementById("list-navbar")

toggle.addEventListener("click", function(){
    toggle.classList.toggle("toggle-active")
    list.classList.toggle("list-active")
})