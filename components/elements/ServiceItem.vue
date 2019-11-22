<template>
  <div class="column is-3-desktop is-3-tablet is-6-mobile has-text-centered">
    <figure class="image is-square is-service-image" :class="iconTheme">
      <img :src="image" class="imageDark">
    </figure>
    <p class="heading-2" :class="textTheme">
      {{ title }}
    </p>
    <p :class="textTheme">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    image: String,
    // eslint-disable-next-line
    title: String,
    // eslint-disable-next-line
    text: String,
    theme: String
  },

  computed: {
    textTheme () {
      return {
        'has-text-light': this.theme === 'dark',
        'has-text-dark': this.theme === 'light'
      }
    },

    iconTheme () {
      return {
        'is-invert': this.theme === 'light'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-service-image {
  max-width: 4rem;
  margin: auto;
}

.is-invert {
  filter: invert(80%);
}
</style>
