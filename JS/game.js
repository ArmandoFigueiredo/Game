altura = 0;
largura = 0;
vidas = 1;

function iniciarJogo() {
  nivel = document.getElementById("nivel").value;

  if (nivel == "") {
    alert("Escolha um nível primeiro!");
  } else {
    window.location.href = "game.html?" + nivel;
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
    window.location.href = "vitoria.html";
  } else {
    document.getElementById('tempoJogo').innerHTML = tempo;
  }
}, 1000);
