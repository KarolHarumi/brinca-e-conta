<template>
  <div class="welcome">
    <div class="content-box">
      <h1>Seja Bem-vindo!</h1>
      <img src="../assets/kids.jpg" alt="" width="500" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <router-link to="/home" class="md-dense md-raised md-primary">
        <md-button class="md-dense md-raised md-primary">Clique aqui para começar</md-button>
      </router-link>
    </div>
  </div>
</template>

<style>
  .welcome {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('../assets/bg_welcome.jpg') no-repeat center/cover;
  }

  .content-box {
    border-radius: 20px;
    width: 80%;
    padding: 20px;
    box-shadow: 2px 2px 2px #ccc;
    background-color: #fff;
  }

  h1 {
    line-height: 1.3;
    margin-bottom: 0;
    font-family: 'Grandstander', cursive;
    font-weight: 900;
    font-size: 31px;

  }
</style>