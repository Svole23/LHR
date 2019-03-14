<template>
  <div class="hero-bar-menu">
    <div class="menu">
      <nuxt-link to="/tehnologije" class="menu-item"> {{text1}} </nuxt-link>
      <nuxt-link to="/oprema-i-mehanizacija" class="menu-item"> {{text2}} </nuxt-link>
      <nuxt-link to="/kontakt" class="menu-item"> {{text3}} </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hero-bar-menu',
    data () {
      return {
        text1: 'Tehnologije i reference',
        text2: 'Oprema i mehanizacija',
        text3: 'Kontakt'
      }
    }
  }
</script>

<style lang="scss" scoped>
.hero-bar-menu {
  display: none;
  width: 100%;
  height: 100%;
  padding-right: $width-unit;

  @include media-breakpoint-up(lg) {
    display: block;
  }

  @include media-breakpoint-up(xl) {
    padding-right: $width-unit * 2;
  }

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    padding-left: $width-unit;
    flex-direction: row;
    align-items: center;

    .menu-item {
      display: block;
      margin-right: 2rem;
      text-decoration: none;
      color: black;
      position: relative;
      font-size: 16px;
      font-weight: bold;
      font-family: $font-family-monospace;
      text-transform: uppercase;

      @include media-breakpoint-up(xl) {
        margin-right: 3rem;
        font-size: 14px;  

        &:after {
          content: '';
          height: 1px;
          width: 100%;
          background: $primary;
          position: absolute;
          bottom: - 4px;
          left: 0;
        }
      }
    }
  }
}
</style>
