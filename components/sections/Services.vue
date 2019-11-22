<template>
  <section v-if="visible" class="section">
    <div class="container">
      <p class="heading-1" :class="textTheme">
        {{ title }}
      </p>
      <div class="columns is-multiline is-mobile">
        <service-item
          v-for="service in services"
          :key="service.title"
          :image="service.image"
          :title="service.title"
          :text="service.description"
          :theme="theme"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from '~/components/elements/ServiceItem'

export default {
  props: {
    theme: String
  },

  components: {
    ServiceItem
  },

  computed: {
    title () {
      return this.$store.state.serviceItems.title
    },

    services () {
      return this.$store.state.serviceItems.services
    },

    visible () {
      return this.$store.state.serviceItems.visible
    },

    textTheme () {
      return {
        'has-text-light': this.theme === 'dark',
        'has-text-dark': this.theme === 'light'
      }
    }
  },

  created () {
    this.$store.dispatch('loadServices')
  }
}
</script>
