<template>
  <footer class="footer" :class="footerObj">
    <div class="content has-text-centered" :class="textTheme">
      <p>
        Built by <a href="https://google.com">Myles Glass</a> 2019
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    theme: String
  },

  computed: {
    footerObj () {
      if (this.theme === 'dark') {
        return 'dark-footer'
      } else {
        return 'light-footer'
      }
    },

    textTheme () {
      return {
        'has-text-light': this.theme === 'dark',
        'has-text-dark': this.theme === 'light'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark-footer {
  background-color: #111111;
}

.light-footer {
  background-color: white;
}
</style>
