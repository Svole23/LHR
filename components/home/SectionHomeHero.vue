<template>
  <section class="section--home-hero">
    <grid-lines :light="true"/>
    <div class="home-hero__video">
      <video autoplay muted loop id="video">
        <source src="@/assets/video/test.webm.mp4" type="video/mp4">
      </video>
    </div>
    <div class="home-hero__bar">
      <hero-bar/>
    </div>
  </section>
</template>

<script>
import HeroBar from '@/components/other/HeroBar'

export default {
  name: 'section-home-hero',
  components: {
    HeroBar
  }
}
</script>

  <style lang="scss" scoped>
  .section--home-hero {
    width: 100%;
    height: auto;
    position: relative;

    @include media-breakpoint-up(xl) {
      width: 100%;
      height: auto;
      position: relative;
    }
    .home-hero__video {
      height: 50vh;
      width: 100vw;
      overflow: hidden;
      position: relative;

      @include media-breakpoint-up(xl) {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
      }

      #video {
        min-width: 100vw;
        min-height: 40vh;
        flex:center center;
        z-index: 998;

        @include media-breakpoint-up(md) {
          min-height: 100vh;
        }
      }
    }
  }
  .home-hero__bar {
    z-index: 5;
    padding-left: 0;
    position: absolute;
    bottom: - $width-unit * 2;
    right: 0;
    width: 100%;
    height: $width-unit * 2;

    @include media-breakpoint-up(lg) {
      bottom: 0;
      height: $width-unit;
      padding-left: $width-unit * 3;
    }

    @include media-breakpoint-up(xl) {
      z-index: 5;
      padding-left: $width-unit * 3;
      position: absolute;
      bottom:0;
      right: 0;
      width: 100%;
      height: $width-unit;
    }
  }
</style>
