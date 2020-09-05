<template>
  <div class="splash">
    <h1><md-icon class="icon md-size-3x">face</md-icon><br /> Brinca e Conta</h1>
  </div>
</template>

<script>
    import router from './../router'
    export default {
        name: 'Splash',
    }

    setTimeout(function(){
        document.querySelector('.splash').setAttribute('style', 'opacity: 0');
    }, 2000);

    setTimeout(function(){
        // TODO: colocar condicao se for primeiro acesso envia para onboarding / se nao envia para home
        router.push({ path:'onboarding' });
    }, 3000);
</script>

<style scoped>
    .splash {
        display: inline-block;
        background-color: #f9c74f;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        color: #000;
        transition: opacity 1s;
    }

    .splash h1 {
        text-align: center;
    }

    .splash .icon {
        margin-bottom: 20px;
        color: #000;
    }
</style>
