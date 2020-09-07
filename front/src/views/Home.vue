<template>
  <div class="home">
    <Header />
    <Footer :icon="'home'" />

    <div class="profile">
      <div class="container">
        <div class="avatar"></div>
        <div class="greetings">
          <h2 class="welcome">
            Bem vindo(a), <span class="user-name">{{ name }}</span>
          </h2>
          <p class="disclaimer">
            Aqui você pode escolher qual é a sua próxima aventura! Vamos juntos?
          </p>
        </div>
      </div>
    </div>

    <div class="stories">
      <section class="custom">
        <h3 class="title">Historinhas para você</h3>
        <div class="container -horizontal-scroll">
          <button class="story-card -boitata"></button>
          <button class="story-card -boto-rosa"></button>
        </div>
      </section>
      <section class="finished">
        <h3 class="title">Seus livros lidos</h3>
        <router-link to="/story" class="container -horizontal-scroll">
          <button class="story-card -vitoria-regia-finished"></button>
        </router-link>
      </section>
      <section class="categories">
        <h3 class="title">Categorias</h3>
        <div class="container">
          <button class="category-card -tales"></button>
          <button class="category-card -sci-fi"></button>
          <button class="category-card -fantasy"></button>
          <button class="category-card -legends-myths"></button>
          <button class="category-card -juvenile"></button>
          <button class="category-card -mystery-police-terror"></button>
        </div>
      </section>
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
.home {
  font-family: "Fredoka One", cursive;
  font-size: 16px;
  margin-bottom: 2em;
}

.home .profile {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 2em;
}

.profile .container {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1.8em 0;
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

.home .stories {
  padding: 0.8em 2em 2em 2em;
}

.stories .title {
  color: #6f6f6f;
  font-size: 1em;
  margin: 1.2em 0;
}

.stories .container {
  padding: 0 0 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.stories .container.-horizontal-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.stories .story-card {
  min-width: 243px;
  height: 82px;
  background-color: #102f11;
  box-shadow: 0px 5px 0px 0px #2f7b23;
  margin: 0 1em;
  border-radius: 13px;
  position: relative;
}

.stories .finished .story-card {
  /* opacity: 0.7; */
  margin-bottom: 30px;
}

.stories .story-card.-boitata {
  background: url("../assets/story-cards/boitata.png") no-repeat top/cover;
}

.stories .story-card.-boto-rosa {
  background: url("../assets/story-cards/boto_rosa.png") no-repeat top/cover;
}

.stories .story-card.-vitoria-regia-finished {
  background: url("../assets/story-cards/vitoria_regia_finished.png") no-repeat
    top/cover;
}

.stories .finished .story-card:after {
  content: "Completo";
  position: absolute;
  bottom: -24px;
  text-align: right;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: -1;
  background-color: #2f7b23;
  width: 100%;
  height: 30px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  font-family: "Fredoka One", cursive;
  font-size: 0.9em;
  color: #f7f536;
  padding: 0.5em 1.3em;
}

.stories .categories .category-card {
  width: 82px;
  height: 82px;
  background-color: #f0faff;
  box-shadow: 0px 3px 0px 0px #78d6fd;
  margin: 1em 0;
  border-radius: 20px;
}

.stories .categories .category-card.-tales {
  background: url("../assets/categories/tales.png") no-repeat top/cover;
}

.stories .categories .category-card.-sci-fi {
  background: url("../assets/categories/sci-fi.png") no-repeat top/cover;
}

.stories .categories .category-card.-fantasy {
  background: url("../assets/categories/fantasy.png") no-repeat top/cover;
}

.stories .categories .category-card.-legends-myths {
  background: url("../assets/categories/legends_myths.png") no-repeat top/cover;
}

.stories .categories .category-card.-juvenile {
  background: url("../assets/categories/juvenile.png") no-repeat top/cover;
}

.stories .categories .category-card.-mystery-police-terror {
  background: url("../assets/categories/mystery_police_terror.png") no-repeat
    top/cover;
}
</style>
