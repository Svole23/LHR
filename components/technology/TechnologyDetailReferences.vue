<template>
  <div class="technology--detail-references">
    <references-header 
    :amount="categories.length" 
    :counter="references.length"
    :imageOne="imageOne"
    :imageTwo="imageTwo"/>
    <div class="reference-list__container">
      <references-list  
      v-for="(category,index) in categories"
      :key="index" 
      :title="category.fields.title"
      :index="index"
      :references="getRefs(category)"
      />
    </div>
  </div>
</template>

<script>
  import ReferencesHeader from '@/components/technology/ReferencesHeader'
  import ReferencesList from '@/components/technology/ReferencesList'
  export default {
    name: 'technology-detail-references',
    components: {
      ReferencesHeader,
      ReferencesList
    },
    props: {
      references: {
        type: Array
      },
      imageOne: {
        type: Object
      },
      imageTwo: {
        type: Object
      }
    },
    computed: {
      categories () {
        let refs = this.references
        let uniqueCategories = [];
        for ( var i = 0; i< refs.length; i++) {
          let category = refs[i].fields.reference_category;
          console.log('category from loop',category)
          if (uniqueCategories.find(c => c.id === category.id) === undefined ) {
            uniqueCategories.push(category); 
          }
        }
        return uniqueCategories
      }
    },
    methods: {
      getRefs (input) {
        let refs = this.references
        let filtered = refs.filter(function(item) {
          return item.fields.reference_category.id === input.id
        })
        return filtered
      }
    }
  }
</script>

<style lang="scss" scoped>

.technology--detail-references {
  padding-bottom: $section-bottom;
}

.reference-list__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>