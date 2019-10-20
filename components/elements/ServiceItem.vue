<template>
  <div class="column is-4-desktop is-4-tablet is-6-mobile has-text-centered">
    <figure class="image is-square is-service-image">
      <img :src="image">
    </figure>
    <p class="heading-2 has-text-white">
      {{ title }}
    </p>
    <p class="has-text-light">
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
    text: String
  }
}
</script>

<style lang="scss" scoped>
.is-service-image {
  max-width: 4rem;
  margin: auto;
}
</style>
