function posicaoMosquito() {
  posx = Math.round(Math.random() * largura) - 90;
  posy = Math.round(Math.random() * altura) - 90;
  posx = posx < 0?0:posx;
  posy = posy < 0?0:posy;

  return posx + "px, " + posy + "px";
}

function tamanhoMosquito() {
  return Math.round(Math.random() * (3 - 1) + 1);
}

function direcaoMosquito() {
  return Math.round(Math.random() < 0.5 ? -1:1);
}

function gerarMosquito() {
  if (document.getElementById('tempoMosquito')) {
    document.getElementById('tempoMosquito').remove();

    if (vidas > 3) {
      window.location.href = "game_over.html";
    } else {
      vidaVazia = document.getElementById('v' + vidas);
      vidaVazia.src = "imagens/coracao_vazio.png";
      vidaVazia.draggable = false;
      vidas++;
    }
  }

  mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.position = 'absolute';
  mosquito.style.transform = "translate(" + posicaoMosquito() + ") scaleX(" + direcaoMosquito() + ")";
  mosquito.id = 'tempoMosquito';
  mosquito.draggable = false;
  mosquito.onclick = function () {
    new Audio("sons/SPLAT.mp3").play();
    this.remove();
  }

  document.body.appendChild(mosquito);
}