<template>
  <div class="splash">
    <span>&nbsp;</span>
    <h1>
        <img src="../assets/splash_icon.png" width="129" alt="brinca e conta" />
        <span class="title">brinca e conta</span>
    </h1>
    
    <button class="button-primary" @click="defineAccess()">Começar</button>
  </div>
</template>

<script>
    import router from './../router'

    export default {
        name: 'Splash',

        methods: {
            defineAccess() {
                const name = localStorage.getItem('name');
                const age = localStorage.getItem('age');

                if(name && age) {
                    router.push({ path:'home' });
                } else {
                    router.push({ path:'onboarding' });
                }
            }
        }
    }

</script>

<style scoped>
    .splash {
        display: inline-block;
        background-color: #78D6FD;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        color: #000;
        transition: opacity 1s;
    }

    .splash h1 {
        text-align: center;
        font-size: 43px;
        font-family: 'Fredoka One', cursive;
        letter-spacing: -1.07px;
        color: #FFFFFF;
        text-shadow: 0px 2px 1px #65BBDE;
    }

    .splash .title {
        display: block;
        margin-top: 20px;
    }

    .splash .button-primary {
        background-color: #ECBF2B;
        color: #fff;
        border-radius: 20px;
        padding: 10px 35px;
        box-shadow: 0 2px 0 2px #62BBE0;
        font-size: 21px;
        font-family: 'Fredoka One', cursive;
        border: 0;
    }
</style>
