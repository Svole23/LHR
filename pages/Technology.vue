<template>
  <div class="page page--technology">
  	<section-technology-hero 
      :title="model.fields.title"
      :image="model.fields.technology_hero_image"/>
    <div class="technology-detail__container">
      <technology-detail  
        :technology="model"/>
    </div>
  </div>
</template>

<script>
import SectionTechnologyHero from '@/components/technology/SectionTechnologyHero'
import TechnologyDetail from '@/components/technology/TechnologyDetail'
export default {
  name: 'technology',
  components: {
  	SectionTechnologyHero,
    TechnologyDetail
  },
  computed: {
    //relations () {
    //  console.log(this.model.fields)
    //  return this.model.fields
    //}
  },
  props: [
    'model'
  ]
}
</script>

<style lang="scss" scoped>
.technology-detail__container {
  padding-top: $width-unit * 3;

  @include media-breakpoint-up(sm) {
    padding-top: $width-unit;
  }

  @include media-breakpoint-up(xxl) {
    padding-top: 0;
  }
}
</style>