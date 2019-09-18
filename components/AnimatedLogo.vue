/* eslint-disable */
<template>
    <div id="pjs" />
</template>

<script>
export default {
  mounted () {
    const swellAnimation = require('~/p5/swell.js')
    const P5 = require('p5')
    /* eslint-disable no-new */
    new P5(swellAnimation.main)
  }
}
</script>

<style lang="scss" scoped>
#pjs {
  margin: auto;
}
</style>
