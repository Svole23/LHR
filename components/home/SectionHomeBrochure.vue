<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="section--home-brochure">
        <a class="brochure-button"
        v-for="(item,index) in brochure"
        :key="index"
        :href="item.fields.brochure.url" 
        download>
          <span class="button-text">{{title}}</span>
          <div class="side-text">{{text}}</div>
        </a>
        <div class="background-div">
          <div class="background-div__right"></div>
        </div>
        <div class="image-container">
          <img class="image" src="@/assets/img/test_image.jpeg"/>
        </div>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  export default {
    name: 'section-home-brochure',
    data () {
      return {
        title: 'Skini brošuru',
        text: 'LHR 2019'
      }
    },
    computed: {
      brochure () {
      return this.$store.getters.Brochure
    }
    }
  }
</script>

<style lang="scss" scoped>
.section--home-brochure {
  position: relative;
  padding-bottom: $section-bottom;
  padding-top: $width-unit;

  @include media-breakpoint-up(lg) {
    position: relative;
    padding-bottom: $section-bottom;
  }
  
  .brochure-button {
    position: relative;
    display: block;
    height: $width-unit * 3;
    width: 60%;
    background: black;
    z-index:2;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: $width-unit / 2;
    text-decoration: none;
    cursor: pointer;

    @include media-breakpoint-up(md) {
      height: $width-unit * 2;
    }


    @include media-breakpoint-up(lg) {
      width: 25%;
      background: black;
      z-index:2;
    }

    .side-text {
      font-family: $font-family-monospace;
      position: relative;
      //top: - $width-unit / 6;
      //left:0;
      color: white;
      font-size: 12px;

      @include media-breakpoint-up(lg) {
        position: absolute;
        bottom: 2rem;
        left: 30px;
        color: white;
        font-size: 12px;
        top: auto;
      }
    }

    .button-text {
      color: white;
      font-size: 24px;
      padding-left: 1rem;
      padding-right: 1rem;


      @include media-breakpoint-up(sm) {
        font-size: 32px;
      }

      @include media-breakpoint-up(lg) {
        color: white;
        font-size: 28px;
        padding-left: 30px;
        padding-right: 0;
      }

    }
  }

  .background-div {
    position:relative;
    width: 50%;
    height: $width-unit * 2;
    background: white;
    z-index:2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    display: none;

    @include media-breakpoint-up(lg) {
      display: flex;
      margin-left: - 1px;
      margin-bottom: - 1px;
    }

    .background-div__right {
      background: gray;
      height: 100%;
      width: 50%;

      @include media-breakpoint-up(lg) {
        background: white;
        height: 100%;
        width: 50%;
        background: radial-gradient($secondary 15%, transparent 15%) 1px 1px,
          radial-gradient(rgba(255,255,255,.1) 15%, transparent 15%) 1px 1px;
        background-color:white;
        background-size:16px 16px;
      }
    }
  }

  .image-container {
    position: relative;
    height: 30vh;
    width: 100%;
    z-index: 1;
    overflow: hidden;

    @include media-breakpoint-up(lg) {
      position: absolute;
      top:$width-unit;
      right:0;
      bottom: auto;
      height: calc(100% -#{$section-bottom + $width-unit});
      width: 100%;
      z-index: 1;
      overflow: hidden;
    }

    .image {
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>