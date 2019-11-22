<template>
  <div class="page">
    <!-- Static logo for devices/browsers that cannot handle p5.js, or under perform -->
    <section class="section">
      <div class="container">
        <figure class="image swell-logo">
          <img src="~/assets/SwellElectricalLogoWhite.webp">
        </figure>
      </div>
    </section>

    <!-- List of concepts -->
    <section class="section">
      <div class="container">
        <p class="heading-2 has-text-light">
          Layout Concepts
        </p>
        <ul>
          <li>
            <nuxt-link to="concept-1">
              Concept 1 - Original
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="concept-2">
              Concept 2 - Light Theme
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="concept-3">
              Concept 3 - Theme Toggle
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Homepage'
}
</script>

<style lang="scss" scoped>
.swell-logo {
  margin: auto;
  max-width: 40rem;
}

.page {
  min-height: 100vh
}
</style>
