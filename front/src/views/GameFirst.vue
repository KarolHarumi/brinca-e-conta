<template>
  <div class="games">
    <p class="intro">Na nossa historinha, alguém se transformou na Lua e brilha muito no céu!</p>

    <div class="question">
        <p>Qual personagem que virou a Lua?</p>
        <span class="button-primary" @click="sendAnswer('wrong')">Naiá</span>
        <span class="button-primary" @click="sendAnswer('correct')">Indiozinho</span>
      </div>

    <div class="success hide">
      <p>Uhuu! acertou!!</p>
      <p>E a brincadeira continua!</p>
      <router-link to="/story" class="link">&#60; Quero voltar</router-link>
      <router-link to="/game-second" class="link">Continuar &#62;</router-link>
    </div>

    <div class="error hide">
      <p>Não desanima amiguinho, você pode voltar e responder de novo!</p>
      <router-link to="/story" class="link">&#60; Quero voltar</router-link>
      <router-link to="/game-second" class="link">Continuar &#62;</router-link>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    sendAnswer(answer) {
      const success = document.querySelector('.success');
      const error = document.querySelector('.error');

      if(answer === 'correct') {
        error.classList.add('hide');
        success.classList.remove('hide');
      } else {
        success.classList.add('hide');
        error.classList.remove('hide');
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
    background: url('../assets/vitoria-regia/bg.png') no-repeat 0 0/cover;
    height: 100vh;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding: 40px 40px 0 40px;
    line-height: 1.3;
  }

  .games .intro {
    margin: 0;
  }

  .games .question {
    font-size: 20px;
    color: #F7F536;
    padding: 40px 20px 0;
    margin: 5% auto 0;
    max-width: 90%;
  }

  .games .question p {
    margin-bottom: 40px;
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

  .games .button-primary:active,
  .games .button-primary:hover {
    background-color: #2F7B23;
  }

  .games .link {
    font-size: 18px;
    color: #92CA27;
  }

  .games .link + .link {
    margin-left: 40px;
  }

  .games .success,
  .games .error {
    margin-top: 50px;
  }
</style>
