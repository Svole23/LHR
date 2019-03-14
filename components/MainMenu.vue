<template>
  <div class="main-menu" v-view="startAnim" :class="{ clickable: isMenuOpen }">
    <main-menu-item
    ref="menuItem1"
    direction="bt"
    class="corner-container">
    <div class="corner"/>
  </main-menu-item>
  <main-menu-item
  ref="menuItem2"
  direction="lr"
  class="adress-container">
  <div class="adress">
    <p class="adress-text">Bul. Milutina Milankovića<br>120v, Beograd, Srbija</p>
    <div class="adress-contact">
      <p class="adress-phone">+381 (0)11 318 0932</p>
      <p class="adress-email">office@lhr.rs</p>
    </div>
  </div>
</main-menu-item>
<main-menu-item
ref="menuItem3"
direction="rl"
class="pattern-container">
<div class="pattern"></div>
</main-menu-item>
<main-menu-item
ref="menuItem4"
direction="rl"
class="brochure-container">
<a class="brochure"
v-for="(item,index) in brochure"
:key="index"
:href="item.fields.brochure.url" 
download>
<span class="brochure-link">skini brošuru</span>
</a>
</main-menu-item>
<main-menu-item
ref="menuItem5"
direction="tb"
class="contact-container">
<nuxt-link to="/kontakt" class="contact">
  <div class="menu-item-map"></div>
  <span class="contact-link">kontakt</span>
</nuxt-link>
</main-menu-item>
<main-menu-item
ref="menuItem6"
direction="bt"
class="main-container">
<div class="main">
  <nuxt-link
  v-for="(item, index) in navItems"
  :key="index"
  :to="item.to"
  class="main-link">
  <span class="index">{{ index + 1 | padNumber }}</span>
  <span class="main-item h2">{{ item.text }}</span>
</nuxt-link>
</div>
</main-menu-item>
</div>
</template>

