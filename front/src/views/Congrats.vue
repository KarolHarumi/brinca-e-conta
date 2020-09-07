<template>
  <div class="congrats">
    <h1>Parabéns!</h1>
    <div class="speech-balloon">
      <p>Agora você pode continuar e escolher mais historinhas!</p>
    </div>

    <img src="../assets/care/care_4.png" width="300" alt="Caré" class="care" />
    <div class="action">
      <p>É só clicar aqui embaixo para ver muito mais livros e brincadeiras!</p>
      <router-link to="/home" class="button-primary">Quero mais diversão!</router-link>
    </div>

  </div>
</template>

<style scoped>
  .congrats {
    font-family: 'Fredoka One', cursive;
    font-size: 20px;
    text-align: center;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
  }

  .congrats h1 {
    color: #78D6FD;
  }

  .congrats .care {
    position: relative;
    left: -25%;
    margin-bottom: 125px;
  }

  .congrats .button-primary {
    background-color: #ECBF2B;
    color: #fff;
    border-radius: 20px;
    padding: 10px 35px;
    box-shadow: 0 2px 0 2px #62BBE0;
    font-size: 21px;
    font-family: 'Fredoka One', cursive;
    border: 0;
  }

  .congrats .speech-balloon {
    width: 288px;
    height: 200px;
    background: url("../assets/balloon_left.png") no-repeat center/contain;
    color: #6f6f6f;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    padding: 0 2em;
  }

  .congrats .speech .speech-balloon p {
    margin: 0;
    line-height: 1.3;
  }

  .congrats .action {
    background-color: #78d6fd;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    padding: 2em 1em;
    color: #fff;
    display: flex;
    flex-flow: column;
    min-height: 250px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
  }
</style>
