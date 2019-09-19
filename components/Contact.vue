<template>
  <section class="section">
    <div class="container">
      <p class="heading-1 has-text-white">
        Get in touch
      </p>
      <p class="has-text-light">
        Etiam erat velit scelerisque in dictum non consectetur. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Tincidunt praesent semper feugiat nibh sed. Quisque sagittis purus sit amet volutpat consequat.
      </p>
      <div class="field has-addons">
        <p class="control">
          <b-button
            type="is-dark is-large"
            inverted
            outlined
            icon-left="email"
            href="mailto:perry@swellelectical.co.nz"
            tag="a"
          >
            Email
          </b-button>
        </p>
        <p class="control">
          <b-button
            type="is-dark is-large"
            inverted
            outlined
            icon-left="phone"
            href="tel:021834197"
            tag="a"
          >
            Phone
          </b-button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