<script>
  import MainMenuItem from '@/components/MainMenuItem'

  export default {
   name: 'main-menu',
   components: {
    MainMenuItem
  },
  data: () => ({
    timelineReady: false
  }),
  computed: {
    startAnim () {
      if (this.$store.state.isMenuOpen) {
        return this.start()
      } else if (this.timelineReady && !this.$store.state.isMenuOpen) {
        return this.reverse()
      }
    },
    brochure () {
      return this.$store.getters.Brochure
    },
    isMenuOpen () {
      return this.$store.state.isMenuOpen
    },
    navItems () {
      return [
      {
        to: '/',
        text: 'Home'
      },
      {
        to: '/tehnologije',
        text: 'Tehnologije i reference'
      },
      {
        to: '/oprema-i-mehanizacija',
        text: 'Oprema i mehanizacija'
      },
      {
        to: '/galerija',
        text: 'Galerija'
      },
      {
        to: '/kontakt',
        text: 'Kontakt'
      }
      ]
    },
     mainMenuItems () {
      return [
      this.$refs.menuItem1,
      this.$refs.menuItem2,
      this.$refs.menuItem3,
      this.$refs.menuItem4,
      this.$refs.menuItem5,
      this.$refs.menuItem6
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.commit('setMenuOpen', false)
    }
  },
  mounted () {
    this.initTimeline()
  },
  methods: {
    initTimeline () {
      const self = this
      this.$timeline = new TimelineMax({
        paused: true,

        onStart: () => {
          console.log('onStart', menuItems)
          this.menuItems.forEach((component, index) => {
            component.animateIn()
          })
        },
        onComplete: () => {
          console.log('onComplete')
        },
        onReverseComplete: () => {
          console.log('onReverseComplete')
        }
      })

      let adresstext = this.$el.querySelectorAll('.adress-text')
      let adresscontact = this.$el.querySelectorAll('.adress-contact')
      let brochurelink = this.$el.querySelectorAll('.brochure-link')
      let contactlink = this.$el.querySelectorAll('.contact-link')
      let mainlink = this.$el.querySelectorAll('.main-link')

      this.$timeline
      .from (adresstext, 0.5, {
        x: - 40,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (adresscontact, 0.5, {
        x: - 40,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (contactlink, 0.5, {
        y: 80,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .from (brochurelink, 0.5, {
        y: - 80,
        opacity: 0,
        ease: Power2.easeIn,
      },"-=0.5")

      .staggerFrom(mainlink, 0.5 , {
        y: 80,
        color: "black",
      },0.15,"-=0.5")

      this.timelineReady = true;
    },
    start () {
      if (!this.timelineReady) return
        this.animateMenuItemsIn()
      this.$timeline.play()
    },
    reverse () {
      this.animateMenuItemsOut()
      this.$timeline.reverse()
    },
    animateMenuItemsIn () {
      this.mainMenuItems.forEach((component, index) => {
        component.animateIn()
      })
    },
    animateMenuItemsOut () {
      this.mainMenuItems.forEach((component, index) => {
        component.animateOut()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  pointer-events: none;
  z-index: 998;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    display: grid;
    height: 100vh;
    grid-template-columns: 20% 30% auto;
    grid-template-rows: 40% 20% 40%;
    grid-template-areas:
    "corner address main"
    "pattern map main"
    "brochure map main";
  }

  .corner-container {
    grid-area: corner;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .adress-container {
    grid-area: address;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .pattern-container {
    grid-area: pattern;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .brochure-container {
    grid-area: brochure;
    overflow: hidden;
    display: none;
    cursor: pointer;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .contact-container {
    grid-area: map;
    overflow: hidden;
    display: none;

    @include media-breakpoint-up(md) {
      display: block;
    }
  }

  .main-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    @include media-breakpoint-up(md) {
      grid-area: main;
      display: block;
    }
  }
}


.main-menu {

  .corner {
    background: white;
    width: 100%;
    height: 100%;
  }

  .adress {
    background: $primary;
    color: white;
    padding: $content-left/2 $content-left $content-left/2 $content-left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transform-origin: 0 50%;
    z-index: 998;
    width: 100%;
    height: 100%;
    font-family: $font-family-monospace;

    @include media-breakpoint-up(md) {
      padding-top: $width-unit * 2;
      padding-bottom: $width-unit * 2;
    }

    @include media-breakpoint-up(lg) {
      padding: 0;
      padding-top: $content-left;
      padding-left: $content-left / 2;
      padding-bottom: $content-left;
    }

    @include media-breakpoint-up(xl) {
      padding: 0;
      padding-top: $content-left / 2;
      padding-left: $content-left;
      padding-bottom: $content-left / 2;
    }

    .adress-contact {
      .adress-email {
        margin:0;
      }
    }
  }

  .pattern {
    background: #ffc0a5;
    transform-origin: 100% 50%;
    z-index: 998;
    width: 100%;
    height: 100%;
  }

  .brochure {
    background: #bdbdbd;
    position: relative;
    overflow: hidden;
    transform-origin: 100% 50%;
    z-index: 998;
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: none;
    color: black;

    .brochure-link {
      position: absolute;
      transform: rotate(-90deg);
      left: - 1rem;
      bottom: 5rem;
      font-size: 14px;
      font-family: $font-family-monospace;

      &:after {
       content: '';
       height: 1px;
       width: $width-unit * 2;
       background: black;
       position: absolute;
       bottom: 45%;
       left: 9rem;
     }
   }
 }

 .contact {
  position: relative;
  overflow: hidden;
  transform-origin: 50% 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: black;
  background: url('~assets/img/lhr-map-preview.png') no-repeat center center;
  background-size: cover;
  background-position: center;
  display: block;
  text-decoration: none;
  color: black;

  .menu-item-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
   }

   .contact-link {
    position: absolute;
    transform: rotate(90deg);
    right: 1rem;
    top: 5rem;
    font-size: 14px;
    font-family: $font-family-monospace;

    &:after {
     content: '';
     height: 1px;
     width: $width-unit * 3;
     background: black;
     position: absolute;
     bottom: 45%;
     left: 5rem;
   }
 }
}

.main {
  background: black;
  padding-top: $width-unit * 4.3;
  padding-left: $content-left * 1.5;
  overflow: hidden;
  transform-origin: 50% 100%;
  z-index: 998;
  width: 100%;
  height: 100%;

  @include media-breakpoint-up(sm) {
    padding-top: $width-unit * 4.3;
    padding-left: $content-left * 1.5;
  }

  @include media-breakpoint-up(md) {
    padding-top: $width-unit * 1.5;
    padding-left: $content-left;
  }

  @include media-breakpoint-up(lg) {
    padding-top: $width-unit * 1.5;
  }

  @include media-breakpoint-up(xxl) {
    padding-top: $width-unit;
  }

  .main-link {
    text-decoration: none;
    display: block;
    color: white;
    display: flex;
    flex-direction: row;
    margin-bottom: $content-left;
    opacity: 1;

    @include media-breakpoint-up(sm) {
      margin-bottom: $content-left / 2;
    }

    @include media-breakpoint-up(lg) {
      opacity: 0.3;
    }

    .main-item {
      width: auto;
      position: relative;
      font-size: 1.5rem;

      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
      }

      @include media-breakpoint-up(xxl) {
        :hover{
          &:after {
            content: '';
            height: 1px;
            width: $width-unit * 6;
            background: white;
            position: absolute;
            right: calc(1px -#{$width-unit * 6} - 2rem);
            bottom: 45%;
            transform-origin: 0 50%;
            transition: 1s ease-out;
          }
        }
      }
    }

    .index {
      font-family: $font-family-monospace;
      padding-right: $content-left / 2;
    }
  }

  .main-link:hover {
    opacity: 1;

    .main-item {

      &:after {
        content: '';
        height: 1px;
        width: $width-unit * 6;
        background: white;
        position: absolute;
        right: calc(1px -#{$width-unit * 6} - 2rem);
        bottom: 45%;
        transform:scaleX(1);
      }
    }
  }
}
}

.clickable {
  pointer-events: all;
}
</style>
