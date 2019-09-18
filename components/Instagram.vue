<template>
  <vue-instagram :token="token" :count="11" media-type="image" class="columns is-multiline is-mobile">
    <template slot="feeds" slot-scope="props">
      <card :post="props.feed" />
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert">
        {{ props.error.error_message }}
      </div>
    </template>
  </vue-instagram>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },

  data () {
    return {
      token: '210744144.1677ed0.3ab83c55c93440e49c50d9de71d0ebca'
    }
  }
}
</script>
