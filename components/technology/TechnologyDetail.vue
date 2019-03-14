<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="technology-detail">
        <technology-detail-intro 
        :title="technology.fields.page_title"
        :text="technology.fields.page_summary"
        :image="technology.fields.technology_intro_image"/>
        <technology-detail-content :content="technology.fields.content"/> 
        <component 
        v-if= "technology.fields.technology_component" 
        v-for="(item,index) in technology.fields.technology_component"
        :is="item.fields.component_name"  
        :key="index"
        :item="item"/>
        <technology-detail-gallery
        :imageOne="technology.fields.technology_image_one"
        :imageTwo="technology.fields.technology_image_two"/>
        <technology-detail-references 
        :references="references"
        :imageOne="technology.fields.references_image_one"
        :imageTwo="technology.fields.references_image_two"/>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  import PageComponentDimensions from '@/components/PageComponentDimensions'
  import PageComponentList from '@/components/PageComponentList'
  import TechnologyDetailIntro from '@/components/technology/TechnologyDetailIntro'
  import TechnologyDetailContent from '@/components/technology/TechnologyDetailContent'
  import TechnologyDetailGallery from '@/components/technology/TechnologyDetailGallery'
  import TechnologyDetailReferences from '@/components/technology/TechnologyDetailReferences'
  export default {
    name: 'technology-detail',
    props: {
      technology: {
        type: Object
      }
    },
    computed: {
      references () {
        let references = this.$store.getters.References
        console.log(references)
        let technology = this.technology
        console.log(technology)
        let filtered = references.filter(function(item) {
          console.log('relation id', item.fields.reference_technology[0].id)
          console.log('technology id', technology.id)
          return item.fields.reference_technology[0].id === technology.id
        })
        console.log('filtered',filtered)
        if(filtered.length >= 1) {
          return filtered
        }
        return []
      },
    },
    components: {
      TechnologyDetailIntro,
      TechnologyDetailContent,
      TechnologyDetailGallery,
      TechnologyDetailReferences,
      PageComponentList,
      PageComponentDimensions
    }
  }
</script>

<style lang="scss" scoped>
</style>