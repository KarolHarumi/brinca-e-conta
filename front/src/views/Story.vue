<template>
  <div class="story">
    <!--<div class="choice-modal hide">
      <p>Que susto! Ainda bem que essa plantinha ajudou a Naiá a chegar a superfície!</p>

      <div class="question">
        <p>Vamos também ajudar a Naiá e escolher onde a planta pode deixar a indiazinha em segurança!</p>
        <span class="button-primary" @click="getChoice()">Na grama verdinha</span>
        <span class="button-primary" @click="getChoice()">Ao lado de uma árvore florida</span>
      </div>
    </div>-->

    <div class="nav" @click="startStory()">
      <h1>Lenda da Vitória Régia</h1>
      <h2>Olá {{ name }}!</h2>
      <p>Preparada para deixar nossa historinha ainda mais divertida?</p>
    </div>
  
    <div id="containerScenario">
      <img :src="require(`../assets/vitoria-regia/story_vr_${index}.png`)" alt="Lenda da Vitória Régia" />
      <span class="dialog hide" :style="(`${position}: 20px`)">
        <p>{{ sentences }}</p>
      </span>
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
        position: 'bottom'
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
          hasChoice: false
        },
        { 
          sentence: 'Há quem diga que muitos anos\n atrás um forte indiozinho havia se\n transformado em estrela.',
          hasChoice: false,
          position: 'top'
        },
        {
          sentence: 'E esta estrela foi crescendo,\n crescendo dando origem a Lua.',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: 'Alguns não acreditam nessa história,\n mas outros sim, como a\n indiazinha Naiá.',
          hasChoice: false,
          position: 'top'
        },
        {
          sentence: 'Naiá era uma amante da natureza.\n Cuidava de rosas e plantas com\n muito carinho e amor. E adorava se\n enfeitar com elas.',
          hasChoice: true,
          choice: {
            text: 'Vamos ajudar a indiazinha Naiá!',
            question: 'Por qual caminho ela precisa ir pra ver a luz da lua?',
            alternatives: ['Na beira do rio', 'Dentro da floresta']
          },
          position: 'top'
        },
        {
          sentence: 'Ela sempre foi conhecida em sua\n aldeia por ser apaixonada pela\n luz da lua. Mal podia esperar que o sel se retirasse para que a noite chegasse e então ela pudesse contemplar a luz do luar.',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: 'Até que em um dia de lua cheia ela\n notou de sua oca que o brilho da\n lua estava mais intenso e saiu\n para contempla-lo.',
          hasChoice: true,
          choice: {
            text: 'Vamos ajudar a indiazinha Naiá!',
            question: 'Por qual caminho ela precisa ir pra ver a luz da lua?',
            alternatives: ['Na beira do rio', 'Dentro da floresta']
          },
          position: 'bottom'
        },
        {
          sentence: 'Chegando até a beira do rio avistou\n um facho de luz sobre a água. Nesse momento se apoiou sobre\n uma pedra para chegar mais perto.',
          hasChoice: false,
          position: 'top'
        },
        {
          sentence: 'Foi aí que viu a figura de um belo\n índio refletido na água vindo da\n Luz da Lua.',
          hasChoice: true,
          choice: {
            text: 'Nossa, a indiazinha Naiá é bem curiosa e acabou vendo o rosto de alguém muito bonito!',
            question: 'Chegou a hora de escolher! O que a Naiá vai fazer?',
            alternatives: ['Ela fica encantada com o indiozinho!', 'Ela vai tentar dar um beijo na imagem']
          },
          position: 'top'
        },
        {
          sentence: 'A indiazinha se encanta pelo índio,\n e num ato de impulso, tenta dar\n um beijo na imagem refletida.',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: 'Nesse momento ela se desequilibra,\n cai no rio e vai afundando,\n desacordada.',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: 'Até que um facho de luz atinge\n algumas plantas, raízes e algas do\n rio que despertam e se entrelaçam\n envolvendo Naiá.',
          hasChoice: true,
          choice: {
            text: 'Que susto! Ainda bem que essa plantinha ajudou a Naiá a chegar a superfície!',
            question: 'Vamos também ajudar a Naiá e escolher onde a planta pode deixar a indiazinha em segurança!',
            alternatives: ['Na grama verdinha', 'Ao lado de uma árvore florida']
          },
          position: 'top'
        },
        {
          sentence: 'E uma planta formada por uma grande bolha em\n forma de círculo e com bordas levantadas\n começou a erguer Naiá até a superfície.',
          hasChoice: true,
          position: 'bottom'
        },
        {
          sentence: 'Esta planta é conhecida como\n Vitória Régia. Desde então, a\n indiazinha passou a ser chamada\n pelo nome da famosa planta\n amazônica.',
          hasChoice: false,
          position: 'top'
        },
        {
          sentence: 'Flutuando nas beiras dos rios\n sobre uma grande raíz redonda.\n A Vitória Régia é muito caridosa e distribui\n plantas para os animais da floresta.',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: 'O suco extraído de suas raízes é\n utilizado como tintura negra para\n os cabelos e durante a noite...',
          hasChoice: false,
          position: 'bottom'
        },
        {
          sentence: '...flores\n brancas e perfumadas florescem de sua\n raíz enquanto contempla a luz da\n lua e o brilho das estrelas.',
          hasChoice: false,
          position: 'top'
        }
      ];

      document.querySelector('body').addEventListener('click', () => {
        const totalDialogs = dialogs.length;
        this.index++;

        // if(dialogs[this.index].hasChoice) {
        //   console.log('haschoice');
        //   document.querySelector('.choice-modal').classList.remove('hide');
        // }

        if(this.index <= (totalDialogs - 1)) {
          this.sentences = dialogs[this.index].sentence;
          this.position = dialogs[this.index].position;
        } else {
            this.index = totalDialogs;
        }
      
      });
    }

    // getChoice() {
    //   var selected = document.querySelector('.button-primary').textContent;
    //   document.querySelector('.choice-modal').classList.add('hide');
    //   console.log('selected', selected);
    // }
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


  /* modal choice */
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

  #containerScenario {
    position: relative;
  }

  #containerScenario img {
    width: 100%;
    height: 100vh;
  }

  #containerScenario .dialog {
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