<template>
  <div class="footer">
    <md-bottom-bar md-type="shift">
      <md-bottom-bar-item
        to="/home"
        exact
        id="bottom-bar-item-home"
        md-label="Home"
        md-icon="home"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        to="/teste"
        exact
        id="bottom-bar-item-pages"
        md-label="Perfil"
        md-icon="face"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        to="/story"
        exact
        id="bottom-bar-item-posts"
        md-label="Favoritos"
        md-icon="favorite"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        to="/register"
        exact
        id="bottom-bar-item-favorites"
        md-label="Mais"
        md-icon="more_horiz"
      ></md-bottom-bar-item>
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
</style>
