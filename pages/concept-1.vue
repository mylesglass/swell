<template>
  <div>
    <!-- Animated Logo -->
    <div class="animated-logo is-hidden-mobile">
      <logo />
      <figure class="image swell-wordmark">
        <img src="~/assets/SwellElectricalWordmarkWhite.png">
      </figure>
    </div>

    <!-- Static logo for devices/browsers that cannot handle p5.js, or under perform -->
    <section class="section is-hidden-tablet">
      <div class="container">
        <figure class="image swell-logo">
          <img src="~/assets/SwellElectricalLogoWhite.webp">
        </figure>
      </div>
    </section>

    <div class="controls">
      <p class="heading-2">
        Concept 1
      </p>
      <p>
        Dark theme. Original (initial) version with animated logo.
      </p>
    </div>

    <!-- Introduction -->
    <introduction :theme="theme"/>

    <!-- Services -->
    <services :theme="theme"/>

    <!-- Contact -->
    <contact :theme="theme"/>

    <!-- Testimonials -->
    <testimonials :theme="theme"/>

    <!-- Instagram -->
    <instagram :theme="theme"/>

    <m-g-footer :theme="theme"/>
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

  data () {
    return {
      theme: 'dark'
    }
  },

  components: {
    Logo,
    Introduction,
    Contact,
    Services,
    Testimonials,
    Instagram,
    MGFooter
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

.controls {
  position: fixed;
  background-color: orangered;
  padding: 2rem;
  bottom: 1rem;
  margin-left: 1rem;
  border-radius: 1rem;
  color: white;
  z-index: 100;
  max-width: 30rem;
  -webkit-box-shadow: 0px 10px 23px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 23px -6px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 23px -6px rgba(0,0,0,0.75);
}
</style>
