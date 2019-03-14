<template>
  <div class="technology--detail-gallery row no-gutters" :class="this.$props.layout">
    <div class="image-left__container col-12 col-lg-6">
      <div class="image-container">
        <img class="image" :src="imageSrc1(imageOne)">
      </div>
    </div>
    <div class="image-right__container col-12 col-lg-6">
      <div class="image-container">
        <img class="image" :src="imageSrc2(imageTwo)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'technology-detail-gallery',
    props: {
      layout: {
        type: String,
        default: 'left'
      },
      imageOne: {
        type: Object
      },
      imageTwo: {
        type: Object
      }
    },
    methods: {
      imageSrc1 (input) {
        if(input) {
          return this.$options.filters.fileApi(input.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
      imageSrc2 (input) {
        if(input) {
          return this.$options.filters.fileApi(input.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
    }
  }
</script>

<style lang="scss" scoped>
.technology--detail-gallery {
  margin-left: -$width-unit;
  margin-right: -$width-unit;
  padding-bottom: $section-bottom;
  padding-top: $width-unit * 2;

  @include media-breakpoint-up(md) {
    padding-top: 0;
  }

  @include media-breakpoint-up(lg) {
    padding-bottom: $section-bottom;
    margin-top: $width-unit;
  }
}

.right {
  .image-right__container {
    position: relative;
    z-index: 6;
    padding-top: 0;

    @include media-breakpoint-up(lg) {
      padding-top: $width-unit * 2;
    }

    .image-container {
      width: 80%;
      height: 25vh;
      background: gray;
      overflow: hidden;
      
      @include media-breakpoint-up(sm) {
        width: 50%;
        height: 35vh;
      }

      @include media-breakpoint-up(lg) {
         width: 100%;
        height: $width-unit * 4;
        padding: 0;

        &:before {
          content: '';
          height: 1px;
          width: 100vw;
          background: $grid-gray;
          position: absolute;
          bottom: 0;
          right: - $width-unit * 5;
          z-index: - 1;
        }
      }

      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .image-left__container {
    position: relative;
    z-index: 6;
    padding-top: 1rem;
    padding-left: 20%;

    @include media-breakpoint-up(sm) {
      padding-left: 50%;
    }

    .image-container {
      width: auto;
      height: 25vh;
      background: gray;
      overflow: hidden;

      @include media-breakpoint-up(sm) {
        height: 35vh;
      }

      @include media-breakpoint-up(lg) {
        width: 100%;
        height: $width-unit * 4;
        padding: 0;
      }

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        background: $grid-gray;
        position: absolute;
        bottom: 0;
        right: - $width-unit * 5;
        z-index: - 1;
      }

      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

  }
}

.left {
  .image-left__container {
    position: relative;
    z-index: 6;
    padding-top: 0;

    .image-container {
      width: 80%;
      height: 25vh;
      background: gray;
      overflow: hidden;

      @include media-breakpoint-up(sm) {
        width: 50%;
        height: 35vh;
      }

      @include media-breakpoint-up(lg) {
        width: 100%;
        height: $width-unit * 4;
        padding: 0;

        &:before {
          content: '';
          height: 1px;
          width: 100vw;
          background: $grid-gray;
          position: absolute;
          bottom: 0;
          right: - $width-unit * 5;
          z-index: - 1;
        }
      }

      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .image-right__container {
    position: relative;
    z-index: 6;
    padding-top: 1rem;
    padding-left: 20%;

    @include media-breakpoint-up(sm) {
      padding-left: 50%;
    }

    @include media-breakpoint-up(lg) {
      padding: 0;
      padding-top: $width-unit * 2;
    }

    .image-container {
      width: auto;
      height: 25vh;
      background: gray;
      overflow: hidden;

      @include media-breakpoint-up(sm) {
        height: 35vh;
      }

      @include media-breakpoint-up(lg) {
        width: 100%;
        height: $width-unit * 4;
      }

      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>