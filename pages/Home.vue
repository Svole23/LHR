<template>
  <div class="page page--home"> 
    <section-home-hero/>
    <section-home-intro 
      :title="model.fields.home_about_title"
      :lead="model.fields.home_about_lead"
      :content="model.fields.home_about_content"/>
    <section-home-stats/>
    <section-home-piles/>
    <section-home-walls 
      :title="model.fields.home_expertise_title"/>
    <section-home-activities/>
    <section-home-technologies 
      :title="model.fields.home_technology_title"
      :lead="model.fields.home_technology_lead"/>
    <section-home-quality/>
    <section-home-brochure/>
  </div>
</template>

<script>
import BasePage from '@/plugins/mixins/BasePage'
import SectionHomeHero from '@/components/home/SectionHomeHero'
import SectionHomeIntro from '@/components/home/SectionHomeIntro'
import SectionHomeStats from '@/components/home/SectionHomeStats'
import SectionHomePiles from '@/components/home/SectionHomePiles'
import SectionHomeWalls from '@/components/home/SectionHomeWalls'
import SectionHomeActivities from '@/components/home/SectionHomeActivities'
import SectionHomeTechnologies from '@/components/home/SectionHomeTechnologies'
import SectionHomeQuality from '@/components/home/SectionHomeQuality'
import SectionHomeBrochure from '@/components/home/SectionHomeBrochure'
export default {
  mixins: [
    BasePage
  ],
  components: {
    SectionHomeHero,
    SectionHomeIntro,
    SectionHomeStats,
    SectionHomePiles,
    SectionHomeWalls,
    SectionHomeActivities,
    SectionHomeTechnologies,
    SectionHomeQuality,
    SectionHomeBrochure,
  },
  // data: () => ({}),
  props: [
    'model'
  ]
}
</script>

<style lang="scss" scoped>
</style>
