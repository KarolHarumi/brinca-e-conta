<template>
  <div class="review" @click="openThanks()">
    <h1>Parabéns {{ name }}!</h1>
    <p>Terminamos essa grande<br /> aventura juntos!</p>

    <p class="balloon">Você gostou dessa história?<br /> É só tocar o emoji!</p>

    <div class="thanks hide">
      <p class="balloon">Obrigada pela resposta! Vamos nos divertir nos mini-games!</p>
      <router-link to="/game-first" class="button-primary">Quero os joguinhos!</router-link>
    </div>
  </div>
</template>

<script>
export default {

  data: function() {
      return {
        name: `${localStorage.getItem('name')}`,
      }
  },

  methods: {
    openThanks() {
      document.querySelector('.thanks').classList.remove('hide');
    }
  }

}
</script>

<style scoped>
  .review .hide {
    display: none;
  }

  .review {
    font-family: 'Fredoka One', cursive;
    background: url('../assets/bg_review.png') no-repeat 0 0/cover;
    height: 100vh;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .review .balloon {
    color: #6F6F6F;
    position: absolute;
    height: 110px;
    width: 200px;
    line-height: 1.3;
  }

  .review h1 {
    font-weight: 900;
    font-size: 36px;
    color: #F7F536;
    padding: 40px 20px 0;
    margin: 0;
  }

  .review > .balloon {
    top: 255px;
    left: 50px;
  }

  /* thanks */
  .review .thanks {
    background: url('../assets/bg_review_thanks.png') no-repeat 0 0/cover;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .review .thanks .balloon {
    top: 160px;
    left: 145px;
  }

  .review .button-primary {
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
    position: absolute;
    bottom: 5%;
    left: 20px;
    right: 20px;
  }

  .review .button-primary:active,
  .review .button-primary:hover {
    background-color: #2F7B23;
  }
</style>
