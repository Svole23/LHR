<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="section--machines-category">
        <h2 class="category-title">{{category.fields.title}}</h2>
        <machine-card 
        v-for="(machine,index) in category.fields.category_machines"
        :key="index"
        :machine="machine"
        :index="index"
        :length="category.fields.category_machines.length"/>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  import MachineCard from '@/components/machines/MachineCard'
  export default {
    name: 'section-machines-category',
    components: {
      MachineCard 
    },
    props: {
      category: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.section--machines-category {
  padding-top: 0;

  @include media-breakpoint-up(sm) {
    padding-top: $section-bottom / 2;
  }

  @include media-breakpoint-up(xl) {
    padding-top: $section-bottom;
    padding-bottom: $section-bottom / 2;
  }

  .category-title  {
    position:relative;
    max-width:  100%;
    padding-top: $section-bottom;
    padding-bottom: $section-bottom / 2;
    margin: 0;

    @include media-breakpoint-up(sm) {
      padding-top: $section-bottom / 2;
    }

    @include media-breakpoint-up(xl) {
      position:relative;
      max-width:  $width-unit * 2.5;
      margin-bottom: $width-unit / 2;
      &:after {
        content: '';
        height: 1px;
        width: $width-unit * 4;
        background: black;
        position: absolute;
        right: - $width-unit * 4;
        top: 50%;
      }
    }
  }
}
p {
  margin-bottom: 0;
}
</style>