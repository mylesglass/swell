<template>
  <section class="section">
    <div class="container">
      <p class="heading-1 has-text-white">
        {{ title }}
      </p>
      <div class="columns is-multiline is-mobile">
        <service-item
          icon="phone"
          :title="title"
          :text="description"
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

    description () {
      return this.$store.state.serviceItems.description
    },

    image () {
      return this.$store.state.serviceItems.image
    }
  },

  created () {
    this.$store.dispatch('loadServices')
  }
}
</script>
