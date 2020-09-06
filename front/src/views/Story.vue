<template>
  <div class="story">
    <div class="choice-modal hide" :style="{'background-image': 'url(' + require(`../assets/vitoria-regia/story_vr_choice_${choiceBackground}.png`) + ')'}">

      <p class="intro">{{ choiceText }}</p>

      <div class="question">
        <p>{{ choiceQuestion }}</p>
        <span class="button-primary" @click="getChoice()">{{ choiceAnswers[0] }}</span>
        <span class="button-primary" @click="getChoice()">{{ choiceAnswers[1] }}</span>
      </div>
    </div>

    <div class="containerScenario">
      <div class="nav" @click="startStory()">
        <h1>Lenda da Vitória Régia</h1>
        <h2>Olá {{ name }}!</h2>
        <p>Preparada para deixar nossa historinha ainda mais divertida?</p>
      </div>

      <div id="scenario">
        <img :src="require(`../assets/vitoria-regia/story_vr_${index}.png`)" alt="Lenda da Vitória Régia" />
        <span class="dialog hide" :style="(`${position}`)">
          <p>{{ sentences }}</p>
        </span>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  data: function() {
      return {
        name: `${localStorage.getItem('name')}`,
        age: `${localStorage.getItem('age')}`,
        index: 0,
        sentences: '',
        position: 'bottom: 20px',

        choiceText: '',
        choiceQuestion: '',
        choiceAnswers: '',
        choiceBackground: 0
      }
  },

  methods: {

    startStory() {
      document.querySelector('.dialog').classList.remove('hide');
      document.querySelector('.nav').classList.add('hide');

      this.storyNavigate();
    },

    storyNavigate() {
      const dialogs = [
        {
          sentence: '',
          position: 'top: 25%'
        },
        {
          sentence: 'Há quem diga que muitos anos atrás um forte indiozinho havia se transformado em estrela.',
          position: 'top: 25%'
        },
        {
          sentence: 'E esta estrela foi crescendo, crescendo dando origem a Lua.',
          position: 'top: 45%'
        },
        {
          sentence: 'Alguns não acreditam nessa história, mas outros sim, como a indiazinha Naiá.',
          position: 'top: 60px'
        },
        {
          sentence: 'Naiá era uma amante da natureza. Cuidava de rosas e plantas com muito carinho e amor. E adorava se enfeitar com elas.',
          position: 'top: 20px',
        },
        {
          sentence: 'Ela sempre foi conhecida em sua aldeia por ser apaixonada pela luz da lua. Mal podia esperar que o sel se retirasse para que a noite chegasse e então ela pudesse contemplar a luz do luar.',
          position: 'bottom: 20px',
          choices: {
            text: 'Como a indiazinha Naiá é bonita!',
            question: 'Como ela deveria enfeitar os cabelos?',
            answers: ['Com tranças', 'Com arquinho'],
            background: 0,
          }
        },
        {
          sentence: 'Até que em um dia de lua cheia ela notou de sua oca que o brilho da lua estava mais intenso e saiu para contempla-lo.',
          position: 'bottom: 15%'
        },
        {
          sentence: 'Chegando até a beira do rio avistou um facho de luz sobre a água. Nesse momento se apoiou sobre uma pedra para chegar mais perto.',
          position: 'top: 20px',
          choices: {
            text: 'Vamos ajudar a indiazinha Naiá!',
            question: 'Por qual caminho ela precisa ir pra ver a luz da lua?',
            answers: ['Na beira do rio', 'Dentro da floresta'],
            background: 1,
          }
        },
        {
          sentence: 'Foi aí que viu a figura de um belo índio refletido na água vindo da Luz da Lua.',
          position: 'top: 50px'
        },
        {
          sentence: 'A indiazinha se encanta pelo índio, e num ato de impulso, tenta dar um beijo na imagem refletida.',
          position: 'bottom: 15%',
          choices: {
            text: 'Nossa, a indiazinha Naiá é bem curiosa e acabou vendo o rosto de alguém muito bonito!',
            question: 'Chegou a hora de escolher! O que a Naiá vai fazer?',
            answers: ['Ela fica encantada com o indiozinho!', 'Ela vai tentar dar um beijo na imagem'],
            background: 2,
          }
        },
        {
          sentence: 'Nesse momento ela se desequilibra, cai no rio e vai afundando, desacordada.',
          position: 'top: 22%'
        },
        {
          sentence: 'Até que um facho de luz atinge algumas plantas, raízes e algas do rio que despertam e se entrelaçam envolvendo Naiá.',
          position: 'top: 22%',
        },
        {
          sentence: 'E uma planta formada por uma grande bolha em forma de círculo e com bordas levantadas começou a erguer Naiá até a superfície.',
          position: 'bottom: 50px',
          choices: {
            text: 'Que susto! Ainda bem que essa plantinha ajudou a Naiá a chegar a superfície!',
            question: 'Vamos escolher onde a planta pode deixar a indiazinha em segurança!',
            answers: ['Na grama verdinha', 'Ao lado de uma árvore florida'],
            background: 3,
          }
        },
        {
          sentence: 'Esta planta é conhecida como Vitória Régia. Desde então, a indiazinha passou a ser chamada pelo nome da famosa planta amazônica.',
          position: 'top: 50px'
        },
        {
          sentence: 'Flutuando nas beiras dos rios sobre uma grande raíz redonda. A Vitória Régia é muito caridosa e distribui plantas para os animais da floresta.',
          position: 'bottom: 10%'
        },
        {
          sentence: 'O suco extraído de suas raízes é utilizado como tintura negra para os cabelos e durante a noite...',
          position: 'bottom: 10%'
        },
        {
          sentence: '...flores brancas e perfumadas florescem de sua raíz enquanto contempla a luz da lua e o brilho das estrelas.',
          position: 'top: 25%'
        }
      ];

      document.querySelector('.containerScenario').addEventListener('click', () => {
        const totalDialogs = dialogs.length;
        this.index++;

        let current = dialogs[this.index]

        if (current.choices) {
          this.choiceText = current.choices.text;
          this.choiceQuestion = current.choices.question;
          this.choiceAnswers = current.choices.answers;
          this.choiceBackground = current.choices.background;

          document.querySelector('.choice-modal').classList.remove('hide');
        }

        if(this.index <= (totalDialogs - 1)) {
          this.sentences = dialogs[this.index].sentence;
          this.position = dialogs[this.index].position;
        } else {
            this.index = totalDialogs;
        }

      });
    },

    getChoice() {
      var selected = document.querySelector('.button-primary').textContent;
      document.querySelector('.choice-modal').classList.add('hide');
      console.log('Alternativa selecionada: ', selected);
    }
  }
}
</script>

