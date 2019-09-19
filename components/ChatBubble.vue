<template>
  <div class="chat-bubble tri-right" :class="{ 'left-in' : trianglePosition, 'right-in is-pulled-right' : !trianglePosition}">
    <div class="chat-text">
      <p>{{ content }}</p>
      <p class="author is-pulled-right">
        - {{ author }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    position: String,
    // eslint-disable-next-line
    content: String,
    // eslint-disable-next-line
    author: String
  },

  computed: {
    trianglePosition () {
      if (this.position === 'left') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$bubble-color: rgb(59, 139, 214);

.chat-bubble {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  max-width: 30rem;
  height: auto;
  background-color: $bubble-color;
  border-radius: 0.4rem;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
}

.chat-text{
  padding: 1em;
  text-align: left;
  line-height: 1.5em;
  p {
    color: white;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
  }
}

.author {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.tri-right.border.right-in:before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  right: -40px;
  top: 30px;
  bottom: auto;
  border: 20px solid;
  border-color: #666 transparent transparent #666;
}

.tri-right.right-in:after{
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  right: -20px;
  top: 38px;
  bottom: auto;
  border: 12px solid;
  border-color: $bubble-color transparent transparent $bubble-color;
}

.tri-right.border.left-in:before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: -40px;
  right: auto;
  top: 30px;
  bottom: auto;
  border: 20px solid;
  border-color: #666 #666 transparent transparent;
}
.tri-right.left-in:after{
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: -20px;
  right: auto;
  top: 38px;
  bottom: auto;
  border: 12px solid;
  border-color: $bubble-color $bubble-color transparent transparent;
}
</style>
