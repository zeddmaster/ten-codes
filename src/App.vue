<script setup>
import Navbar from "./components/Layout/Navbar.vue";

</script>

<template>
  <Navbar/>
  <main>
    <div class="container pt-6">
      <RouterView />
    </div>
  </main>
</template>