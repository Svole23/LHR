<template>
  <nuxt-link class="technology-link" :to="technology.url">
    <div
    class="technology-list-item" 
    :class="{'technology-list-item--right': layoutRight}">
    <div class="technology-content">
      <div class="technology-index__container">
        <span class="technology-index numeric">{{ index + 1 | padNumber }}</span>
      </div>
      <h2 class="technology-title">{{technology.fields.title}}</h2>
      <div class="technology-text" v-html="technology.fields.technologies_page_text"/>
      <span class="more">
      <span class="more-text">Vidi još</span>
      <Arrow class="arrow"/>
    </span>
    </div>
    <div class="technology-media">
      <img  
      :src="imageSrc(technology)"
      class="image"
      ref="image">
    </div>
  </div>  
</nuxt-link>
</template>

<script>
  import Arrow from '@/assets/svg/arrows/arrow.svg'
  export default {
    name: 'section-technologies-list-item',
    data () {
      return {
        activeIndex: null
      }
    },
    components: {
      Arrow
    },
    props: {
      technology: {
        type: Object
      },
      index: {
        type: Number
      }
    },
    computed: {
      hasCategory () {
        if(this.technology.subcategory) {
          return true
        }
        return false
      },
      
      layoutRight () {
        return this.index % 2 !== 0
      }
    },
    methods: {
      imageSrc (input) {
        if(input.fields.technologies_page_image) {
          return this.$options.filters.fileApi(input.fields.technologies_page_image.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
      changeActiveIndex (input) {
        console.log(this.activeIndex)
        this.activeIndex = input
      },
      checkIndex (input) {
        if(this.activeIndex === input) {
          let image = this.$refs.image
          image.style.opacity = "0"
          return true
        }
        return false
      },
      changeActiveImage () {
        this.activeIndex = null
        let image = this.$refs.image
        image.style.opacity = "1"
      }
    }
  }
</script>

<style lang="scss" scoped>
.technology-link {
  text-decoration: none;
  cursor: pointer;
  color: black;
}
.technology-list-item {
  position:relative;
  display: flex;
  flex-direction: column;
  z-index: 3;
  padding-top: $width-unit * 2;
  padding-bottom: $width-unit * 2;

  @include media-breakpoint-up(sm) {
    padding-top: $width-unit;
    padding-bottom: $width-unit;
    flex-direction: row;
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: $section-bottom / 2;
    padding-bottom: 0;
  }

  @include media-breakpoint-up(xl) {
    margin-bottom: 0;
  }

  .more {
      display: none;
      flex-direction: row;
      position: relative;
      z-index: 99;
      max-width: 60px;
      margin-left: $width-unit / 2;

      @include media-breakpoint-up(md) {
        display: flex;
      }

      .more-text {
        color: $primary;
        font-size: 16px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;
      }
    }

  .technology-content {
    order: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(lg) {
      width: calc(15px + #{$width-unit * 4} - 25px);
      min-width: calc(15px + #{$width-unit * 4} - 25px);
      max-width: calc(15px + #{$width-unit * 4} - 25px);
    }

    .technology-index__container {
      width: $width-unit;
      height: $width-unit;
      position:relative;
      display: flex;
      align-items: center;
      padding-left: $width-unit / 2;

      &:after {
        content: '';
        width: 100vw;
        height: 1px;
        background: $grid-gray;
        position: absolute;
        bottom:0;
        left: - $width-unit * 3;
      }

      &:before {
        content: '';
        width: $width-unit * 1.5;
        height: 1px;
        background: $grid-gray;
        position: absolute;
        top:0;
        left: -1px;
      }

      .technology-index {
        display: block;
        font-size: 60px;
        color: $grid-gray;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: $grid-gray;

        @include media-breakpoint-up(lg) {
          font-size: 70px;
        }
      }      
    }

    .technology-title {
      padding-left: $width-unit / 2;
      padding-top: $content-left / 2;
      padding-bottom: $content-left / 2;
    }

    .category-list {
      padding-left: $width-unit / 2;
      padding-right: $width-unit /2;

      .category-item {
        display:flex;
        flex-direction: row;
        list-style: none;
        padding-bottom: 0.5rem;
        color: gray;
        position: relative;

        .item-title {
          text-decoration: none;
          color:inherit;
        }

        .item-index {
          display: block;
          margin-right: $width-unit / 2;
        }
      }

      .category-item:hover {
        color: black;

        &:after {
          content: '';
          height: 1px;
          width: $width-unit * 3;
          background: black;
          position: absolute;
          right: - $width-unit * 2.2;
          top: 30%;
        }
      }
    }
    .technology-text {
      padding-left: $width-unit / 2;
      padding-right: $width-unit / 2;
    }
  }

  .technology-media {
    order: 2;
    width: 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;

    @include media-breakpoint-up(lg) {
      width: $width-unit * 5;
      min-width: $width-unit * 5;
      max-width: $width-unit * 5;
      height: $width-unit * 4;
    }

    .image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .active {
      z-index: 8;
      opacity: 1;
      transition: 0.4s ease-in;
    }
  }
}

.technology-list-item--right {
  position:relative;
  display: flex;
  flex-direction: column;
  z-index: 3;
  padding-top: $width-unit * 2;
  padding-bottom: $width-unit * 2;

  @include media-breakpoint-up(sm) {
    padding-top: $width-unit;
    padding-bottom: $width-unit;
    flex-direction: row;
  }

  @include media-breakpoint-up(lg) {
    margin-bottom: $section-bottom / 2;
    padding-bottom: 0;
  }

  @include media-breakpoint-up(xl) {
    margin-bottom: 0;
  }


  .more {
      display: none;
      flex-direction: row;
      position: relative;
      z-index: 99;
      max-width: 60px;
      margin-left: $width-unit / 2;

      @include media-breakpoint-up(md) {
        display: flex;
      }

      .more-text {
        color: $primary;
        font-size: 16px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;
      }
    }

  .technology-content {
    order: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(sm) {
      order: 2;
    }

    @include media-breakpoint-up(lg) {
      width: $width-unit * 5;
      min-width: $width-unit * 5;
      max-width: $width-unit * 5;
    }

    .technology-index__container {
      width: $width-unit;
      height: $width-unit;
      position:relative;
      display: flex;
      align-items: center;
      padding-left: $width-unit / 2;

      @include media-breakpoint-up(lg) {
        align-self: right;
      }

      &:after {
        content: '';
        width: 100vw;
        height: 1px;
        background: $grid-gray;
        position: absolute;
        bottom:0;
        left: - $width-unit * 3;
      }

      &:before {
        content: '';
        width: $width-unit * 1.5;
        height: 1px;
        background: $grid-gray;
        position: absolute;
        top:0;
        left: -1px;
      }

      .technology-index {
        display: block;
        font-size: 60px;
        color: $grid-gray;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: $grid-gray;

        @include media-breakpoint-up(lg) {
          font-size: 70px;
        }  
      }  
    }

    .technology-title {
      padding-left: $width-unit / 2;
      padding-top: $content-left / 2;
      padding-bottom: $content-left / 2;
    }

    .category-list {
      padding-left: $width-unit / 2;
      padding-right: $width-unit /2;

      .category-item {
        display:flex;
        flex-direction: row;
        list-style: none;
        padding-bottom: 0.5rem;
        color: gray;
        position: relative;

        .item-title {
          text-decoration: none;
          color:inherit;
        }

        .item-index {
          display: block;
          margin-right: $width-unit / 2;
        }
      }

      .category-item:hover {
        color: black;

        &:after {
          content: '';
          height: 1px;
          width: $width-unit * 3;
          background: black;
          position: absolute;
          right: - $width-unit * 2.2;
          top: 30%;
        }
      }
    }

    .technology-text {
      padding-left: $width-unit / 2;
      padding-right: $width-unit / 2;
    }
  }

  .technology-media {
    order: 2;
    width: 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;

    @include media-breakpoint-up(sm) {
      order: 1;
    }

    @include media-breakpoint-up(lg) {
      width: calc(15px + #{$width-unit * 4} - 25px);
      min-width: calc(15px + #{$width-unit * 4} - 25px);
      max-width: calc(15px + #{$width-unit * 4} - 25px);
    }

    .image {
      object-fit: cover;
    width: 100%;
    height: 100%;
    }
    
    .active {
      z-index: 8;
      opacity: 1;
      transition: 0.4s ease-in;

    }
  }
} 

.technology-list-item:nth-last-of-type() {
  padding-bottom: 0;
}
</style>