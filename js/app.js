
let nav = document.querySelector(".nav-bar")
let onglet = document.querySelectorAll(".nav-bar li a")
let nav_ul = document.querySelector(".nav-bar ul")
//changer la couleur de nav-bar lors du défilement

const changerCouleurLi = (color, element) => {
    for (let i = 0; i < element.length; i++) {
        element[i].style.color = color 
    }
}

changeFontWeight = (weight, element) => {
    for (let i = 0; i < element.length; i++) {
        element[i].style.fontWeight = weight
    }
}

window.addEventListener("scroll", function(){
    if(window.scrollY > 120){
        nav.style.backgroundColor = "rgb(35,42,52)" //#333333
        changerCouleurLi("white", onglet)
        changeFontWeight("normal", onglet)

    } else {
        nav.style.backgroundColor = "transparent"
        changerCouleurLi("black", onglet) 
        changeFontWeight("bold", onglet) 
    }
})

