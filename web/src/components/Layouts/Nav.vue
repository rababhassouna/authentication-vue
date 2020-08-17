<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white nav-border">
    <a class="navbar-brand" href="/">
      <img src="../../assets/images/header_logo.svg" width="100px"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <RouterLink to="/contact" tag="li" class="nav-item active pr-2">
          <a class="nav-link" href="">Contact <span class="sr-only">(current)</span></a>
        </RouterLink>
        <RouterLink v-if="auth" to="/signup" tag="li" class="nav-item pr-2">
          <a class="nav-link" href="">Sign up</a>
        </RouterLink>
        <RouterLink v-if="auth" to="/login" tag="li" class="nav-item pr-2">
          <button class="btn btn-outline-success my-2 my-sm-0 kyro-btn rounded-pill" type="submit">Login
          </button>
        </RouterLink>
        <li v-else>
          <button class="btn btn-outline-success my-2 my-sm-0 kyro-btn rounded-pill"
          @click="logout">Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    auth () {
      return !this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout () {
      return this.$store.dispatch('logout')
    }
  }
}
</script>
