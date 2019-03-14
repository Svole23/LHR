<template>
  <section class="section--contact-map">
    <div class="svg-container">
      <LinesSvg/>
    </div>
    <div class="map-container">
      <contact-map/>
    </div>
  </section>  
</template>

<script>
  import ContactMap from '@/components/contact/ContactMap'
  import LinesSvg from '@/assets/svg/patterns/diagonal-dashed-lines-1000x200.svg'
  export default {
    name: 'section-contact-map',
    components: {
      ContactMap,
      LinesSvg
    }
  }
</script>

<style lang="scss" scoped>
.section--contact-map {
  width: 100%;
  height: 40vh;
  padding-left: $width-unit;
  position: relative;

  @include media-breakpoint-up(xl) {
    width: 100%;
    height: 100vh;
    padding-left: $width-unit * 3;
    padding-top: $width-unit * 1.3;
  }

  .svg-container {
    height: $width-unit * 1.6;
    width: $width-unit * 6;
    display: none;

    @include media-breakpoint-up(xl) {
      display: block;
      overflow: hidden;
      position:absolute;
      top: 0;
      left: $width-unit * 3;

      svg {
        height: 100%;
      }
    }
  }

  .map-container {
    width: 100%;
    height: 100%;
    position: relative;

    &:after {
      content: '';
      height: 50%;
      width: $width-unit * 3;
      background: black;
      position:absolute;
      bottom:0;
      left: -$width-unit * 3;
    }
  }
} 
</style>