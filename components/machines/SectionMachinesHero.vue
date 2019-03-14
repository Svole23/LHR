<template>
  <section class="section--machines-hero">
    <grid-lines :light="true"/>
    <div class="machines-hero__image">
      <img class="hero-image">
      <div class="machines-hero__bar">
        <hero-bar 
        :isMenu="false" 
        title="Spisak mehanizacije" 
        header="Oprema i mehanizacija"
        color="white"
        :isRed="true"/>
      </div>
    </div>
  </section>
</template>

<script>
  import HeroBar from '@/components/other/HeroBar'
  export default {
    name: 'section-machines-hero',
    components: {
      HeroBar
    }
  }
</script>

<style lang="scss" scoped>
.section--machines-hero {
  width: 100%;
  height: 40vh;

  @include media-breakpoint-up(xl) {
    height: 100vh;
  }

  .machines-hero__image {
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
.machines-hero__bar {
  z-index: 15;
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