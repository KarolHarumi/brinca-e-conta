<template>
  <div class="onboarding">
    <div class="steps step-1">
        <div class="speech-balloon">
            <p>Olá! Que bom ter você por aqui!</p>
            <md-button class="next">Continuar ></md-button>
        </div>
    </div>

    <div class="steps step-2 hide">
        <div class="speech-balloon">
            <p>Me chamo <span class="char-name">Caré</span> e serei seu parceiro nesse mundo fantástico da imaginação!</p>
            <md-button class="next">Continuar ></md-button>
        </div>
    </div>

    <div class="steps step-3 hide">
        <div class="speech-balloon">
            <p>Me conta mais sobre você! </p>
            <md-field>
                <label>Como você quer ser chamado?</label>
                <md-input id="userName"></md-input>
            </md-field>

            <md-button class="next">Continuar ></md-button>
        </div>
        
    </div>

    <div class="steps step-4 hide">
        <div class="speech-balloon">
            <p>Você sabia que o seu aniversário é uma data mágica?</p>
            <md-field>
                <label>Quantos anos você tem?</label>
                <md-input id="userAge"></md-input>
            </md-field>

            <md-button class="next">Continuar ></md-button>
        </div>
    </div>

    <div class="steps step-5 hide">
        <div class="speech-balloon">
            <p>Eba! Estamos quase lá!</p>
            <p>Escolha uma dessas historinhas para a gente começar nossa aventura!</p>
        </div>

        <div class="container-stories">
            <h2>Escolha nossa história!</h2>
            <div class="carousel-stories">
                <router-link to="/story/123" class="cover">
                    <img src="../assets/books/cover_mock.png" alt="" width="250" />
                    <span class="story-name">Lenda da Vitória Régia</span>
                </router-link>

                <router-link to="/story/123" class="cover">
                    <img src="../assets/books/cover_mock.png" alt="" width="250" />
                    <span class="story-name">Lenda da Vitória Régia</span>
                </router-link>

                <router-link to="/story/123" class="cover">
                    <img src="../assets/books/cover_mock.png" alt="" width="250" />
                    <span class="story-name">Lenda da Vitória Régia</span>
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

    export default {
        methods:{

          stepsNav() {
            // step 1
            document.querySelector('.step-1 .next').addEventListener('click', () => {
                document.querySelector('.step-2').classList.remove('hide');
                document.querySelector('.step-1').classList.add('hide');
            })

            // step 2
            document.querySelector('.step-2 .next').addEventListener('click', () => {
                document.querySelector('.step-3').classList.remove('hide');
                document.querySelector('.step-2').classList.add('hide');
            })

            // step 3
            document.querySelector('.step-3 .next').addEventListener('click', () => {
                let name = document.getElementById('userName').value;

                if(name !== "") {
                    localStorage.setItem('name', name);
                    document.querySelector('.step-4').classList.remove('hide');
                    document.querySelector('.step-3').classList.add('hide');
                }

            })

            // step 4
            document.querySelector('.step-4 .next').addEventListener('click', () => {
                let age = document.getElementById('userAge').value;

                if(age !== "") {
                    localStorage.setItem('age', age);
                    document.querySelector('.step-5').classList.remove('hide');
                    document.querySelector('.step-4').classList.add('hide');
                }
            })
          }

        },

        mounted(){
            this.stepsNav();
        }
    }

</script>

<style scoped>
    .hide {
        display: none!important;
    }

    .onboarding {
        display: inline-block;
        width: 100%;
        min-height: 100vh;
        color: #000;
        transition: opacity 1s;
        text-align: center;
        background: #fff url(/img/care.acefbf7e.png) no-repeat left bottom/250px;
    }

    .onboarding .steps {
        display: inline-block;
        width: 300px;
    }

    .onboarding .speech-balloon {
        width: 288px;
        height: 230px;
        font-size: 18px;
        background: url(/img/balloon_01.5c7766d5.png) no-repeat center/contain;
        color: #6F6F6F;
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

    .onboarding .speech-balloon p {
        margin: 0;
        line-height: 1.3;
        font-family: 'Fredoka One', cursive;
    }

    .onboarding .speech-balloon .next,
    .onboarding .char-name {
        color: #81D152;
        font-family: 'Fredoka One', cursive;
    }

    .container-stories {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .container-stories > h2 {
        font-family: 'Fredoka One', cursive;
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

    .md-field {
        margin-bottom: 0;
    }
</style>