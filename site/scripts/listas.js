var abrir1 = 0
function ListaPodcast(){
    var lista = window.document.getElementsByClassName("opcao")[0]
    if (abrir1 == 0){
        lista.style.display = "block"
        abrir1 = 1
    }else if (abrir1 == 1){
        lista.style.display = "none"
        abrir1 = 0
    }
}

var abrir2 = 0
function ListaVideos(){
    var lista = window.document.getElementsByClassName("opcao")[1]
    if (abrir2 == 0){
        lista.style.display = "block"
        abrir2 = 1
    }else if (abrir2 == 1){
        lista.style.display = "none"
        abrir2 = 0
    }
}

var abrir3 = 0
function ListaCelular(){
    var lista = window.document.getElementById("lista-nav")
    if (abrir3 == 0){
        lista.style.display = "block"
        abrir3 = 1
    }else if (abrir3 == 1){
        lista.style.display = "none"
        abrir3 = 0
    }
}