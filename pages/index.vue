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

    <!-- Introduction -->
    <introduction />

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
import Logo from '~/components/elements/AnimatedLogo'
import Introduction from '~/components/sections/Introduction'
import Contact from '~/components/sections/Contact'
import Services from '~/components/sections/Services'
import Testimonials from '~/components/sections/Testimonials'
import Instagram from '~/components/sections/Instagram'
import MGFooter from '~/components/sections/MGFooter'

export default {
  name: 'HomePage',

  components: {
    Logo,
    Introduction,
    Contact,
    Services,
    Testimonials,
    Instagram,
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
