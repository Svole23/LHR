<template>
  <section class="page-section">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'page-section',
    props: {}
  }
</script>

<style lang="scss" scoped>
.page-section {
  position: relative;
  width: 100%;
  padding-left: $width-unit;
  padding-right: $width-unit;
}
</style>
