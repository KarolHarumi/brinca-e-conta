<template>
  <div class="onboarding">
    <div class="step" @click="stepsNav">
      <div class="speech" :class="currentElement.className">
        <div class="speech-balloon">
          <p v-html="currentElement.text"></p>
        </div>
      </div>
      <div class="action" v-if="showAction">
        <label>{{ currentElement.action.label }}</label>
        <slot v-if="stepsCount < flow.length - 1">
          <input :id="currentElement.action.propertyName" />
          <button class="next">Enviar</button>
        </slot>
        <slot v-else>
          <button class="stories story-1"></button>
          <button class="stories story-2"></button>
          <button class="stories story-3"></button>
        </slot>
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
        { text: "Olá! Que bom ter você por aqui!", className: "care-1" },
        {
          text:
            'Me chamo <span style="color: #81d152">Caré</span> e serei seu parceiro nesse mundo fantástico da imaginação!',
          className: "care-1"
        },
        {
          text: "Pra começar, me conta mais sobre você!",
          className: "care-2",
          action: {
            label: "Como você quer ser chamado(a)?",
            propertyName: "name"
          }
        },
        {
          text: "Você sabia que o seu aniversário é uma data mágica?",
          className: "care-3",
          action: { label: "Quantos anos você tem?", propertyName: "age" }
        },
        {
          text:
            "Eba! Estamos muito perto de entrar no mundo da brinca e conta!",
          className: "care-4"
        },
        {
          text: "Vamos começar nossa aventura!",
          className: "care-5",
          action: { label: "Escolha uma história", propertyName: "story" }
        }
      ]
    };
  },
  computed: {
    currentElement() {
      return this.flow[this.stepsCount];
    },
    showAction() {
      return this.currentElement.action;
    }
  },
  methods: {
    stepsNav(e) {
      const action = e.path.find(item =>
        item.classList
          ? Array.from(item.classList).find(a => /next/.test(a))
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
    }
  }
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

.care-1 {
  background: #fff url("../assets/care/care.png") no-repeat left bottom/250px;
}

.care-2 {
  background: #fff url("../assets/care/care_2.png") no-repeat 0% 191%/250px;
}

.care-3 {
  background: #fff url("../assets/care/care_3.png") no-repeat -20% 2100%/240px;
}

.care-4 {
  background: #fff url("../assets/care/care_4.png") no-repeat -300% bottom/335px;
}

.care-5 {
  background: #fff url("../assets/care/care_5.png") no-repeat -145% 240%/250px;
}

.onboarding .speech .speech-balloon {
  width: 288px;
  height: 200px;
  background: url("../assets/balloon_left.png") no-repeat center/contain;
  color: #6f6f6f;
  position: absolute;
  bottom: 410px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  padding: 0 2em;
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

.onboarding .action button {
  border: none;
}

.onboarding .action .next {
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

.onboarding .action .stories {
  font-size: 22px;
  padding: 1.5em;
  border-radius: 50px !important;
  box-shadow: 0px 4px 0px 0px #62bbe0;
  margin: 0.3em 0;
  width: 100%;
}

.onboarding .action .stories.story-1 {
  background: url("../assets/cta_vitoria_regia.png") no-repeat top/cover;
}

.onboarding .action .stories.story-2 {
  background: url("../assets/cta_boitata.png") no-repeat top/cover;
}

.onboarding .action .stories.story-3 {
  background: url("../assets/cta_boto_rosa.png") no-repeat top/cover;
}
</style>
