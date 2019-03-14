<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="intro">
        <div class="intro-text lead" v-html="text" />
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  export default {
    name: 'section-technologies-intro',
    props: {
      text: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
.intro {
  padding-top: $width-unit * 3;
  padding-bottom: $width-unit;

  @include media-breakpoint-up(sm) {
    padding-top: $width-unit * 2;
    padding-bottom: 0;
  }

  @include media-breakpoint-up(lg) {
    padding-top: $width-unit * 2;
  }

  .intro-title {
    margin-bottom: $width-unit;
    font-family: $font-family-base;
  }

  .intro-text  {
    padding-right: $content-left;
  }
}
</style>