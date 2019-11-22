<template>
  <div :class="pageTheme">
    <!-- Static logo for devices/browsers that cannot handle p5.js, or under perform -->
    <section class="section">
      <div class="container">
        <figure class="image swell-logo" :class="imageTheme">
          <img src="~/assets/SwellElectricalLogoWhite.webp">
        </figure>
      </div>
    </section>

    <!-- Introduction -->
    <introduction :theme="theme"/>

    <div class="controls">
      <p class="heading-2">
        Concept 3
      </p>
      <p>
        Colour Inversion. This concept offers layouts in both light and dark variations. Toggle below to swtich variants. <br/><b>Fix link elements</b>
      </p>
      <div class="field is-pulled-right">
        <b-switch
          v-model="theme"
          outlined
          type="is-light"
          true-value="dark"
          false-value="light">
          {{ theme }}
        </b-switch>
      </div>
    </div>

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
import Introduction from '~/components/sections/Introduction'
import Contact from '~/components/sections/Contact'
import Services from '~/components/sections/Services'
import Testimonials from '~/components/sections/Testimonials'
import Instagram from '~/components/sections/Instagram'
import MGFooter from '~/components/sections/MGFooter'

export default {
  name: 'HomePage',

  components: {
    Introduction,
    Contact,
    Services,
    Testimonials,
    Instagram,
    MGFooter
  },

  data () {
    return {
      theme: 'dark'
    }
  },

  computed: {
    pageTheme () {
      if (this.theme === 'dark') {
        return 'dark-page'
      } else {
        return 'light-page'
      }
    },

    imageTheme () {
      if (this.theme === 'light') {
        return 'image-invert'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.light-page {
  background-color: white;
}

.dark-page {
  background-color: #111111;
}

.swell-logo {
  margin: auto;
  max-width: 40rem;
}

.image-invert {
  filter: invert(100%);
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
