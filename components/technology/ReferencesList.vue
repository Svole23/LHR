<template>
  <div class="references--list">
    <span class="list-index numeric">{{ index + 1 | padNumber }}</span>
    <h4 class="list-title">{{title}}</h4>
    <ul class="list">
      <li class="list-item" v-for="(item,index) in references" :key="index">{{item.fields.title}}</li>      
    </ul>
    <div class="numbering-div-background">{{ index + 1 | padNumber }}</div>
  </div>  
</template>

<script>
  export default {
    name: 'references-list',
    props: {
      references: {
        type: Array
      },
      title: {
        type: String
      },
      index: {
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>
.references--list {
  position: relative;
  padding-bottom: 5rem;
  width: 100%;

  @include media-breakpoint-up(lg) {
    width: 50%;
  }

  .numbering-div-background {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      position: absolute;
      bottom: 10%;
      right: 10%;
      font-size: 160px;
      color: $secondary;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: $secondary;
      font-family: $font-family-monospace;
      background: transparent;
      z-index: - 1;
    }
  }
  .list-index {
    position: absolute;
    left:0;
    top:0;
    font-size: 12px;
  }

  .list-title {
    padding-left: $content-left;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    width: 90%;
    padding-bottom: 1rem;

  }
  .list {
    list-style-type: none;
    padding-left: $content-left;
  }
} 
</style>