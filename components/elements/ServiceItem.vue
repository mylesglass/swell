<template>
  <div class="column is-4-desktop is-6-tablet is-6-mobile has-text-centered">
    <b-icon
      :icon="icon"
      size="is-large"
      type="is-light"
    />
    <p class="heading-2 has-text-white">
      {{ title }}
    </p>
    <p class="has-text-light">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    icon: String,
    // eslint-disable-next-line
    title: String,
    // eslint-disable-next-line
    text: String
  }
}
</script>
