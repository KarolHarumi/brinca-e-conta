<template>
  <div class="story">
    <div class="choice-modal hide">
      <p>Que susto! Ainda bem que essa plantinha ajudou a Naiá a chegar a superfície!</p>

      <div class="question">
        <p>Vamos também ajudar a Naiá e escolher onde a planta pode deixar a indiazinha em segurança!</p>
        <span class="button-primary" @click="getChoice()">Na grama verdinha</span>
        <span class="button-primary" @click="getChoice()">Ao lado de uma árvore florida</span>
      </div>
    </div>

    <div class="nav">
      <h1>Lenda da Vitória Régia</h1>
      <h2>Olá {{ name }}!</h2>
      <p>Preparado(a) para deixar nossa historinha<br /> ainda mais divertida?</p>
      <md-button class="md-raised md-primary start" @click="addComicBubbles()">Iniciar História</md-button>
    </div>
  
    <div id="containerScenario">
      <img src="../assets/character.png" width="250" alt="Naiá">
    </div>

  </div>
</template>

<script>

export default {
  
  data: function() {
      return {
        name: `${localStorage.getItem('name')}`,
        age: `${localStorage.getItem('age')}`
      }
  },

  methods: {

    getChoice() {
      var selected = document.querySelector('.button-primary').textContent;
      document.querySelector('.choice-modal').classList.add('hide');
      console.log('selected', selected);
    },

    addComicBubbles() {
      document.querySelector('.nav').classList.add('hide');

      window.CharactersBubbles = new window.ComicBubbles("containerScenario", {canvas: {readonly: true}}, {bubble: [
        {id: 'b1', x: '25%', y: '100', fontSize: '20px', fontFamily: 'Tahoma', background: '#fff', color: '#000', bubbleStyle: 'none', tailLocation: 'e', tailX: 0, tailY: 0, visible: false}
      ]});

      const dialogs = [
        {
          delay: 100,
          sentence: '',
          hasChoice: false
        },
        { 
          delay: 1000,
          sentence: 'Há quem diga que muitos anos\n atrás um forte indiozinho havia se\n transformado em estrela.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'E esta estrela foi crescendo,\n crescendo dando origem a Lua.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Alguns não acreditam nessa história,\n mas outros sim, como a\n indiazinha Naiá.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Naiá era uma amante da natureza.\n Cuidava de rosas e plantas com\n muito carinho e amor. E adorava se\n enfeitar com elas.',
          hasChoice: true,
          choice: {
            text: 'Vamos ajudar a indiazinha Naiá!',
            question: 'Por qual caminho ela precisa ir pra ver a luz da lua?',
            alternatives: ['Na beira do rio', 'Dentro da floresta']
          }
        },
        {
          delay: 1000,
          sentence: 'Ela sempre foi conhecida em sua\n aldeia por ser apaixonada pela\n luz da lua.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Até que em um dia de lua cheia ela\n notou de sua oca que o brilho da\n lua estava mais intenso e saiu\n para contempla-lo.',
          hasChoice: true,
          choice: {
            text: 'Vamos ajudar a indiazinha Naiá!',
            question: 'Por qual caminho ela precisa ir pra ver a luz da lua?',
            alternatives: ['Na beira do rio', 'Dentro da floresta']
          }
        },
        {
          delay: 1000,
          sentence: 'Chegando até a beira do rio avistou\n um facho de luz sobre a água.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Nesse momento se apoiou sobre\n uma pedra para chegar mais perto.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Foi aí que viu a figura de um belo\n índio refletido na água vindo da\n Luz da Lua.',
          hasChoice: true,
          choice: {
            text: 'Nossa, a indiazinha Naiá é bem curiosa e acabou vendo o rosto de alguém muito bonito!',
            question: 'Chegou a hora de escolher! O que a Naiá vai fazer?',
            alternatives: ['Ela fica encantada com o indiozinho!', 'Ela vai tentar dar um beijo na imagem']
          }
        },
        {
          delay: 1000,
          sentence: 'A indiazinha se encanta pelo índio,\n e num ato de impulso, tenta dar\n um beijo na imagem refletida.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Nesse momento ela se desequilibra,\n cai no rio e vai afundando,\n desacordada.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Até que um facho de luz atinge\n algumas plantas, raízes e algas do\n rio que despertam e se entrelaçam\n envolvendo Naiá.',
          hasChoice: true,
          choice: {
            text: 'Que susto! Ainda bem que essa plantinha ajudou a Naiá a chegar a superfície!',
            question: 'Vamos também ajudar a Naiá e escolher onde a planta pode deixar a indiazinha em segurança!',
            alternatives: ['Na grama verdinha', 'Ao lado de uma árvore florida']
          }
        },
        {
          delay: 1000,
          sentence: 'E uma planta formada por uma grande bolha em\n forma de círculo e com bordas levantadas\n começou a erguer Naiá até a superfície.',
          hasChoice: true
        },
        {
          delay: 1000,
          sentence: 'Esta planta é conhecida como\n Vitória Régia. Desde então, a\n indiazinha passou a ser chamada\n pelo nome da famosa planta\n amazônica.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'Flutuando nas beiras dos rios\n sobre uma grande raíz redonda.\n A Vitória Régia é muito caridosa e distribui\n plantas para os animais da floresta.',
          hasChoice: false
        },
        {
          delay: 1000,
          sentence: 'O suco extraído de suas raízes é\n utilizado como tintura negra para\n os cabelos e durante a noite, flores\n brancas e perfumadas florescem de sua\n raíz enquanto contempla a luz da\n lua e o brilho das estrelas.',
          hasChoice: false
        }
      ];
      let index = 0;
      const totalDialogs = dialogs.length;

      window.CharactersBubbles.onCanvasLoad(function(){

        function buildBalloonEffect() {
          index++;
          
          if(dialogs[index].hasChoice) {
            console.log('haschoice');
            document.querySelector('.choice-modal').classList.remove('hide');
          }

          if(index <= (totalDialogs - 1)) { 
            Bubble1.delay(500).fadeOut(function(){
              Bubble1.delay(dialogs[index].delay).setText(dialogs[index].sentence).setWidth('auto').setHeight('auto').fadeIn();
            });
          } else {
            index = totalDialogs;
          }
        }

        var Bubble1 = this.getBubbleById('b1'); 
        
        document.querySelector('body').addEventListener('click', function(){
          buildBalloonEffect();
        });
        
        buildBalloonEffect();
      });

    },

  }
}
</script>

<style scoped>

.hide {
  display: none!important;
}
.choice-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  height: 100vh;
}




  .story {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    position: relative;
  }

  .story .nav {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .story .nav.hide {
    display: none;
  }

  h1 {
    line-height: 1.3;
    font-family: 'Fredoka One', cursive;
    font-weight: 900;
    font-size: 31px;
  }

  p {
    text-align: center;
  }

  #containerScenario {
    background: url('../assets/story_background.jpg') no-repeat center/ cover;
    height: 100vh;
    background-color: #ccc;
    position: relative;
  }

  #containerScenario img {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
  }

  /*TODO: CRIAR COMPONENTE*/
  .button-primary {
    display: block;
    background-color: #ECBF2B;
    color: #fff;
    border-radius: 20px;
    padding: 10px 35px;
    box-shadow: 0 2px 0 2px #62BBE0;
    font-size: 21px;
    font-family: 'Fredoka One', cursive;
    border: 0;
    text-align: center;
  }

  .button-primary + .button-primary {
    margin-top: 20px;
  }
</style>