var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

function tamanhoTela() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

tamanhoTela();

var gameTime = setInterval(function(){          
            tempo -= 1;

            if(tempo < 0) {
              clearInterval(gameTime);
              clearInterval(criarMosquito);
              window.location.href = "wingame.html";
            } else { 
              document.getElementById('gameTime').innerHTML = tempo;
            }
          }, 1000);                  

function randomPosition() {
  
  if(document.getElementById('mosquitoTime')) {

      document.getElementById('mosquitoTime').remove();  
      
      if(vidas > 3) {
        window.location.href = "endgame.html";
      } else {      
      document.getElementById("v" + vidas).src="../IMAGENS/coracao_vazio.png";
      vidas ++;
      }
}
var posx = Math.floor(Math.random()*largura)-90;
var posy = Math.floor(Math.random()*altura)-90;

posx = posx < 0?0:posx;
posy = posy < 0?0:posy;

var mosquito = document.createElement('img');
mosquito.src='imagem/mosquito.png';
document.body.appendChild(mosquito);

mosquito.className = tamanhoMosquito() + ' ' + aleatory();
mosquito.style.left = posx + 'px';
mosquito.style.top = posy + 'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquitoTime';

mosquito.onclick = function() {
  this.remove();
  }
}

function tamanhoMosquito() {
  var classe = Math.floor(Math.random() * 3); 

  switch(classe) {
    case 0:
      return 'mosq01';
      case 1:
        return 'mosq02';
        case 2:
          return 'mosq03';
  }
}

function aleatory() {
  var classe = Math.floor(Math.random() * 3); 

  switch(classe) {
    case 0:
      return 'ladoA';
      case 1:
        return 'ladoB';        
  }
}

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

dificuldadeJogo();


