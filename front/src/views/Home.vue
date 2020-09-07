<template>
  <div class="home">
    <Header />
    <Footer :icon="'home'" />

    <div class="profile">
      <div class="container">
        <div class="avatar"></div>
        <div class="greetings">
          <p class="welcome">
            Bem vindo, <span class="user-name">{{ name }}</span>
          </p>
          <span class="disclaimer">
            Aqui você pode escolher qual é a sua próxima aventura! Vamos juntos?
          </span>
        </div>
      </div>
    </div>

    <div class="cards-container">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Lenda da Vitória Régia</div>
            <div class="md-subhead">Nome do Autor</div>
          </md-card-header-text>

          <md-card-media md-big>
            <img src="../assets/books/cover_mock.png" alt="Capa" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story" class="md-dense md-raised md-primary">
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
            <img src="../assets/books/cover_mock.png" alt="Capa" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story" class="md-dense md-raised md-primary">
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
            <img src="../assets/books/cover_mock.png" alt="Capa" />
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="/story" class="md-dense md-raised md-primary">
            <md-button>Ler</md-button>
          </router-link>
          <md-button>Favoritar</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  computed: {
    name() {
      return localStorage.getItem("name");
    }
  }
};
</script>

<style>
.home .profile {
  display: flex;
  flex-flow: column;
  align-items: center;
  font-family: "Fredoka One", cursive;
  padding: 0 2em;
}

.profile .container {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2em 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d8d9d9;
}

.profile .avatar {
  border-radius: 50%;
  width: 77px;
  height: 77px;
  background: #ffd753 url(../assets/care/care_2.png) no-repeat 15% -60%/104px;
}

.profile .greetings {
  text-align: center;
}

.profile .greetings .welcome {
  font-size: 24px;
  color: #78d6fd;
  margin: 0.6em 0;
}

.profile .greetings .welcome .user-name {
  color: #ecbf2c;
}

.profile .greetings .disclaimer {
  color: #6f6f6f;
  font-size: 12px;
  margin: 0 2em;
}

.cards-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
}

.md-card {
  margin-bottom: 5%;
}

.md-card:last-child {
  margin-bottom: 25%;
}
</style>
