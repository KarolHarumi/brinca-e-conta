<template>
  <div class="games">
    <p class="intro">Como a indiazinha Naiá é bonita!<br /> Vamos enfeita-la com as flores que ela tanto gosta!</p>

    <div class="challenge">
      <p>Arraste as flores até a Naiá</p>

      <div class="container-elements">
        <VueDragResize :isActive="true" :w="50" :h="50" :isResizable="false" :x="20" :y="0">
            <img src="../assets/vitoria-regia/flower.png" width="50" alt="Flor" />
        </VueDragResize>

        <VueDragResize :isActive="true" :w="50" :h="50" :isResizable="false" :x="20" :y="100">
            <img src="../assets/vitoria-regia/flower.png" width="50" alt="Flor" />
        </VueDragResize>

        <VueDragResize :isActive="true" :w="50" :h="50" :isResizable="false" :x="140" :y="70">
            <img src="../assets/vitoria-regia/flower.png" width="50" alt="Flor" />
        </VueDragResize>

        <VueDragResize :isActive="true" :w="50" :h="50" :isResizable="false" :x="260" :y="150">
            <img src="../assets/vitoria-regia/flower.png" width="50" alt="Flor" />
        </VueDragResize>

        <VueDragResize :isActive="true" :w="50" :h="50" :isResizable="false" :x="250" :y="20">
            <img src="../assets/vitoria-regia/flower.png" width="50" alt="Flor" />
        </VueDragResize>
      </div>
    </div>

    <span class="button-primary" @click="sendAnswer('correct')">Terminei!</span>

    <div class="success hide">
      <h2>Muito bem!</h2>
      <p>Você conseguiu ajudar a indiazinha Naiá!</p>
      <router-link to="/congrats" class="button-primary">Quero mais</router-link>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueDragResize from 'vue-drag-resize'

Vue.component('vue-drag-resize', VueDragResize)

export default {

  components: {
      VueDragResize
  },

  methods: {

    sendAnswer(answer) {
      const success = document.querySelector('.success');

      if(answer === 'correct') {
        success.classList.remove('hide');
      }
    }
  }
}

</script>

<style scoped>
  .games .hide {
    display: none;
  }

  .games {
    font-family: 'Fredoka One', cursive;
    background: url('../assets/vitoria-regia/bg_game.png') no-repeat 0 0/cover;
    height: 100vh;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding: 15% 20px 0;
    line-height: 1.3;
  }

  .games .intro {
    margin: 0;
  }

  .games .challenge {
    font-size: 20px;
    color: #F7F536;
    margin: 80px auto 0;
    max-width: 90%;
  }

  .challenge .container-elements {
    position: relative;
    height: 170px;
  }

  .games .button-primary {
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

  .games > .button-primary {
    position: absolute;
    bottom: 8%;
    left: 20px;
    right: 20px;
  }

  /* Success */
  .games .success {
    background: url('../assets/vitoria-regia/bg_welldone.png') no-repeat 0 0/cover;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 50px;
  }

  .games .success h2 {
    color: #F7F536;
    font-size: 36px;
    height: 136px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }
</style>
