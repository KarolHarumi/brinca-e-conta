<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/register">Cadastre-se</router-link>
    </div>

    <HelloWorld msg="Estante Encantada"/>

    <div class="cards-container">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa">
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story/123" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .home {
    padding: 0 5%;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
  }

  .md-card {
    width: 33.33%;
  }

  .md-card + .md-card {
    margin-left: 2%;
  }
</style>