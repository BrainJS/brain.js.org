<template>
  <div id="app">
    <navbar />
    <Hero />
    <div class="section">
      <div class="container">
        <transition name="slide-up" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <footer-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FooterView from '@/components/Footer'

export default {
  components: {
    Navbar,
    Hero,
    FooterView,
  },
}
</script>

<style lang="sass"></style>
