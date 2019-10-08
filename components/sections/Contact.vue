<template>
  <section v-if="visible" class="section">
    <div class="container">
      <p class="heading-1 has-text-white">
        {{ title }}
      </p>
      <p class="has-text-light">
        {{ description }}
      </p>
      <div class="field has-addons">
        <p class="control">
          <b-button
            type="is-dark is-large"
            inverted
            outlined
            icon-left="email"
            :href="emailAddress"
            tag="a"
          >
            {{ emailTitle }}
          </b-button>
        </p>
        <p class="control">
          <b-button
            type="is-dark is-large"
            inverted
            outlined
            icon-left="phone"
            :href="phoneNumber"
            tag="a"
          >
            {{ phoneTitle }}
          </b-button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.contactItems.title
    },

    description () {
      return this.$store.state.contactItems.description
    },

    emailTitle () {
      return this.$store.state.contactItems.email_title
    },

    emailAddress () {
      return this.$store.state.contactItems.email_address
    },

    phoneTitle () {
      return this.$store.state.contactItems.phone_title
    },

    phoneNumber () {
      return this.$store.state.contactItems.phone_number
    },

    visible () {
      return this.$store.state.contactItems.visible
    }
  },

  created () {
    this.$store.dispatch('loadContact')
  }
}
</script>

<style lang="scss" scoped>
.field {
  padding-top: 1rem;
}

a:hover {
  text-decoration: none;
}
</style>
