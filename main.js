const info1 = document.querySelector(".info1")
const info2 = document.querySelector(".info2")
const info3 = document.querySelector(".info3")
const info4 = document.querySelector(".info4")
const info5 = document.querySelector(".info5")

const question1 = document.querySelector(".question1")
const question2 = document.querySelector(".question2")
const question3 = document.querySelector(".question3")
const question4 = document.querySelector(".question4")
const question5 = document.querySelector(".question5")

const block1 = document.querySelector(".block1")
const block2 = document.querySelector(".block2")
const block3 = document.querySelector(".block3")
const block4 = document.querySelector(".block4")
const block5 = document.querySelector(".block5")
let estado = "apagado"

const arrow1 = document.querySelector(".arrow1")
const arrow2 = document.querySelector(".arrow2")
const arrow3 = document.querySelector(".arrow3")
const arrow4 = document.querySelector(".arrow4")
const arrow5 = document.querySelector(".arrow5")


const active1 = () =>{
    if(estado == "apagado"){
        info1.style.display = "block"
        info1.style.color = "hsl(240, 6%, 50%)"
        info1.style.animation = "fadeIn 1s"
        question1.style.color = "black"
        arrow1.style.transform = "scaleY(-1)"
        estado = "activo"
    }else if(estado == "activo"){
        info1.style.display = "none"
        question1.style.color = "hsl(240, 6%, 50%)"
        info1.style.color = "black"
        arrow1.style.transform = "scaleY(1)"
        estado = "apagado"
    }
}


const active2 = () =>{
    if(estado == "apagado"){
        info2.style.display = "block"
        info2.style.color = "hsl(240, 6%, 50%)"
        question2.style.color = "black"
        arrow2.style.transform = "scaleY(-1)"
        estado = "activo"
    }else if(estado == "activo"){
        info2.style.display = "none"
        question2.style.color = "hsl(240, 6%, 50%)"
        info2.style.color = "black"
        arrow2.style.transform = "scaleY(1)"
        estado = "apagado"
    }
}
const active3 = () =>{
    if(estado == "apagado"){
        info3.style.display = "block"
        info3.style.color = "hsl(240, 6%, 50%)"
        question3.style.color = "black"
        arrow3.style.transform = "scaleY(-1)"
        estado = "activo"
    }else if(estado == "activo"){
        info3.style.display = "none"
        question3.style.color = "hsl(240, 6%, 50%)"
        info3.style.color = "black"
        arrow3.style.transform = "scaleY(1)"
        estado = "apagado"
    }
}
const active4 = () =>{
    if(estado == "apagado"){
        info4.style.display = "block"
        info4.style.color = "hsl(240, 6%, 50%)"
        question4.style.color = "black"
        arrow4.style.transform = "scaleY(-1)"
        estado = "activo"
    }else if(estado == "activo"){
        info4.style.display = "none"
        question4.style.color = "hsl(240, 6%, 50%)"
        info4.style.color = "black"
        arrow4.style.transform = "scaleY(1)"
        estado = "apagado"
    }
}
const active5 = () =>{
    if(estado == "apagado"){
        info5.style.display = "block"
        info5.style.color = "hsl(240, 6%, 50%)"
        question5.style.color = "black"
        arrow5.style.transform = "scaleY(-1)"
        estado = "activo"
    }else if(estado == "activo"){
        info5.style.display = "none"
        question5.style.color = "hsl(240, 6%, 50%)"
        info5.style.color = "black"
        arrow5.style.transform = "scaleY(1)"
        estado = "apagado"
    }
}



block1.addEventListener("click", active1);
block2.addEventListener("click", active2);
block3.addEventListener("click", active3);
block4.addEventListener("click", active4);
block5.addEventListener("click", active5);


