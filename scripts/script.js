function animar(){
    const btn = document.getElementById("btn-menu")
    btn.classList.toggle('ativar')
    menu()
}

let abrir = false
function menu(){
    let links = document.getElementById('links-menu')
    if (abrir == false){
        links.style.display = 'flex'
        abrir = true
    }else if (abrir == true){
        links.style.display = 'none'
        abrir = false
    }
}

/* ======================================================================= */
function Boletim(){
    window.location.href = "https://alunoonline.educacao.rj.gov.br/AlunoOnline/Academico/Boletim.aspx"
}
function focoenem(){
    window.location.href = "https://gremio-pbs.github.io/focoenem/"
}
function Portugues(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdiy2Xhd1Tn4_q974HxDUzox"
}
function Matematica(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdgCfgrnyT2jmFXGupiDL8aO"
}
function Biologia(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdgu7TOyarRBU42MXOrUJnOS"
}
function Quimica(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdj_YFEHTaBDccdSCC1LVNH0"
}
function Fisica(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdiG6QR-LpXXbUYzPz5rOhF2"
}
function Historia(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdgYjZ1Lt_oL9dqbCbYda-qm"
}
function Geografia(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdhJ59r8q7B7OYpSJpLi7c6c"
}
function Redacao(){
    window.location.href = "https://www.youtube.com/playlist?list=PLgIWHtlPYF81jqys2qLmJNVfDZlfxItPC"
}
function Sociologia(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdhgZGd24rHqVGVI04ips2-C"
}
function Artes(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdialQfulCLVGKat0DwB6fKX"
}
function Educacao(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdgRR60A9YGAgwkwnf9QTbsw"
}
function Literatura(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdhWCEOQKTf8tEM568D_-PHt"
}
function Ingles(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdi5r_8AR3AtCFmj2RXo5ve0"
}
function Filosofia(){
    window.location.href = "https://www.youtube.com/playlist?list=PL8vXuI6zmpdhL_j7KudlBxOlGKcFOMiSl"
}
function v1(){
    window.location.href = "https://www.youtube.com/watch?v=5jq_kcNYzUo"
}
function v2(){
    window.location.href = "https://www.youtube.com/watch?v=WnBw_jdXBkY&t=577s"
}
function v3(){
    window.location.href = "https://www.youtube.com/watch?v=RwoHzjwnUPE"
}
/* ======================================================================= */