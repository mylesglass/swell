<template>
  <section v-if="visible" class="section">
    <div class="container testimonial-container">
      <p class="heading-1 has-text-white">
        {{ title }}
      </p>
      <chat-bubble
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.author"
        :position="index"
        :content="testimonial.text"
        :author="testimonial.author"
      />
    </div>
  </section>
</template>

<script>
import ChatBubble from '~/components/elements/ChatBubble'

export default {
  components: {
    ChatBubble
  },

  computed: {
    title () {
      return this.$store.state.testimonialItems.title
    },

    testimonials () {
      return this.$store.state.testimonialItems.testimonials
    },

    visible () {
      return this.$store.state.testimonialItems.visible
    }
  },

  created () {
    this.$store.dispatch('loadTestimonials')
  }
}
</script>

<style lang="scss" scoped>
.testimonial-container {
  padding-bottom: 4rem;
}
</style>
