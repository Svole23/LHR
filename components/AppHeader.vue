<template>
  <div class="app-header__wrapper">
    <div class="app-header">
      <div class="app-header__container">
        <div class="logo-wrapper">
          <nuxt-link to="/" class="logo-link">
            <logo/>
          </nuxt-link>
        </div>
        <div class="hamburger-container" v-on:click="open">
          <hamburger />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import Hamburger from '@/components/Hamburger'
  import MainMenu from '@/components/MainMenu'
  export default {
    name: 'app-header',
    data () {
      return {
        menuOpen: false
      }
    },
    components: {
      Logo,
      Hamburger,
      MainMenu
    },
    methods: {
      open () {
        this.menuOpen = !this.menuOpen
      },
      setActiveLocation (input) {
        // console.log('method for commit',input)
        this.$store.commit('setMenuOpen', input)
      }
    },
    watch: {
      menuOpen (newvalue,oldvalue) {
        this.$store.commit('setMenuOpen',newvalue)
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-header {
  position:absolute;
  top:0;
  left:0;
  background: transparent;
  width: 100%;
  height: 80px;
  padding-left: $width-unit;
  padding-right: $width-unit;

  &:after {
    content: '';
    height: 1px;
    width: 100%;
    background:$grid-white;
    position: absolute;
    left:0;
    bottom:0;
    z-index: 20;
  }

  @include media-breakpoint-up(sm) {
    height: 120px;
  }

  @include media-breakpoint-up(md) {
    padding-left: $width-unit;
  }

  @include media-breakpoint-up(xl) {
    width: 100%;
    height: $width-unit;
    padding-left: $width-unit;
    padding-right: 0;
  }

  .app-header__container {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      position:relative;
      height: 100%;
      width: $width-unit * 3;
      background: white;
      padding: 0;
      z-index: 800;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 2;
      }

      @include media-breakpoint-up(lg) {
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      @include media-breakpoint-up(xl) {
        width: $width-unit * 2; 
      }

      .logo-link {
        display: block;
        width: 100%;
        height: 100%;
        position:relative;
        z-index: 30;
      }
    }

    .hamburger-container {
      position:relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: $width-unit * 3;
      background: black;
      z-index: 999;
      cursor: pointer;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 2;
      }

      @include media-breakpoint-up(lg) {
        width:  $width-unit * 2;
      }

      @include media-breakpoint-up(xl) {
        width: $width-unit;
      }
    }
  }
}
</style>
