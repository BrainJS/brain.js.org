<template>
  <div>
    <h1 class="title is-3">Examples</h1>
    <h2 class="subtitle is-4">Some quick samples to try Brain.js</h2>

    <br />
    <nav class="navbar is-light" style="z-index: 1;">
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
    <transition-group name="slide-up" mode="out-in">
      <div
        v-for="example in filteredExamples"
        :key="example.title"
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
              <template v-if="example.link.indexOf('jsfiddle') === -1">
                <a :href="example.link" target="_blank">{{ example.title }}</a>
              </template>
              <template v-else>
                <iframe
                  :src="example.link"
                  width="100%"
                  height="480px"
                  allowfullscreen="allowfullscreen"
                  frameborder="0"
                />
              </template>
            </div>
          </BulmaAccordionItem>
        </bulmaAccordion>
        <br />
      </div>
    </transition-group>

    <br />
    <div class="message is-light">
      <div class="message-header">
        Looking for more examples?
      </div>
      <div class="message-body">
        <ul>
          <li>
            <a
              href="https://github.com/BrainJS/brain.js/tree/master/examples/javascript"
              >JavaScript Examples in Brain.js Github repository</a
            >
          </li>
          <li>
            <a
              href="https://github.com/BrainJS/brain.js/tree/master/examples/typescript"
              >Typescript Examples in Brain.js Github repository</a
            >
          </li>
          <li>
            <a href="https://github.com/bradtraversy/brainjs_examples"
              >Some examples by @Brad Traversy</a
            >
          </li>
        </ul>
        <br />
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
        class="button is-primary is-medium"
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
      const query = this.search.toLowerCase()

      return this.$store.state.examples.filter((t) => {
        return (
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.link.includes(query)
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
