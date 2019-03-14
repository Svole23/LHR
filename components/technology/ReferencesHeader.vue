<template>
  <div :class="getClass">
    <h2 class="references-header__title">Reference</h2>
    <div class="references-header__content">
      <div class="header-counter__container" v-view.once="startCounter">
        <counter
        ref="counter"
        :number="this.$props.counter"
        :duration="3000"
        :autoStart="false"
        tag="p"
        class="counter__numbers numeric" >
        <template slot-scope="props">{{ props.number + '+' }}</template>
      </counter>
      <p class="counter__text">Projekata</p>
    </div>
    <div class="image-left__container">
      <img class="header-image" :src="imageSrc1(imageOne)">
    </div>
    <div class="image-right__container">
      <img class="header-image" :src="imageSrc2(imageTwo)">
    </div>
  </div>
</div>
</template>

<script>
  import Counter from '@/plugins/counter.js' 
  export default {
    name: 'references-header',
    props: {
      amount: {
        type: Number
      },
      counter: {
        type: Number
      },
      imageOne: {
        type: Object
      },
      imageTwo: {
        type: Object
      },
    },
    components: {
      Counter
    },
    computed: {
      getClass() {
        if(this.amount === 2) {
          return 'references--header__counter-only'
        }
        if(this.amount === 1) {
          return 'references--header__title-only'
        }
        if(!this.amount) {
          return 'none'
        }
        return 'references--header'
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
      startCounter () {
        this.$refs.counter.start()
      }
    }
  }
</script>

<style lang="scss" scoped>

.references--header {
  padding-bottom: $section-bottom * 2;
  position: relative;
  padding-top: $width-unit * 2;

  @include media-breakpoint-up(lg) {
    padding-bottom: $section-bottom;
  }

  @include media-breakpoint-up(xl) {
    padding-top: 0;
  }

  .references-header__title {
    position: relative;
    width: $width-unit * 2;
    margin-bottom: $content-left;

    &:after {
      content: '';
      height: 1px;
      width: $width-unit * 2;
      background: black;
      position: absolute;
      left: 0;
      top: - 40px;

      @include media-breakpoint-up(sm) {
        top: 25px;
        left: $width-unit * 4.1;
        width: $width-unit * 4;
      }

      @include media-breakpoint-up(lg) {
        width: $width-unit * 3.3;
        right: - $width-unit * 3.9;
        top: 50%;
        left: auto;
      }
    }
  }

  .references-header__content {
    width: $width-unit * 3;
    height: $width-unit * 3;
    display: flex;
    flex-direction:row;
    position: absolute;
    right: 0;
    bottom: 40%;

    @include media-breakpoint-up(lg) {
      width: 100%;
      height: $width-unit * 4;
      position: relative;
    }

    .header-counter__container {
      position: relative;
      height: 100%;
      width: 100%;
      background: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0;

      @include media-breakpoint-up(lg) {
        width: $width-unit * 2;
        background: $primary;

        &:before {
          content: '';
          height: 3rem;
          width: 3rem;
          border-top: 1px solid white;
          border-left: 1px solid white;
          position:absolute;
          top: 2rem;
          left: 2rem;
        }

        &:after {
          content: '';
          height: 3rem;
          width: 3rem;
          border-bottom: 1px solid white;
          border-right: 1px solid white;
          position:absolute;
          bottom: 2rem;
          right: 2rem;
        }
      }

      .counter__text {
        margin: 0;
        color:white;

        @include media-breakpoint-up(sm) {
          font-size: 28px;
        }
      }

      .counter__numbers {
        font-size: 28px;
        color: white;
        margin: 0;

        @include media-breakpoint-up(sm) {
          font-size: 48px;
        }

        @include media-breakpoint-up(lg) {
          font-size: 70px;
        }
      }
    }
  }

  .image-left__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;
    overflow: hidden;

    @include media-breakpoint-up(lg) {
      display: block;
    }

    .header-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .image-right__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;
    overflow: hidden;

    @include media-breakpoint-up(lg) {
      display: block;
    }

    .header-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.references--header__title-only {
  padding-bottom: $section-bottom * 2;
  position: relative;
  padding-top: $width-unit * 2;

  @include media-breakpoint-up(lg) {
    padding-bottom: 0;
    padding-top: 0;
  }
  .references-header__title {
    position: relative;
    width: $width-unit * 2;
    margin-bottom: $content-left;
    
    &:after {
      content: '';
      height: 1px;
      width: $width-unit * 2;
      background: black;
      position: absolute;
      right: - $width-unit * 2;
      top: - 40px;

      @include media-breakpoint-up(lg) {
        width: $width-unit * 5;
        right: - $width-unit * 5;
        top: 50%;
      }
    }
  }

  .references-header__content {
    width: $width-unit * 3;
    height: $width-unit * 3;
    display: flex;
    flex-direction:row;
    position: absolute;
    right: 0;
    bottom: 40%;

    @include media-breakpoint-up(lg) {
      width: 100%;
      height: $width-unit * 4;    
      display: none;
    }

    .header-counter__container {
      position: relative;
      height: 100%;
      width: 100%;
      background: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0;

      @include media-breakpoint-up(lg) {
        width: $width-unit * 2;
        background: $primary;
        padding-left: 3rem;

        &:before {
          content: '';
          height: 3rem;
          width: 3rem;
          border-top: 1px solid white;
          border-left: 1px solid white;
          position:absolute;
          top: 2rem;
          left: 2rem;
        }

        &:after {
          content: '';
          height: 3rem;
          width: 3rem;
          border-bottom: 1px solid white;
          border-right: 1px solid white;
          position:absolute;
          bottom: 2rem;
          right: 2rem;
        }
      }

      .counter__text {
        margin: 0;
        color:white;
      }

      .counter__numbers {
        font-size: 28px;
        color: white;
        margin: 0;

        @include media-breakpoint-up(lg) {
          font-size: 70px;
        }
      }
    }
  }

  .image-left__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;

    .header-image {
      width: 100%;
      height: 100%;
    }
  }

  .image-right__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;
    .header-image {
      width: 100%;
      height: 100%;
    }
  }
}
.references--header__counter-only {
  padding-bottom: $section-bottom * 2;
  position: relative;
  padding-top: $width-unit * 2;

  @include media-breakpoint-up(lg) {
    padding-bottom: $section-bottom;
  }

  .references-header__title {
    position: relative;
    width: $width-unit * 2;
    margin-bottom: $content-left;
    
    &:after {
      content: '';
      height: 1px;
      width: $width-unit * 2;
      background: black;
      position: absolute;
      left: 0;
      top: - 40px;

      @include media-breakpoint-up(lg) {
        width: $width-unit * 5;
        right: -$width-unit * 5;
        top: 50%;
        left: auto;
      }
    }
  }

  .references-header__content {
    width: $width-unit * 3;
    height: $width-unit * 3;
    display: flex;
    flex-direction:row;
    position: absolute;
    right: 0;
    bottom: 40%;

    @include media-breakpoint-up(lg) {
      width: $width-unit * 2;
      height: $width-unit * 2;
      bottom: 50%;
    }

    .header-counter__container {
      position: relative;
      height: 100%;
      width: 100%;
      background: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 0;

      @include media-breakpoint-up(lg) {
        position: absolute;
        padding-left: 3rem;
        right: 0;
        top: 50%;
        bottom: auto;
        left: auto;

        &:before {
          content: '';
          height: $width-unit / 3;
          width: $width-unit / 2;
          position:absolute;
          bottom: 0;
          right: 0;
          background: repeating-linear-gradient(
            black,
            black 5px,
            white 5px,
            white 10px
            );
        }

        &:after {
          content: '';
          height: $width-unit / 3;
          width: $width-unit / 2;
          position:absolute;
          bottom: 0;
          right: -$width-unit / 2;
          background: repeating-linear-gradient(
            white,
            white 5px,
            black 5px,
            black 10px
            );
        }
      }

      .counter__text {
        margin: 0;
        color:white;
      }

      .counter__numbers {
        font-size: 28px;
        color: white;
        margin: 0;

        @include media-breakpoint-up(lg) {
          font-size: 70px;
        }
      }
    }
  }

  .image-left__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;

    .header-image {
      width: 100%;
      height: 100%;
    }
  }

  .image-right__container {
    display: none;
    height: 100%;
    width: $width-unit * 3;
    .header-image {
      width: 100%;
      height: 100%;
    }
  }
}

.none {
  display: none;
}
</style>  