<template>
  <section class="section">
    <div class="container">
      <p class="heading-3 has-text-light">
        {{ blurb }}
      </p>
      <br>
      <p class="has-text-light">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    blurb () {
      return this.$store.state.introItems.blurb
    },

    description () {
      return this.$store.state.introItems.description
    }
  },

  created () {
    this.$store.dispatch('loadIntro')
  }
}
</script>
