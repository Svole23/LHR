<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="intro">
        <h1 class="intro-title">{{title}}</h1>
        <p class="lead" v-html="lead"/>
        <div class="intro-text" v-html="content"/>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  export default {
    name: 'section-home-intro',
    props: {
      title: {
        type: String,
      },
      lead: {
        type: String,
      },
      content: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
.intro {
  padding-top: $width-unit;

  @include media-breakpoint-up(xl) {
    padding: $width-unit;
    padding-top: $width-unit;
    padding-bottom: $width-unit;
    padding-left: $content-left;
  }

  .intro-title {
    padding-bottom: $width-unit;
    font-size: 28px;

    @include media-breakpoint-up(xl) {
      padding-bottom: 0;
      margin-bottom: $width-unit / 2;
      font-size: 56px;
    }
  }

  .lead {
    padding-bottom: 2rem;
    font-size: 16px;

    @include media-breakpoint-up(xl) {
      font-size: 21px;
    }
  }

  .intro-text  {
    padding-right: $content-left;
    font-size: 14px;

    @include media-breakpoint-up(xl) {
      font-size: 18px;
    }
  }
}
</style>
