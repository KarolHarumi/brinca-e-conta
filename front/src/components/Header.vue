<template>
  <div class="header">
    <div class="menu"></div>
    <span class="logo" text="Logo brinca e conta">brinca e conta</span>
    <div class="notifications"></div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      icons: {
        home: {
          label: "Home",
          icon: "home"
        },
        search: {
          label: "Busca",
          icon: "search"
        },
        favorites: {
          label: "Favoritos",
          icon: "favorite"
        },
        profile: {
          label: "Perfil",
          icon: "face"
        }
      }
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #78d6fd !important;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: "Fredoka One", cursive;
  font-size: 24px;
  padding: 1em;
  color: #fff;
  margin-bottom: 0.5em;
}

.header .menu {
  height: 24px;
  width: 24px;
  background-color: #fff;
}

.header .logo {
  text-shadow: 0px 2px 0px #65bbde;
}

.header .notifications {
  height: 24px;
  width: 24px;
  background-color: #fff;
}
</style>
