<template>
  <div class="footer">
    <md-bottom-bar md-type="shift">
      <md-bottom-bar-item to="/home" exact id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
      <md-bottom-bar-item to="/home" exact id="bottom-bar-item-search" md-label="Busca" md-icon="search"></md-bottom-bar-item>
      <md-bottom-bar-item to="/home" exact id="bottom-bar-item-favorite" md-label="Favoritos" md-icon="favorite"></md-bottom-bar-item>
      <md-bottom-bar-item to="/home" exact id="bottom-bar-item-profile" md-label="Perfil" md-icon="face"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 10;
    left: 0;
    right: 0;
  }

  .footer .md-ripple {
    justify-content: center;
  }

  .md-bottom-bar > .md-ripple {
    flex-wrap: nowrap!important;
  }

  .md-bottom-bar.md-theme-default.md-type-shift {
    background-color: #78D6FD!important;
  }

</style>
