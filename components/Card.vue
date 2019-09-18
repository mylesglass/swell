<template>
  <div class="column is-4-desktop is-6-tablet is-6-mobile">
    <a :href="post.link">
      <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="post.images.low_resolution.url" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <time class="is-size-7" datetime="2016-1-1">{{ createdTime }}</time>
            <br>
            <span v-if="post.caption">{{ post.caption.text }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    post: Object
  },

  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },

  computed: {
    createdTime () {
      const date = new Date(this.post.created_time * 1000)
      return date.getDate() + ' ' + this.months[date.getMonth()] + ' ' + date.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 24rem;
}

.card:hover {
  img {
    filter: brightness(110%)
  }
}
</style>
