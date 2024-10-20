<script setup>
import {toggleTheme} from "../../services/ThemeService.js";
import {ref} from "vue";
import EventBus from "../../plugins/EventBus.js";

const showMenu = ref(false)

EventBus.$on('hideMenu', () => {
  showMenu.value = false
})
</script>

<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span class="is-size-4 has-text-weight-bold">
            Ten-Codes
          </span>
        </router-link>

        <a @click="showMenu = !showMenu" role="button"
           class="navbar-burger has-text-dark-20" :class="{ 'is-active': showMenu }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showMenu }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <router-link class="navbar-item" to="/search">
            Search
          </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button @click="toggleTheme" class="button is-primary is-light">
            Theme
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>