<template>
  <div>
    <!-- Animated Logo -->
    <div v-if="animatedLogoVisible" class="animated-logo">
      <logo />
      <figure class="image swell-wordmark">
        <img src="~/assets/SwellElectricalWordmarkWhite.png">
      </figure>
    </div>

    <!-- Static logo for devices/browsers that cannot handle p5.js, or under perform -->
    <section v-else class="section">
      <div class="container">
        <figure class="image swell-logo">
          <img src="~/assets/SwellElectricalLogoWhite.webp">
        </figure>
      </div>
    </section>

    <!-- Hero -->
    <section class="section">
      <div class="container">
        <p class="heading-3 has-text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Mauris pellentesque pulvinar pellentesque habitant morbi.
        </p>
        <br>
        <p class="has-text-light">
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Etiam erat velit scelerisque in dictum non consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Tincidunt praesent semper feugiat nibh sed.
        </p>
      </div>
    </section>

    <!-- Services -->
    <services />

    <!-- Contact -->
    <contact />

    <!-- Testimonials -->
    <testimonials />

    <!-- Instagram -->
    <instagram />

    <m-g-footer />
  </div>
</template>

<script>
import Logo from '~/components/AnimatedLogo'
import Instagram from '~/components/Instagram'
import Services from '~/components/Services'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import MGFooter from '~/components/MGFooter'

export default {
  name: 'HomePage',

  components: {
    Logo,
    Instagram,
    Services,
    Testimonials,
    Contact,
    MGFooter
  },

  data () {
    return {
      animatedLogoVisible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.swell-logo {
  margin: auto;
  max-width: 40rem;
}

.swell-wordmark {
  margin: auto;
  max-width: 40rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
