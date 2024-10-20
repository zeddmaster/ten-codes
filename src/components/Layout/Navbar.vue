<script setup>

</script>

<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="is-size-4 has-text-weight-bold">
            Ten-Codes
          </span>
        </a>
        <div class="navbar-burger js-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"> Home </router-link>
          <router-link class="navbar-item" to="/learn"> Learn </router-link>
<!--          <div class="navbar-item has-dropdown is-active">
            <a class="navbar-link" href="https://bulma.io/documentation/overview/start/"> Docs </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="https://bulma.io/documentation/overview/start/"> Overview </a>
              <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/"> Modifiers </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/"> Columns </a>
              <a class="navbar-item is-selected" href="https://bulma.io/documentation/layout/container/"> Layout </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/"> Form </a>
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/"> Elements </a>
              <a class="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/"> Components </a>
            </div>-->
          </div>
        </div>

<!--        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="https://bulma.io"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                >
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
                  <span> Tweet </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/1.0.2/bulma-1.0.2.zip">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </nav>
</template>

<style scoped>

</style>