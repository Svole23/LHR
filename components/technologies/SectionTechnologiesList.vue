<template>
  <section class="section-tech-list">
    <section-technologies-list-item 
    v-for="(technology,index) in technologies" 
    :key="index"
    :technology="technology"
    :index="index"/>
    <grid-lines/>
  </section>
</template>

<script>
  import SectionTechnologiesListItem from '@/components/technologies/SectionTechnologiesListItem'
  export default {
    name: 'section-technologies-list',
    components: {
      SectionTechnologiesListItem
    },
    computed: {
      technologies () {
        return this.$store.getters.Technologies
      }
    }
  }
</script>

<style lang="scss" scoped>
@include media-breakpoint-up(lg) {
  .section-tech-list {
    position: relative;
    padding-left: $width-unit * 3;
    z-index:3;
    padding-bottom: $width-unit;
  }
}
</style>