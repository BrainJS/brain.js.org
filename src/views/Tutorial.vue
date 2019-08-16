<template>
  <div>
    <h1 class="title is-3">Tutorials & Guides</h1>
    <h2 class="subtitle is-4">Tutorials and guides to learn about Brain.js</h2>

    <br />
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              Featured
            </div>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://avatars2.githubusercontent.com/u/679099?s=400&v=4"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">Learn Neural Networks with Brain.js</p>
                <p class="subtitle is-6">
                  <a href="https://scrimba.com/@robertleeplummerjr"
                    >Robert Plummer</a
                  >
                </p>
              </div>
            </div>

            <div class="content">
              A tutorial series to understand Neural Networks and Brain.js
            </div>

            <a
              class="button is-primary"
              href="https://scrimba.com/playlist/pVZJQfg"
              target="_blank"
              >Open</a
            >
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <nav class="navbar is-light" style="z-index: 1">
      <div class="navbar-brand">
        <span class="navbar-item">
          <span>Search Tutorials:</span>
        </span>
        <div class="navbar-item">
          <input v-model="search" class="input" type="text" placeholder="" />
        </div>
      </div>
    </nav>

    <br />
    <br />
    <div class="custom-box">
      <transition-group name="slide-up" mode="out-in">
        <div
          v-for="(tutorial, index) in filteredTutorials"
          :key="index"
          class="box"
        >
          <p class="title is-5">{{ tutorial.title }}</p>
          <p class="subtitle is-6">{{ tutorial.author }}</p>
          <a :href="tutorial.link" class="button is-primary" target="_blank"
            >Open</a
          >
        </div>
      </transition-group>
    </div>

    <br />
    <br />
    <h2 class="title is-4">Want to add an article?</h2>
    <p>
      This page is open source, go ahead and include tutorial/article related to
      Brain.js to this list or
      <a href="//github.com/BrainJS/brain.js/issues/new" target="_blank"
        >create an issue</a
      >
      and we will add it.
    </p>

    <br />
    <br />
    <h2 class="title is-3">
      Ready to start?
    </h2>
    <div class="content">
      <p>
        Read
        <a href="http://github.com/BrainJS/brain.js#brainjs">Documentation</a>
        or view
        <router-link to="/examples" title="Examples" class="">
          Live Examples
        </router-link>
      </p>
      <router-link
        to="/getting-started"
        class="button is-primary is-large"
        title="Installation & Quick Start"
      >
        Get Started Now
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },

  computed: {
    filteredTutorials() {
      return this.$store.state.tutorials.filter(t => {
        return (
          t.title.includes(this.search) ||
          t.author.includes(this.search) ||
          t.link.includes(this.search)
        )
      })
    },
  },
}
</script>

<style lang="sass"></style>
