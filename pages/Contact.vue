<template>
  <div class="page page--contact">
    <section-contact-hero/>
    <div class="map-container">
    <section-contact-map/>
    </div>
  </div>
</template>

<script>
import SectionContactHero from '@/components/contact/SectionContactHero'
import SectionContactMap from '@/components/contact/SectionContactMap'
export default {
  name: 'contact',
  components: {
  	SectionContactHero,
    SectionContactMap
  },
  props: [
    'model'
  ]
}
</script>

<style lang="scss" scoped>
.map-container {
  padding-top: 140%;

  @include media-breakpoint-up(sm) {
    padding-top: 140%;
  }

  @include media-breakpoint-up(md) {
    padding-top: 70%;
  }

  @include media-breakpoint-up(lg) {
    padding-top: 50%;
  }

  @include media-breakpoint-up(xl) {
    padding-top: 0;
  }
}
</style>