<script setup>
import {toggleTheme} from "../../services/ThemeService.js";
</script>

<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span class="is-size-4 has-text-weight-bold">
            Ten-Codes
          </span>
        </router-link>
      </div>

      <div class="navbar-menu">
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