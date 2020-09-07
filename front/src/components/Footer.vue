<template>
  <div class="footer">
    <md-bottom-bar md-type="shift">
      <md-bottom-bar-item
        v-for="(item, index) in icons"
        :key="index"
        to="/home"
        exact
        :class="{ active: icon === item.icon }"
        :id="`bottom-bar-item-${item.icon}`"
        :md-label="item.label"
        :md-icon="item.icon"
      ></md-bottom-bar-item>
    </md-bottom-bar>
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

<style>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  left: 0;
  right: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}

.footer .md-ripple {
  justify-content: center;
}

.md-bottom-bar-item {
  opacity: 0.6;
}

.md-bottom-bar-item.active {
  opacity: 1;
}

.md-bottom-bar > .md-ripple {
  flex-wrap: nowrap !important;
}

.md-bottom-bar.md-theme-default.md-type-shift {
  background-color: #78d6fd !important;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.md-bottom-bar.md-type-shift .md-bottom-bar-item.md-active {
  min-width: 86px !important;
}
</style>
