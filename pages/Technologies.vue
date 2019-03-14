<template>
  <div class="page page--technologies">
   <section-technologies-hero :title ="model.fields.technologies_title"/>
   <section-technologies-intro :text="model.fields.page_summary"/>
   <section-technologies-list/>
  </div>
</template>

<script>
import SectionTechnologiesHero from '@/components/technologies/SectionTechnologiesHero'
import SectionTechnologiesIntro from '@/components/technologies/SectionTechnologiesIntro'
import SectionTechnologiesList from '@/components/technologies/SectionTechnologiesList'
export default {
  name: 'technologies',
  components: {
  	SectionTechnologiesHero,
  	SectionTechnologiesIntro,
  	SectionTechnologiesList
  },
  props: [
    'model'
  ]
}
</script>

<style lang="scss" scoped>
</style>