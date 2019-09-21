<template>
  <section class="section">
    <div class="container">
      <p class="heading-1 has-text-white">
        {{ title }}
      </p>
      <div class="columns is-multiline is-mobile">
        <service-item
          v-for="service in services"
          :key="service.title"
          :image="service.image"
          :title="service.title"
          :text="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from '~/components/elements/ServiceItem'

export default {
  components: {
    ServiceItem
  },

  computed: {
    title () {
      return this.$store.state.serviceItems.title
    },

    services () {
      return this.$store.state.serviceItems.services
    }
  },

  created () {
    this.$store.dispatch('loadServices')
  }
}
</script>
