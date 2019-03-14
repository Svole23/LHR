<template>
  <section class="section--technologies-hero">
    <grid-lines :light="true"/>
    <div class="technologies-hero__image">
      <img class="hero-image">
      <div class="technologies-hero__bar">
        <hero-bar 
        :isMenu="false" 
        :text="title"
        color="white"
        :isRed="true"/>
      </div>
    </div>
  </section>
</template>

<script>
  import HeroBar from '@/components/other/HeroBar'
  export default {
    name: 'section-technologies-hero',
    props: {
      title: {
        type: String
      }
    },
    components: {
      HeroBar
    }
  }
</script>

<style lang="scss" scoped>
.section--technologies-hero {
  width: 100%;
  height: 50vh;

  @include media-breakpoint-up(sm) {
    height: 50vh;
  }

  @include media-breakpoint-up(xl) {
    height: 100vh;
  }

  .technologies-hero__image {
    height: 100%;
    width: 100%;
    position: relative;
    background: gray;

    .hero-image {
      object-fit: cover;
      width: 100%;
    }
  }
}
.technologies-hero__bar {
  z-index: 5;
  padding-left: $width-unit;
  position: absolute;
  bottom: - 1rem;
  width: 100%;
  padding-left: $width-unit * 3;

  @include media-breakpoint-up(md) {
    bottom: - 2.666rem;
  }

  @include media-breakpoint-up(xl) {
    bottom: - 2.666rem;
  }


  &:after {
    content: '';
    height: 1px;
    width: 100%;
    background:$grid-white;
    position: absolute;
    top:0;
    left: 0;
    z-index: 40;
  }
}
</style>