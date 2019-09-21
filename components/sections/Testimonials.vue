<template>
  <section class="section">
    <div class="container testimonial-container">
      <p class="heading-1 has-text-white">
        Testimonials
      </p>
      <chat-bubble
        position="left"
        content="Id faucibus nisl tincidunt eget nullam. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Neque vitae tempus quam pellentesque nec. Et netus et malesuada fames ac turpis egestas sed tempus. Id nibh tortor id aliquet lectus. Odio eu feugiat pretium nibh."
        author="Kanye West"
      />
      <chat-bubble
        position="right"
        content="Sodales ut eu sem integer vitae justo eget. Id leo in vitae turpis massa sed elementum. Semper feugiat nibh sed pulvinar."
        author="Barry White"
      />
      <chat-bubble
        position="left"
        content="Rhoncus est pellentesque elit ullamcorper dignissim. Lectus mauris ultrices eros in cursus turpis massa tincidunt."
        author="Barack Obama"
      />
      <chat-bubble
        position="right"
        content="Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt."
        author="Harry Potter"
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

  data () {
    return {
      testesVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonial-container {
  padding-bottom: 4rem;
}
</style>
