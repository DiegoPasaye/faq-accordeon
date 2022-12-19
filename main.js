const info1 = document.querySelector(".info1")
const info2 = document.querySelector(".info2")
const info3 = document.querySelector(".info3")
const info4 = document.querySelector(".info4")
const info5 = document.querySelector(".info5")

const block1 = document.querySelector(".block1")
const block2 = document.querySelector(".block2")
const block3 = document.querySelector(".block3")
const block4 = document.querySelector(".block4")
const block5 = document.querySelector(".block5")
estado = ""



const active1 = () =>{
    info1.style.display = "block"
    estado = "activo"
}
const active2 = () =>{
    info2.style.display = "block"
    estado = "activo"
}
const active3 = () =>{
    info3.style.display = "block"
    estado = "activo"
}
const active4 = () =>{
    info4.style.display = "block"
    estado = "activo"
}
const active5 = () =>{
    info5.style.display = "block"
    estado = "activo"
}

const ocultar = () =>{
    info1.style.display = "none"
    estado = "oculto"
}

block1.addEventListener("click", active1);
block2.addEventListener("click", active2);
block3.addEventListener("click", active3);
block4.addEventListener("click", active4);
block5.addEventListener("click", active5);
