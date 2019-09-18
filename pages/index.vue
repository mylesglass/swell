<template>
  <div>
    <div v-if="animatedLogoVisible" class="animated-logo">
      <logo />
      <figure class="image swell-wordmark">
        <img src="~/assets/SwellElectricalWordmarkWhite.png">
      </figure>
    </div>

    <section v-else class="section">
      <div class="container">
        <figure class="image swell-logo">
          <img src="~/assets/SwellElectricalLogoWhite.webp">
        </figure>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle has-text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Mauris pellentesque pulvinar pellentesque habitant morbi. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Etiam erat velit scelerisque in dictum non consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Tincidunt praesent semper feugiat nibh sed. Quisque sagittis purus sit amet volutpat consequat. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. In fermentum posuere urna nec. Tincidunt vitae semper quis lectus. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Et odio pellentesque diam volutpat commodo. Consectetur lorem donec massa sapien faucibus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. In pellentesque massa placerat duis ultricies.
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="is-size-4 has-text-white">Get in touch, bitch</p>
        <nav class="level has-text-light">
          <div class="level-left">
            <div class="level-item">
              <a href="mailto:perry@swellelectical.co.nz">
                <p>
                  perry@swellelectrical.co.nz
                </p>
              </a>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a href="tel:021834197">
                <p>
                  021 834 197
                </p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <testimonials />

    <section class="section">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="is-size-4 has-text-white">
                <a href="https://www.instagram.com/swellelectricalnz/">
                  @swellelectricalnz
                </a>
              </p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <button class="button" @click="igVisible = !igVisible">
                <span class="icon">
                  <instagram-logo />
                </span>
                <span v-if="!igVisible">Check the gram</span>
                <span v-else>Hide this shit</span>
              </button>
            </div>
          </div>
        </nav>
        <transition name="slide-fade">
          <instagram v-if="igVisible" />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/AnimatedLogo'
import Instagram from '~/components/Instagram'
import InstagramLogo from '~/assets/instagram-brands.svg'
import Testimonials from '~/components/Testimonials'

export default {
  name: 'HomePage',

  components: {
    Logo,
    Instagram,
    InstagramLogo,
    Testimonials
  },

  data () {
    return {
      igVisible: true,
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