<style scoped>
  .story {
    font-family: 'Fredoka One', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    position: relative;
    text-align: center;
    line-height: 1.3;
  }

  .story .nav {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .story .nav.hide {
    display: none;
  }

  .story .nav h1 {
    font-weight: 900;
    font-size: 36px;
    color: #F7F536;
    position: absolute;
    top: 20px;
  }

  .story .nav  h2 {
    font-weight: 900;
    font-size: 30px;
    color: #fff;
    margin-bottom: 0;
  }

  .story .nav p {
    text-align: center;
    font-size: 20px;
    max-width: 70%;
  }

  /* choice */
  .hide {
    display: none!important;
  }

  .choice-modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-size: cover;
    background-color: #fff;
    padding: 0 40px;
    font-family: 'Fredoka One', cursive;
    height: 100vh;
    color: #F7F536;
    font-size: 20px;
  }

  .choice-modal .intro {
    color: #fff;
    margin: 0;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .choice-modal .question {
    margin-top: 20%;
  }

  .choice-modal .button-primary {
    display: block;
    background-color: #92CA27;
    color: #fff;
    border-radius: 20px;
    padding: 10px 35px;
    box-shadow: 0 2px 0 2px #165330;
    font-size: 21px;
    font-family: 'Fredoka One', cursive;
    border: 0;
    text-align: center;
    margin-top: 25px;
  }

  /*  */
  #scenario {
    position: relative;
  }

  #scenario img {
    width: 100%;
    height: 100vh;
  }

  #scenario .dialog {
    position: absolute;
    left: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 20px;
    color: #fff;
    font-size: 18px;
    line-height: 1.3;
  }
</style>
