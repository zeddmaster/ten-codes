<script setup>
import {onMounted} from "vue";
import {initTheme} from "./services/ThemeService.js";
import Navbar from "./components/Layout/Navbar.vue";

onMounted(() => {
  initTheme()
})

</script>

<template>
  <Navbar/>
  <main>
    <div class="container pt-6">
      <RouterView />
    </div>
  </main>
</template>