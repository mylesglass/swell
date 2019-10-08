<template>
  <section v-if="visible" class="section">
    <div class="container">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="heading-1 has-text-white">
              {{ title }}
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
        <a :href="'https://www.instagram.com/' + link">
          {{ username }}
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

  computed: {
    title () {
      return this.$store.state.instagramItems.title
    },

    username () {
      return this.$store.state.instagramItems.username
    },

    token () {
      return this.$store.state.instagramItems.token
    },

    visible () {
      return this.$store.state.instagramItems.visible
    },

    link () {
      return this.$store.state.instagramItems.username.replace(/[@/]/g, '')
    }
  },

  created () {
    this.$store.dispatch('loadInstagram')
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
