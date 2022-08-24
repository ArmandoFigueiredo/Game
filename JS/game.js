altura = 0;
largura = 0;
vidas = 1;
abelhas_mortas = 0;
mosquito_mortos = 0;

function iniciarJogo() {
  nivel = document.getElementById("nivel").value;

  if (nivel == "") {
    alert("Escolha um nível primeiro!");
  } else {
    window.location.href = "./game.html?" + nivel;
  }
}

function dificuldadeJogo() {
  nivel = window.location.search.replace('?', '');

  switch (nivel) {
    case 'normal':
      tempo = 15;
    break;
    case 'dificil':
      tempo = 10;
    break;
    case 'impossivel':
      tempo = 7.5;
    break;
  }
}

function tamanhoTela() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

tamanhoTela();
dificuldadeJogo();

resetarTempo = setInterval(function() {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(resetarTempo);
    clearInterval(criarMosquitos);
    
    if(abelhas_mortas == 0)
      window.location.href = "./win_game.html";
    else
      window.location.href = "./game_over.html";
      
  } else {
    document.getElementById('tempoJogo').innerHTML = tempo;
  }
}, 1000);

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

    if (vidas <= 0) {
      window.location.href = "./HTML/game_over.html";
    } else {
      vidaVazia = document.getElementById('v' + vidas);
      vidaVazia.src = "./IMAGENS/coracao_vazio.png";
      vidaVazia.draggable = false;
      vidas++;
    }
  }

  mosquito = document.createElement('img');
  mosquito.src = './IMAGENS/pernilongo.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.position = 'absolute';
  mosquito.style.transform = "translate(" + posicaoMosquito() + ") scaleX(" + direcaoMosquito() + ")";
  mosquito.id = 'tempoMosquito';
  mosquito.draggable = false;
  mosquito.onclick = function () {
    new Audio("./SONS/sons_SPLAT.mp3").play();
    this.remove();
    mosquito_mortos++;
  }

  document.body.appendChild(mosquito);
}

function gerarAbelhas() {

  abelha = document.createElement('img');
  abelha.src = './IMAGENS/abelha_1.png';
  abelha.className = 'mosq0' + tamanhoMosquito();
  abelha.style.position = 'absolute';
  abelha.style.transform = "translate(" + posicaoMosquito() + ") scaleX(" + direcaoMosquito() + ")";
  abelha.id = 'tempoMosquito';
  abelha.draggable = false;
  abelha.onclick = function () {
    new Audio("./SONS/sons_SPLAT.mp3").play();
    this.remove();
    abelhas_mortas++;

    if(abelhas_mortas >= 3) {
      window.location.href = "./game_over.html"; 
    }
  }

  document.body.appendChild(abelha);
}
