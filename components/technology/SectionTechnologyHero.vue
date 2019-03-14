<template>
  <section class="section--technology-hero">
    <grid-lines :light="true"/>
    <div class="technology-hero__image">
      <img class="hero-image" :src="imageSrc(image)">     
    </div>
    <div class="technology-hero__bar">
      <hero-bar 
      :isMenu="false" 
      header="tehnologije i reference"
      :title="title"
      color="white"
      :isRed="true"/>
    </div>
    <div class="technology-menu">
      <div class="technology-menu-grids">
        <div class="grid-left"></div>
        <div class="grid-right"></div>
      </div>
      <div class="technology-menu__content">
        <h2 class="menu-title">Tehnologije i Reference</h2>
        <div class="menu">
          <div class="technology" 
          v-for="(item,index) in technologies"
          :key="index">
          <span class="technology-index numeric">{{ index + 1 | padNumber }}</span>
          <nuxt-link :to="item.fields.url_slug" class="technology-title" 
          :class="{ active: isActiveUrl(item.url) }">
          {{item.fields.title}}
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="technology-menu__side-div"></div>
</div>
</section>
</template>

<script>
  import HeroBar from '@/components/other/HeroBar'
  export default {
    name: 'section-technology-hero',
    props: {
      title: {
        type: String
      },
      image: {
        type: Object
      }
    },
    components: {
      HeroBar
    },
    computed: {
      technologies () {
        return this.$store.getters.Technologies
      }
    },
    methods: {
      imageSrc (input) {
        if(input) {
          return this.$options.filters.fileApi(input.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
      isActiveUrl (url) {
        return url === this.$router.currentRoute.path
      }
    }
  }
</script>

<style lang="scss" scoped>
.section--technology-hero {
  width: 100%;
  height: 50vh;
  position: relative;

  @include media-breakpoint-up(xl) {
    height: 100vh; 
  }

  .technology-hero__image {
    height: 100%;
    width: 100%;
    position: relative;
    background: gray;
    overflow: hidden;

    .hero-image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.technology-hero__bar {
  z-index: 15;
  padding-left: $width-unit;
  position: absolute;
  bottom: - 1rem;
  width: 100%;
  padding-left: $width-unit * 3;

  @include media-breakpoint-up(md) {
    bottom: -2.666rem;
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

.technology-menu {
  position: absolute;
  right: calc(1px +#{$width-unit * 3} - 4px);
  top: 0;
  width: $width-unit * 4;
  flex-direction: row;
  z-index: 6;
  display: none;

  @include media-breakpoint-up(xl) {
    display: flex;
  }

  &:after {
    content: '';
    width: calc(2px + #{$width-unit * 2} - 5px);
    height: 100%;
    background:white;
    position: absolute;
    right: calc(2px - #{$width-unit * 2} + 1px);
    top:0;
  }

  .technology-menu-grids {
    width: calc(2px + #{$width-unit * 4} - 9px);
    height: $width-unit;
    position:absolute;
    bottom: - $width-unit / 2;
    right: calc(2px - #{$width-unit * 2} + 1px);
    display: flex;
    flex-direction: row;
    z-index: 6;

    .grid-right {
      background: repeating-linear-gradient(
        $primary,
        $primary 3px,
        transparent 3px,
        transparent 8px
        );
      width: 50%;
      height: 100%;
    }

    .grid-left {
      background: repeating-linear-gradient(
        white,
        white 3px,
        transparent 3px,
        transparent 8px
        );
      width: 50%;
      height: 100%;
    }
  }
  .technology-menu__content {
    padding-top: $width-unit;
    padding-left: $content-left;
    padding-right: $content-left;
    padding-bottom: $content-left;
    width: $width-unit * 4;
    height: 100%;
    background:black;
    color: white;

    .menu-title {
      padding-bottom: $content-left / 2;
      position: relative;
      padding-top: 20px;

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        background: $grid-white;
        position: absolute;
        top: 0;
        right: - $width-unit;
      }

      &:after {
        content:'';
        position: absolute;
        bottom: 45%;
        right: - 5.3rem;
        height: 1px;
        width: 10rem;
        background:white;
      }
    }

    .menu {
      position: relative;
      display:flex;
      flex-direction: column;
      width: 50%;
      font-size: 14px;

      @include media-breakpoint-up(xl) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }

      .technology {
        display: flex;
        flex-direction: row;
        padding-bottom: 0.2rem;
        opacity: 1;

        @include media-breakpoint-up(lg) {
          width: 50%; 
        }
        
        .technology-index {
          padding-right: 1rem;
          font-size: 10px;
        }
        
        .subcategories {
          position: absolute;
          top:0;
          right: - 100%;
          display: flex;
          flex-direction: column;

          .subcategory {
            padding-bottom: 0.2rem;
          }
        }
      }
    }
  }
}

.technology-title {
  opacity: 0.5;
  text-decoration: none;
  color: white;
}

.subcategory {
  opacity: 0.5;
}

.active {
  opacity: 1;
}

span {
  display: block;
}
</style>