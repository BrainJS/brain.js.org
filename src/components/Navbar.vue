<template>
  <nav class="navbar is-fixed-top is-primary">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img
          src="@/assets/logo.svg"
          alt="Brain.js logo"
          width="28"
          height="28"
          class="bordered"
        />
        Brain.js
      </router-link>
      <div
        class="navbar-burger burger"
        :class="{ 'is-active': isNavBarOpen }"
        @click="toggleNavbar"
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isNavBarOpen }">
      <div class="navbar-start">
        <router-link
          to="/getting-started"
          class="navbar-item"
          title="Installation & Quick Start"
        >
          <i class="material-icons">flight_takeoff</i>
          &nbsp;Getting Started
        </router-link>
        <router-link to="/tutorial" class="navbar-item" title="Tutorials">
          <i class="material-icons">school</i>
          &nbsp;Tutorials
        </router-link>
        <router-link to="/examples" class="navbar-item" title="View Examples">
          <i class="material-icons">list_alt</i>
          &nbsp;Examples
        </router-link>
        <a
          href="//github.com/BrainJS/brain.js#brainjs"
          class="navbar-item"
          title="View Documentation"
          target="_blank"
        >
          <i class="material-icons">view_list</i>
          &nbsp;Documentation
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button is-link"
                target="_blank"
                title="Tweet about Brain.js"
                href="//twitter.com/intent/tweet?text=Brain.js: GPU accelerated Neural networks in JavaScript&amp;hashtags=brain.js,neuralNetworks,javascript,nodejs"
              >
                <i class="material-icons">share</i>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-link"
                target="_blank"
                title="Brain.js on Github"
                href="//github.com/BrainJS/brain.js"
              >
                Github
              </a>
            </p>
            <p class="control">
              <a
                class="button is-link"
                title="Be a Sponsor or Backer to this project"
                target="_blank"
                href="//opencollective.com/brainjs"
              >
                <i class="material-icons">attach_money</i>
                <span>&nbsp; Sponsor</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavBarOpen: false,
    }
  },

  watch: {
    $route() {
      this.toggleNavbar()
    },
  },

  methods: {
    toggleNavbar() {
      this.isNavBarOpen = !this.isNavBarOpen
    },
  },
}
</script>

<style lang="sass">
.navbar-item > img
  margin-right: 0.5em;
</style>
