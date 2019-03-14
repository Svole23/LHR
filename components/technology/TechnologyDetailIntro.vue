<template>
  <div class="technology--detail-intro row no-gutters">
    <div class="intro-content col-lg-9">
      <div class="intro-header__container">
        <span class="intro-header">{{title}}</span>
      </div>
      <h3 class="intro-title">{{title}}</h3>
      <div class="intro-text lead" v-html="text"/>
    </div>
    <div class="intro-image__container">
      <div class="inner-container">
        <img class="intro-image" :src="imageSrc(image)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'technology-detail-intro',
    props: {
      title: {
        type: String
      },
      text: {
        type: String
      },
      image: {
        type: Object
      }
    },
    methods: {
      imageSrc (input) {
        if(input) {
          return this.$options.filters.fileApi(input.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
    }
  }
</script>

<style lang="scss" scoped>

.technology--detail-intro {
  position: relative;
  margin-bottom: $width-unit * 9;
  padding-bottom: $width-unit;
  z-index: 6;

  @include media-breakpoint-up(sm) {
    margin-bottom: $section-bottom * 5;
  }

  @include media-breakpoint-up(xl) {
    padding-bottom: $width-unit * 2;
    margin-bottom: $section-bottom;
    padding-top: $width-unit / 2;
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 0;
    padding-top: 0;

    @include media-breakpoint-up(xl) {
      padding: $content-left;
    }

    .intro-header__container {
      height: $width-unit;
      display: flex;
      align-items: center;

      .intro-header {
        display: none;
        font-size: 12px;
        color: $primary;
      }
    }

    .intro-title {
      padding-bottom: 3rem;
    }
  }

  .intro-image__container {
    width: 100%;
    height: 40vh;
    position: absolute;
    right: 0;
    bottom: - 40vh;
    z-index: - 1;

    .inner-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &:after { 
      display: none;
    }

    &:before {
      display: none;
    }
  }

  .intro-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
} 

@include media-breakpoint-up(xl) {
  .technology--detail-intro {
    .intro-image__container {
      width: $width-unit * 6.5;
      height: 65%;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: - 1;
      top: auto;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: -$width-unit;
        right: 0;
        height:  $width-unit;
        width: $width-unit * 2;
        background: radial-gradient($secondary 15%, transparent 15%) 1px 1px,
        radial-gradient(rgba(255,255,255,.1) 15%, transparent 15%) 1px 1px;
        background-color:transparent;
        background-size:16px 16px;

      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: - $width-unit;
        height:  $width-unit * 2;
        width: $width-unit;
        background: radial-gradient($secondary 15%, transparent 15%) 1px 1px,
        radial-gradient(rgba(255,255,255,.1) 15%, transparent 15%) 1px 1px;
        background-color:transparent;
        background-size:16px 16px;
      }

      .intro-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>