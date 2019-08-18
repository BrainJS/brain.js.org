<template>
  <div>
    <h1 class="title is-3">Examples</h1>
    <h2 class="subtitle is-4">Some quick samples to quickly learn Brain.js</h2>

    <br />
    <nav class="navbar is-dark" style="z-index: 1">
      <div class="navbar-brand">
        <span class="navbar-item">
          <span>Search:</span>
        </span>
        <div class="navbar-item">
          <input v-model="search" class="input" type="text" placeholder="" />
        </div>
      </div>
    </nav>

    <br />
    <br />
    <transition-group name="slide-up" mode="out-in">
      <div
        v-for="(example, index) in filteredExamples"
        :key="index"
        :ref="example.title"
        class="example-container"
      >
        <bulmaAccordion
          :icon="'caret'"
          :slide="{ duration: '100ms', timerFunc: 'ease-out' }"
          @toggle="exampleClickHandler(example.title)"
        >
          <BulmaAccordionItem>
            <div slot="title">
              <h4 class="title is-5 has-text-weight-normal">
                {{ example.title }}
              </h4>
              <p class="subtitle is-6">{{ example.description }}</p>
            </div>
            <div slot="content">
              <iframe
                :src="example.link"
                width="100%"
                height="480px"
                allowfullscreen="allowfullscreen"
                frameborder="0"
              />
            </div>
          </BulmaAccordionItem>
        </bulmaAccordion>
        <br />
      </div>
    </transition-group>

    <br />
    <div class="message is-primary">
      <div class="message-header">
        Looking for more examples?
      </div>
      <div class="message-body">
        Brain.js github repository also contains some
        <a href="https://github.com/BrainJS/brain.js/tree/master/examples"
          >JavaScript Examples</a
        >
        and
        <a
          href="https://github.com/BrainJS/brain.js/tree/master/examples-typescript"
          >Typescript Examples</a
        >.
      </div>
    </div>

    <br />
    <h2 class="title is-4">Want to add an example?</h2>
    <p>
      This page is open source, go ahead and include example using Brain.js to
      this list or
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
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  components: {
    BulmaAccordion,
    BulmaAccordionItem,
  },

  data() {
    return {
      search: '',
      activeExampleIndex: null,
    }
  },

  computed: {
    filteredExamples() {
      return this.$store.state.examples.filter(t => {
        return (
          t.title.includes(this.search) ||
          t.description.includes(this.search) ||
          t.link.includes(this.search)
        )
      })
    },
  },

  created() {
    this.activeExampleIndex = this.$route.query.example || null
  },

  mounted() {
    window.setTimeout(() => {
      this.$nextTick(() => {
        this.scrollActiveExampleIntoView()
      })
    }, 250)
  },

  methods: {
    exampleClickHandler(t) {
      this.activeExampleIndex = t

      this.$router.replace({
        path: 'examples',
        query: { example: t },
      })
    },

    scrollActiveExampleIntoView() {
      const ref = this.$refs[this.activeExampleIndex]

      if (ref) {
        ref[0].scrollIntoView({
          behavior: 'smooth',
        })

        ref[0].getElementsByClassName('card-header')[0].click()
      }
    },
  },
}
</script>

<style lang="sass">
iframe
  height: 480px

.accordion
  .card-header
    cursor: pointer
</style>
