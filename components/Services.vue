<template>
  <section class="section">
    <div class="container">
      <p class="heading-1 has-text-white">
        Services
      </p>
      <div class="columns is-multiline is-mobile">
        <service-item icon="phone" title="Fighting" text="Quisque sagittis purus sit amet volutpat consequat." />
        <service-item icon="email" title="Sparking" text="Etiam erat velit scelerisque in dictum non consectetur." />
        <service-item icon="check" title="Torture" text="Id nibh tortor id aliquet lectus. Odio eu feugiat pretium nibh." />
        <service-item icon="home" title="Heaps of stuff" text="Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt." />
        <service-item icon="account" title="Murder" text="Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt." />
        <service-item icon="view-dashboard" title="Hacking" text="Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt." />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceItem from '~/components/ServiceItem'

export default {
  components: {
    ServiceItem
  }
}
</script>
