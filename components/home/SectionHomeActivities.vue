<template>
  <page-section>
    <grid-lines/>
    <section-home-activity 
    v-for="(activity,index) in activities" 
    :key="index"
    :index="index" 
    :activity="activity"
    :length="activities.length"/>
    <div class="svg-div">
      <LinesSvg class="svg"/>
    </div>
  </page-section> 
</template>

<script>
  import SectionHomeActivity from '@/components/home/SectionHomeActivity'
  import LinesSvg from '@/assets/svg/patterns/diagonal-dashed-lines-1000x200.svg'
  export default {
    name: 'section-home-activities',
    components: {
      SectionHomeActivity,
      LinesSvg
    },
    computed: {
      activities () {
        let activities = this.$store.getters.Activities
        return activities.sort((a, b) => a.fields.order - b.fields.order)
      }
    }
  }
</script>

<style lang="scss" scoped>
.svg-div {
  width: calc(100% - #{$width-unit * 4});
  height: $width-unit;
  position:absolute;
  bottom: - $width-unit;
  left: $width-unit;
  overflow: hidden;
}
</style>