<template>
  <section v-if="visible" class="section">
    <div class="container">
      <p class="heading-3" :class="textTheme">
        {{ blurb }}
      </p>
      <br>
      <p :class="textTheme">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    theme: String
  },

  computed: {
    blurb () {
      return this.$store.state.introItems.blurb
    },

    description () {
      return this.$store.state.introItems.description
    },

    visible () {
      return this.$store.state.introItems.visible
    },

    textTheme () {
      return {
        'has-text-light': this.theme === 'dark',
        'has-text-dark': this.theme === 'light'
      }
    }
  },

  created () {
    this.$store.dispatch('loadIntro')
  }
}
</script>
