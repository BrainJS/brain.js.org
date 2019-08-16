<template>
  <div>
    <div class="custom-tags has-text-centered">
      <span
        v-for="feature in $store.state.features"
        :key="feature.title"
        class="tag is-light is-small"
        >{{ feature.title }}</span
      >
    </div>

    <br />
    <br />
    <!-- <h2 class="title is-3">Highlights</h2>
    <hr> -->
    <div class="container">
      <div class="highlight-list">
        <article
          v-for="highlight in $store.state.highlights"
          :key="highlight.title"
          class="message is-primary"
        >
          <!-- <div class="message-header">
            <p><strong>{{ highlight.title }}</strong></p>
          </div> -->
          <div class="message-body">
            <strong class="title is-4">
              {{ highlight.title }}
            </strong>
            <br />
            <br />
            {{ highlight.description }}
            <br /><br />
            <a v-show="highlight.link" :href="highlight.link">Details</a>
          </div>
        </article>
      </div>
    </div>

    <br />
    <br />
    <br />
    <div class="content has-text-centered">
      <div id="svg-logo-animation-container" ref="svg-logo-animation-container">
        <h2 class="title is-3">Brain.js is Modular</h2>
        <h3 class="subtitle is-5">
          Brain.js implmentation is highly modular to easily allow
          extendability.
        </h3>

        <div id="svg-logo-animation" ref="svg-logo-animation">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 200"
          >
            <rect width="100%" height="100%" fill="#F3DF49" />
            <g class="logo-parts">
              <polygon
                :style="leftPart"
                fill="#2E2E2C"
                points="104.8,110.4 134.1,133.6 134.1,148.7 94.8,163.9 74.3,164.9 58.5,143.7 73.4,123.3"
              />
              <polygon
                :style="rightPart"
                fill="#2E2E2C"
                points="139.4,148.7 139.4,133.6 134.3,104.4 148.4,103.5 185,126 180.5,153.6 166.4,164"
              />
              <polygon
                :style="bottomPart"
                fill="#2E2E2C"
                points="163.1,167.6 137.3,153.2 101.3,166.6 142.8,177.7 148.4,186.2 155.2,186.2"
              />
              <polygon
                :style="topPart"
                fill="#2E2E2C"
                points="111.1,108.3 133.5,127 128.9,105.3"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />
    <div class="columns has-text-centered">
      <div class="column">
        <h2 class="title is-3">
          Ready to start?
        </h2>
        <div class="content">
          <p>
            Read
            <a href="http://github.com/BrainJS/brain.js#brainjs"
              >Documentation</a
            >
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

      <div class="column">
        <h2 class="title is-3">
          Support
        </h2>
        <div class="content">
          <p>Support this project by becoming a Sponsor or Backer.</p>
          <router-link
            to="//opencollective.com/brainjs#sponsor"
            title="Sponsor"
            class="button is-primary is-large"
          >
            Become a Sponsor
          </router-link>
        </div>
      </div>

      <div class="column">
        <h2 class="title is-3">
          Be a Part of Brain.js
        </h2>
        <div class="content">
          <p>Contrinutions are always welcome!</p>
          <a
            href="//github.com/BrainJS/brain.js/blob/master/CONTRIBUTING.md"
            class="button is-primary is-large"
            title="Github Repository"
            target="_blank"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>

    <br />
    <hr />
    <br />

    <div class="content has-text-centered">
      <h2 class="title is-3">Sponsors/ Backers</h2>
      <p>Thank you to all our Sponsors and Backers! 🙏</p>
      <p>
        <a
          href="https://opencollective.com/brainjs/sponsor/0/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/0/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/1/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/1/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/2/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/2/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/3/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/3/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/4/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/4/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/5/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/5/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/6/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/6/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/7/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/7/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/8/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/8/avatar.svg"
        /></a>
        <a
          href="https://opencollective.com/brainjs/sponsor/9/website"
          target="_blank"
          ><img src="https://opencollective.com/brainjs/sponsor/9/avatar.svg"
        /></a>

        <br />
        <a href="https://opencollective.com/brainjs#backers" target="_blank"
          ><img src="https://opencollective.com/brainjs/backers.svg?width=890"
        /></a>
      </p>
    </div>

    <br />
    <hr />
    <br />

    <div class="content has-text-centered">
      <h2 class="title is-3">Contributors</h2>
      <p>
        This project exists thanks to all the people who contribute.<br /><br />
        <a href="graphs/contributors"
          ><img
            src="https://opencollective.com/brainjs/contributors.svg?width=890&button=false"
        /></a>
      </p>
    </div>

    <br />
  </div>
</template>

<script>
/*globals scrollama */

export default {
  components: {},

  data() {
    return {
      progress: 0,
    }
  },

  computed: {
    offset() {
      let offset = Math.abs(0.66 - this.progress) * 250 // max 100 offset
      if (offset < 0 || this.progress > 0.66) offset = 0

      return offset
    },
    leftPart() {
      return {
        transform: `translateX(-${this.offset}px)`,
        opacity: `${1.25 - this.offset / 80}`,
      }
    },
    rightPart() {
      return {
        transform: `translateX(${this.offset}px)`,
        opacity: `${1.25 - this.offset / 80}`,
      }
    },
    bottomPart() {
      return {
        transform: `translateY(${this.offset}px)`,
        opacity: `${1.25 - this.offset / 80}`,
      }
    },
    topPart() {
      return {
        transform: `translateY(-${this.offset}px)`,
        opacity: `${1.25 - this.offset / 80}`,
      }
    },
    featureList() {
      return this.$store.state.features.map(i => {
        return i.title
      })
    },
  },

  mounted() {
    // scroll progress
    const scroller = scrollama()
    scroller
      .setup({
        step: '#svg-logo-animation',
        progress: true,
        threshold: 1,
        offset: 0.66,
      })
      .onStepProgress(e => {
        this.progress = e.progress
      })

    //handle window resize
    window.addEventListener('resize', scroller.resize)
  },
}
</script>

<style lang="sass">
.custom-tags
  .tag
    margin-right: 0.5em
    margin-bottom: 0.5em

#svg-logo-animation-container
  #svg-logo-animation
    background-color: #f3df49
    svg
      max-width: 640px
    .logo-parts
      transform: translateX(-25px) translateY(-42px)

.vue-swimlane
  // border: 2px solid whitesmoke
  li
    // background-color: black
    color: #f3df49
</style>
