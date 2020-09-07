<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
}

input {
  outline: none;
}

button {
  border: none;
  cursor: pointer;
}
</style>
