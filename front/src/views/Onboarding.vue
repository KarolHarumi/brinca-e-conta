<template>
  <div class="onboarding">
    <div class="step" @click="stepsNav">
      <div class="speech">
        <div class="speech-balloon">
          <p v-html="currentElement.text"></p>
        </div>
      </div>
      <div class="action" v-if="showAction">
        <label>{{ currentElement.action.label }}</label>
        <input :id="currentElement.action.propertyName" />
        <button class="next">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepsCount: 0,
      flow: [
        { text: "Olá! Que bom ter você por aqui!" },
        {
          text:
            'Me chamo <span style="color: #81d152">Caré</span> e serei seu parceiro nesse mundo fantástico da imaginação!',
        },
        {
          text: "Pra começar, me conta mais sobre você!",
          action: {
            label: "Como você quer ser chamado(a)?",
            propertyName: "name",
          },
        },
        {
          text: "Você sabia que o seu aniversário é uma data mágica?",
          action: { label: "Quantos anos você tem?", propertyName: "age" },
        },
        {
          text:
            "Eba! Estamos muito perto de entrar no mundo da brinca e conta!",
        },
        {
          text: "Vamos começar nossa aventura!",
          action: { label: "Escolha uma história", propertyName: "story" },
        },
      ],
    };
  },
  computed: {
    currentElement() {
      return this.flow[this.stepsCount];
    },
    showAction() {
      return this.currentElement.action;
    },
  },
  methods: {
    stepsNav(e) {
      const action = e.path.find((item) =>
        item.classList
          ? Array.from(item.classList).find((a) => /next/.test(a))
          : null
      );

      if (!action && document.querySelector(".next")) return;

      if (action) {
        const input = document.getElementById(
          this.currentElement.action.propertyName
        );

        if (input && !input.value.trim()) return;

        localStorage.setItem(
          this.currentElement.action.propertyName,
          input.value.trim()
        );
        input.value = "";
      }

      this.stepsCount += 1;
    },
  },
};
</script>

<style scoped>
.hide {
  display: none !important;
}

.onboarding {
  display: inline-block;
  width: 100%;
  min-height: 100vh;
  transition: opacity 1s;
  text-align: center;
  background: #fff url(/img/care.acefbf7e.png) no-repeat left bottom/250px;
  font-size: 18px;
  font-family: "Fredoka One", cursive;
}

.onboarding .step {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-flow: column wrap;
}

.onboarding .speech {
  flex-grow: 1;
  justify-content: center;
  display: flex;
}

.onboarding .speech .speech-balloon {
  width: 288px;
  height: 230px;
  background: url(/img/balloon_01.5c7766d5.png) no-repeat center/contain;
  color: #6f6f6f;
  position: absolute;
  bottom: 410px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  padding: 0 25px;
}

.onboarding .speech .speech-balloon p {
  margin: 0;
  line-height: 1.3;
}

.onboarding .action {
  background-color: #78d6fd;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  padding: 2em;
  color: #fff;
  display: flex;
  flex-flow: column;
  min-height: 250px;
  justify-content: space-between;
  align-items: center;
}

.onboarding .action label {
  font-size: 24px;
}

.onboarding .action input {
  padding: 0.6em;
  border: none;
  font-family: inherit;
  color: #6f6f6f;
  box-shadow: 0px 3px 0px 0px #62bbe0;
  font-size: 1em;
  width: 100%;
}

.onboarding .action input:focus {
  outline: none;
}

.onboarding .action .next {
  border: navajowhite;
  background-color: #ecbf2b;
  font-family: inherit;
  box-shadow: 0px 3px 0px 0px #c19c25;
  font-size: 22px;
  color: inherit;
  padding: 0.5em 2em;
}
.onboarding .action input,
.onboarding .action .next {
  border-radius: 30px;
}

.container-stories {
  position: absolute;
  bottom: 0;
  left: 0;
}

.container-stories > h2 {
  color: #272425;
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
