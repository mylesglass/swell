<template>
  <div>
    <logo />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-light">
            Swell Electrical
          </h1>
          <h2 class="subtitle has-text-light">
            We fix your shit.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <vue-instagram token="210744144.1677ed0.3ab83c55c93440e49c50d9de71d0ebca" :count="5" mediaType="image">
        <template slot="feeds" slot-scope="props">
          <div class="column">
            <article class="media">
              <figure class="media-centre">
                <div class="image">
                  <img :src="props.feed.images.standard_resolution.url" alt="props.feed.link">
                </div>
              </figure>
            </article>
          </div>
        </template>
        <template slot="error" slot-scope="props">
          <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
      </vue-instagram>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/AnimatedLogo'

export default {
  name: 'HomePage',

  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
</style>
