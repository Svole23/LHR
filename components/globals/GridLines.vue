<template>
  <div class="grid-lines__container row no-gutters">
    <div class="grid-line__first" :class="isLightFirst"></div>
    <div class="grid-line" :class="isLight"></div>
    <div class="grid-line" :class="isLight"></div>
    <div class="grid-line" :class="isLight"></div>
    <div class="grid-line" :class="isLight"></div>
    <div class="grid-line__last" :class="isLight"></div>
  </div>
</template>

<script>
  export default {
    name: 'grid-lines',
    props: {
      light: {
        type: Boolean,
        default: false

      }
    },
    computed: {
      isLight () {
        if(this.light) {
          return 'light'
        }

        return 'dark'
      },
      isLightFirst () {
        if(this.light) {
          return 'light__first'
        }

        return 'dark__first'
      }
    }
  }
</script>

<style lang="scss" scoped>
.grid-lines__container {
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  display:flex;
  flex-direction: row;
  background: transparent;
  padding-left: $width-unit;
  padding-right: $width-unit;
  z-index: 4;
  justify-content: space-between;
  pointer-events: none;
  display: none;

  @include media-breakpoint-up(md) {
    display:flex;
  }

  .grid-line__first {
    width: 1px;
    height: 100%;
    margin-right: 3px;
  }

  .grid-line__last {
    width: 1px;
    height: 100%;
  }

  .grid-line {
    width: 1px;
    height: 100%;
  }
}

.light__first {
    border-left: 1px solid $grid-white;
  }

.light {
  border-right: 1px solid $grid-white;
} 

.dark__first {
  border-left: 1px solid $grid-gray;
}

.dark {
  border-right: 1px solid $grid-gray;
}
</style>