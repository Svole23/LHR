<template>
  <div class="component-container">
    <h3 class="component-title">{{item.fields.title}}</h3>
    <div class="text-container">
      <div class="text">
        <span class="component-index">01</span>
        <p>{{item.fields.component_text_one}}</p>
      </div>
      <div class="content" v-html="item.fields.component_content_one" />
    </div>
    <div class="text-container">
      <div class="text">
        <span class="component-index">02</span>
        <p>{{item.fields.component_text_two}}</p>
      </div>
      <div class="content" v-html="item.fields.component_content_two" />
    </div>
    <div class="text-container">    
      <div class="text">
        <span class="component-index">03</span>
        <p>{{item.fields.component_text_three}}</p>
      </div>
      <div class="content" v-html="item.fields.component_content_three" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-component-list',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.component-container {
  background: black;
  color: white;
  width: 100%;
  padding: $width-unit;
  position: relative;
  z-index: 4;
  margin-left: 0;
  padding-left: $width-unit;
  padding-right: $width-unit;
  margin-bottom: $width-unit;

  @include media-breakpoint-up(lg) {
    margin-left: -$width-unit * 3;
    padding-left: $width-unit * 3;
    padding-right: $width-unit * 2;
    width: 100vw;
    margin-bottom: 0;
  }

  .component-title {
    padding-bottom: 1rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    border-top: 1px solid white;

    @include media-breakpoint-up(md) {
      flex-direction: row;
    }

    .text {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-left: $content-left / 2;
      padding-top: $content-left / 2;
      padding-bottom: $content-left / 2;
      padding-right: $content-left;

      @include media-breakpoint-up(md) {
        width: 50%;
      }

      .component-index {
        font-family: $font-family-monospace;
        padding-right: $content-left / 2;
        font-size: 12px;
      }
    }

    .content {
      width: 100%;
      padding-left: $content-left / 2;
      padding-top: $content-left / 2;
      padding-bottom: $content-left / 2;
      padding-right: $content-left;

      @include media-breakpoint-up(md) {
        width: 50%;
      }
    }
  }
}
</style>