<template>
  <section class="section">
    <div class="container">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <p class="heading-2 has-text-white">
              Testimonials
            </p>
            <br>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <light-bulb-switch v-on:switch-toggled="testesVisible = $event" />
          </div>
        </div>
      </nav>
      <div v-if="testesVisible" class="columns has-text-white">
        <ul>
          <li>perry killed my family and gambled my life savings away.</li>
          <li>perry introduced me to drugs.</li>
          <li>perry taught mny son how to huff glue.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import LightBulbSwitch from '~/components/LightBulbSwitch'

export default {
  components: {
    LightBulbSwitch
  },

  data () {
    return {
      testesVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 2rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  border-radius: 1rem;
  background-color: #514878;
}
</style>
