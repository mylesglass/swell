<template>
  <section class="section">
    <div class="container">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="heading-1 has-text-white">
              Instagram
            </p>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <instagram-logo class="instagram-logo" />
          </div>
        </div>
      </nav>
      <p class="heading-2 has-text-light instagram-name">
        <a href="https://www.instagram.com/swellelectricalnz/">
          @swellelectricalnz
        </a>
      </p>
      <vue-instagram :token="token" :count="11" media-type="image" class="columns is-multiline is-mobile">
        <template slot="feeds" slot-scope="props">
          <card :post="props.feed" />
        </template>
        <template slot="error" slot-scope="props">
          <div class="fancy-alert">
            {{ props.error.error_message }}
          </div>
        </template>
      </vue-instagram>
    </div>
  </section>
</template>

<script>
import Card from '~/components/elements/Card'
import InstagramLogo from '~/assets/instagram-brands.svg'

export default {
  components: {
    Card,
    InstagramLogo
  },

  data () {
    return {
      token: '210744144.1677ed0.3ab83c55c93440e49c50d9de71d0ebca'
    }
  }
}
</script>

<style lang="scss" scoped>
.instagram-name {
  padding-bottom: 1rem;
}

.level {
  margin-bottom: 0;
}

.instagram-logo {
  min-width: 3rem;
  color: white;
}
</style>
