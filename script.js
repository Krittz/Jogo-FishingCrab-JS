var altura
var largura
var vidas = 1
var tempo = 10
var nivel = window.location.href.split('?')[1];
var makeCrabTime = 1500;




if(nivel === 'easy') {
    makeCrabTime = 1500;
}
else if(nivel === 'medium') {

    makeCrabTime = 1000;
}
else if(nivel === 'hard') {
      
      makeCrabTime = 750;
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}
function playGame() {
  var nivel = document.querySelector('#nivel').value
  if (nivel === '') {
    alert('Selecione um nível')
    return false
  } else {
    window.location.href = 'app.html?' + nivel;
  }
}
ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function () {
  document.querySelector('#cronometro').innerHTML = tempo
  tempo -= 1
  if (tempo == -1) {
    clearInterval(cronometro)
    window.location.href = 'win.html'
  }
}, 1000)

function posicaoRandomica() {
  if (document.querySelector('#crab')) {
    document.querySelector('#crab').remove()

    if (vidas > 3) {
      window.location.href = 'fim.html'
    } else {
      document.querySelector('#v' + vidas).src = 'imagens/coracao_vazio.png'
      vidas++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 120
  var posicaoY = Math.floor(Math.random() * altura) - 120
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  var crab = document.createElement('img')
  crab.src = 'imagens/crab.png'
  crab.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  crab.style.left = posicaoX + 'px'
  crab.style.top = posicaoY + 'px'
  crab.style.position = 'absolute'
  crab.id = 'crab'
  crab.onclick = function () {
    this.remove()
  }

  document.body.appendChild(crab)
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)
  switch (classe) {
    case 0:
      return 'crab1'

    case 1:
      return 'crab2'

    case 2:
      return 'crab3'
  }
  console.log(classe)
}

function ladoAleatorio() {
  var lado = Math.floor(Math.random() * 2)
  switch (lado) {
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'
  }
}
