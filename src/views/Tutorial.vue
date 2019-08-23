<template>
  <div>
    <h1 class="title is-3">Tutorials & Guides</h1>
    <h2 class="subtitle is-4">Tutorials and guides to learn about Brain.js</h2>

    <br />
    <div class="message is-dark">
      <div class="message-header">
        Featured:
      </div>
      <div class="message-body">
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
            <p class="title is-5">
              <a href="https://scrimba.com/playlist/pVZJQfg">
                Learn Neural Networks with Brain.js</a
              >
            </p>
            <p class="subtitle is-6">
              by
              <a href="https://scrimba.com/@robertleeplummerjr"
                >Robert Plummer</a
              >
            </p>
          </div>
        </div>

        <br />
        <div class="content">
          A tutorial series to understand Neural Networks and Brain.js by Robert
          Plummer, author of Brain.js
        </div>
      </div>
    </div>

    <br />
    <br />
    <nav class="navbar is-light" style="z-index: 1">
      <div class="navbar-brand">
        <span class="navbar-item">
          <span>Search:</span>
        </span>
        <div class="navbar-item">
          <input
            v-model="search"
            class="input is-light"
            type="text"
            placeholder=""
          />
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
          <p class="title is-5">
            <a :href="tutorial.link" target="_blank">{{ tutorial.title }}</a>
          </p>
          <p class="subtitle is-6">{{ tutorial.author }}</p>
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
      const query = this.search.toLowerCase()

      return this.$store.state.tutorials.filter(t => {
        return (
          t.title.toLowerCase().includes(query) ||
          t.author.toLowerCase().includes(query) ||
          t.link.includes(query)
        )
      })
    },
  },
}
</script>

<style lang="sass"></style>
