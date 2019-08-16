<template>
  <section
    :class="{ 'is-large': $route.name === 'home' }"
    class="hero is-dark is-bold"
  >
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-256x256">
              <img
                src="@/assets/logo.svg"
                alt="brain.js logo"
                class="bordered"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <span class="title is-1">Brain.js</span>
                <br />
                <span class="subtitle is-2"
                  >GPU accelerated Neural networks in JavaScript</span
                >
                <br />
                for Browsers and Node.js
              </p>

              <hr />
              <div class="description">
                <p class="is-3">
                  Brain.js is a GPU accelerated library of Neural Networks
                  written in JavaScript for Browsers and Node.js. It is simple,
                  fast and easy to use.
                </p>
                <div class="field is-grouped">
                  <p class="control">
                    <router-link
                      to="/getting-started"
                      class="button is-dark"
                      title="Installation & Quick Start"
                    >
                      Getting Started
                    </router-link>
                  </p>
                  <p class="control">
                    <a
                      href="//github.com/BrainJS/brain.js"
                      class="button is-dark"
                      title="Github Repository"
                      target="_blank"
                    >
                      Github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped></style>
