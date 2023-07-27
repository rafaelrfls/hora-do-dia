function h() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    var hor = document.getElementById('msg')
    var img = document.getElementById('imagem')

    /*var hora = 20 // Mudar o numero para testar as horas*/
    

    if (hora >= 5 && hora <= 12) {
        img.innerHTML = img.src = './assets/img/manha.jpg'
        document.body.style.background = '#cc9a81'
        hor.innerHTML = `Bom dia! Agora são ${hora} horas e ${min} minutos.`
    } else if (hora > 12 && hora < 18) {
        img.innerHTML = img.src = './assets/img/tarde1.png'
        document.body.style.background = '#83a7cb'
        hor.innerHTML = `Boa tarde! Agora são ${hora} horas e ${min} minutos.`
    } else {
        img.innerHTML = img.src = './assets/img/noite.jpg'
        document.body.style.background = '#04264b'
        hor.innerHTML = `Boa noite! Agora são ${hora} horas e ${min} minutos.`
    }
}