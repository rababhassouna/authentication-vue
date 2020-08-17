<template>
  <div id="app">
    <Nav></Nav>
    <div id="container">
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from './components/Layouts/Footer.vue'
import Nav from './components/Layouts/Nav.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Nav
  },
  created () {
    return this.$store.dispatch('autoLogin')
  }
}
</script>
