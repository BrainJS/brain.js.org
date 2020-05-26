<template>
  <section
    :class="{ 'is-large': $route.name === 'home' }"
    class="hero is-primary"
  >
    <div class="hero-body">
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img
                src="@/assets/logo.svg"
                alt="brain.js logo"
                class="bordered"
                width="128"
                height="128"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h1 class="title is-1">
                Brain.js: GPU accelerated Neural networks in JavaScript
              </h1>
              <h2 class="subtitle is-2">
                for Browsers and Node.js
              </h2>

              <div class="description">
                <p class="is-size-5">
                  Simple, fast and easy to use.
                </p>
                <div class="field is-grouped">
                  <p class="control">
                    <router-link
                      to="/getting-started"
                      class="button is-dark"
                      title="Installation & Quick Start"
                    >
                      <i class="material-icons">flash_on</i>
                      <span>Get Started Now</span>
                    </router-link>
                  </p>
                </div>
              </div>

              <!-- <br />
              <p class="control">
                <a
                  href="https://nodei.co/npm/brain.js/"
                  style="border-bottom: none"
                >
                  <img src="https://nodei.co/npm/brain.js.png?mini=true" />
                </a>
              </p> -->
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

<style lang="sass" scoped>
.hero.is-large
  height: calc(100vh - 52px)

.control.npm
  img
    height: 36px;
</style>
