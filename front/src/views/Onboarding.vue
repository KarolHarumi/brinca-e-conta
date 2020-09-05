<template>
  <div class="onboarding">
    <div class="step-1">
      <div class="speech-balloon">
        <p>Olá!! Que bom ter você por aqui!</p>
        <p>
          Me chamo xxxx e sou o seu parceiro nesse mundo fantástico da
          imaginação!
        </p>
        <md-button class="md-raised next">
          Avançar <md-icon>send</md-icon>
        </md-button>
      </div>
      <md-icon class="icon md-size-5x">sentiment_satisfied_alt</md-icon>
    </div>

    <div class="step-2 hide">
      <div class="speech-balloon">
        <p>Me conta mais sobre você!</p>
      </div>
      <md-icon class="icon md-size-5x">sentiment_satisfied_alt</md-icon>

      <md-field>
        <label>Como você quer ser chamado?</label>
        <md-input id="userName"></md-input>
      </md-field>

      <md-button class="md-raised next">
        Avançar <md-icon>send</md-icon>
      </md-button>
    </div>

    <div class="step-3 hide">
      <div class="speech-balloon">
        <p>
          Você sabia que o seu aniversário<br />
          é uma data mágica?
        </p>
      </div>
      <md-icon class="icon md-size-5x">sentiment_satisfied_alt</md-icon>

      <md-field>
        <label>Quantos anos você tem?</label>
        <md-input id="userAge"></md-input>
      </md-field>

      <md-button class="md-raised next">
        Avançar <md-icon>send</md-icon>
      </md-button>
    </div>

    <div class="step-4 hide">
      <div class="container-stories">
        <h2>Escolha nossa história!</h2>
        <div class="carousel-stories">
          <router-link to="/story/123" class="cover">
            <img src="../assets/books/cover_mock.png" alt="" width="250" />
            <span class="story-name">História 1</span>
          </router-link>

          <router-link to="/story/123" class="cover">
            <img src="../assets/books/cover_mock.png" alt="" width="250" />
            <span class="story-name">História 1</span>
          </router-link>

          <router-link to="/story/123" class="cover">
            <img src="../assets/books/cover_mock.png" alt="" width="250" />
            <span class="story-name">História 1</span>
          </router-link>
        </div>
      </div>

      <div class="speech-balloon">
        <p>Eba! Estamos muito perto de entrar no mundo da conta-contos!</p>
        <p>
          Escolha uma dessas historinhas para a gente começar nossa aventura!
        </p>
      </div>

      <md-icon class="icon md-size-5x">sentiment_satisfied_alt</md-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stepsNav() {
      // step 1
      document.querySelector(".step-1 .next").addEventListener("click", () => {
        document.querySelector(".step-2").classList.remove("hide");
        document.querySelector(".step-1").classList.add("hide");
      });

      // step 2
      document.querySelector(".step-2 .next").addEventListener("click", () => {
        let name = document.getElementById("userName").value;

        if (name !== "") {
          localStorage.setItem("name", name);
          document.querySelector(".step-3").classList.remove("hide");
          document.querySelector(".step-2").classList.add("hide");
        }
      });

      // step 3
      document.querySelector(".step-3 .next").addEventListener("click", () => {
        let age = document.getElementById("userAge").value;

        if (age !== "") {
          localStorage.setItem("age", age);
          document.querySelector(".step-4").classList.remove("hide");
          document.querySelector(".step-3").classList.add("hide");
        }
      });
    },
  },

  mounted() {
    this.stepsNav();
  },
};
</script>

<style scoped>
.hide {
  display: none !important;
}

.onboarding {
  display: inline-block;
  background-color: #43aa8b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #000;
  transition: opacity 1s;
  text-align: center;
}

.onboarding .speech-balloon {
  padding: 20px 65px;
  min-width: 300px;
  height: 230px;
  background: url("../assets/balloon_01.png") no-repeat center/contain;
}

.splash .icon {
  margin-bottom: 20px;
  color: #000;
}

.container-stories .carousel-stories {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  margin-bottom: 20px;
  padding: 0 10px;
}

.carousel-stories .cover {
  border: 1px solid;
  width: 33.33%;
  position: relative;
}

.cover + .cover {
  margin-left: 10px;
}

.carousel-stories .cover .story-name {
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
}
</style>
