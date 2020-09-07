<template>
  <div class="header">
    <div class="menu"><md-icon>menu</md-icon></div>
    <h1 class="logo" text="Logo brinca e conta">brinca e conta</h1>
    <div class="notifications"><md-icon>notifications</md-icon></div>
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
}

.header .logo {
  text-shadow: 0px 2px 0px #65bbde;
  font-size: inherit;
  margin: 0;
}

.header .menu {
  height: 24px;
  width: 24px;
}

.header .notifications {
  height: 24px;
  width: 24px;
}

.header .menu i,
.header .notifications i {
  color: #fff !important;
}
</style>
