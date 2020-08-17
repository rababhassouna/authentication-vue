<template>
  <div class="box" >
    <article class="media" v-for = "product in products" :key = "product.id">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="product.image.url" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{product.title}}</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
          {{product.description}}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
            </a>
            <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
</template>

<script>
import globalAxios from 'axios'
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    console.log(this.$store.getters.userData)
    globalAxios.get('http://localhost:1337/products')
      .then(responce => {
        this.products = responce.data
      })
      .catch(error => console.log(error))
  }
}

</script>
