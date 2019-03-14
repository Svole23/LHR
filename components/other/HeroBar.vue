<template>
  <div class="hero-bar" :class="{column:isText}" :style="{color:color, background:background}">
    <span class="hero-bar__header" v-if="header">{{header}}</span>
    <div class="hero-bar__text" v-if="isText" v-html="text"/>
    <h1 class="hero-bar__text2" v-if="isText">{{title}}</h1>
    <hero-bar-menu v-if="isMenu"/>
    <div class="hero-bar__box"/>
  </div>
</template>

<script>
  import HeroBarMenu from '@/components/other/HeroBarMenu'

  export default {
    name: 'hero-bar',
    props: {
      isMenu: {
        type: Boolean,
        default:true
      },
      title: {
        type: String
      },
      text: {
        type: String,
      },
      color: {
        type: String
      },
      header: {
        type: String
      },
      background: {
        type: String
      }
    },
    computed: {
      isText () {
        if(!this.isMenu) {
          return true
        }
        return false
      }
    },
    components: {
      HeroBarMenu
    }
  }
</script>

<style lang="scss" scoped>
.hero-bar {
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  position:relative;
  overflow: hidden;
  padding-top: 1.2rem;
  padding-bottom: 1rem;
  z-index: 40;

  @include media-breakpoint-up(md) {
    padding-top: 2rem;
    padding-bottom: 1rem;
    background: transparent;
  }

  @include media-breakpoint-up(lg) {
    padding-top: 2rem;
    background: white;
  }

  @include media-breakpoint-up(xl) {
    flex-direction: row;
    position:relative;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .hero-bar__box {
    display: none;
    position:absolute;
    right:0;

    @include media-breakpoint-up(xl) {
      height: 90%;
      min-width: $width-unit;
      width: $width-unit;
      background: $primary;
      top: 0;
      display: block;
    }
  }

  .hero-bar__text2 {  
    font-size: 20px;
    margin: 0;

    @include media-breakpoint-up(md) {  
      font-size: 28px;
      margin-bottom: 16px;
    }

    @include media-breakpoint-up(xl) {
      font-size: 46px;
      line-height: 4rem;
    }
  }
}

.column {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position:relative;
  background: $primary;
  padding-left: $content-left;


  .hero-bar__header {
    position: absolute;
    top: 0.3rem;
    left: $content-left;
    font-size: 11px;
    font-family: $font-family-monospace;

    @include media-breakpoint-up(md) {
      position: absolute;
      top: 0.7rem;
      left: $content-left;
      margin: 0;
    }

    @include media-breakpoint-up(lg) {
      position: absolute;
      top: 1rem;
      left: $content-left;
      margin: 0;
    }

    @include media-breakpoint-up(xl) {
      position: absolute;
      top: 2.6rem;
      left: $content-left;
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>
