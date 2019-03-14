<template>
  <div class="technology--detail-content" :class="{ dark:this.$props.dark, none:isVisible }">
    <div class="detail-content" v-html="content"/>
  </div>
</template>

<script>
  export default {
    name: 'technology-detail-content',
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      content: {
        type: String
      }
    },
    computed: {
      isVisible () {
        if(!this.content) {
          return 'none'
        }
        return ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.technology--detail-content {
  padding-bottom: $section-bottom;
  padding-top: $content-left * 3;

  @include media-breakpoint-up(sm) {
    padding: 0;
    padding-bottom: $section-bottom;
  }

  @include media-breakpoint-up(lg) {   
    padding-bottom: $width-unit;
  }

  @include media-breakpoint-up(xl) {
    padding-left: $content-left;
    padding-right: $content-left;
  }
} 

.dark {
  background: black;
  color: white;
}

.none {
  display: none;
}
</style>