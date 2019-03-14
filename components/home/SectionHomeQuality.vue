<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="section--home-quality">
        <div class="title-quality__container">
          <span class="quality-header">{{header}}</span>
          <h2 class="quality-title">{{title}}</h2>
        </div>
        <div class="certificates-wrapper row no-gutters">
          <quality-item 
          v-for="(certificate,index) in certificates" 
          :key="index"
          :certificate="certificate"/>
        </div>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
  import QualityItem from '@/components/home/QualityItem'
  export default {
    name: 'section-home-quality',
    data () {
      return {
        title: 'Sertifikati',
        header: 'nagrade',
      }
    },
    components: {
      QualityItem
    },
    computed: {
      certificates () {
        return this.$store.getters.Certificates
      }
    }
  }
</script>

<style lang="scss" scoped>
.section--home-quality {
  padding-top: $width-unit;
  padding-bottom: $width-unit;
  position: relative;

  @include media-breakpoint-up(sm) {
    padding: 0;
  }

  .title-quality__container {
    position:relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-bottom: $width-unit;
    padding-top: $width-unit;

    .quality-title {
      display: inline;
      position: relative;
      width: $width-unit * 2;

      @include media-breakpoint-up(sm) {
        &:after {
          display: none;
        }
      }

      @include media-breakpoint-up(md) {
        &:after {
          content: '';
          height: 1px;
          width: $width-unit * 3;
          border-bottom: 1px solid black;
          position: absolute;
          right: -$width-unit * 5;
          top: 50%;
          display: block;
        }
      }
    }
  }
}

.certificates-wrapper {
  position:relative;
  z-index: 2;
  padding-top: $content-left;
  padding-bottom: $content-left;
}

.text-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

@include media-breakpoint-up(lg) {
  .section--home-quality {
  padding-top: 0;
  padding-bottom: 0;
  position: relative;

  @include media-breakpoint-up(xl) {
    padding-top: $width-unit;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100vw;
    height: $width-unit * 3;
    top: $width-unit / 2;
    left: - $width-unit * 3;
    background: radial-gradient($secondary 15%, transparent 15%) 1px 1px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 15%) 1px 1px;
      background-color:white;
      background-size:16px 16px;
    z-index: 1;

    @include media-breakpoint-up(xl) {
      height: $width-unit * 3;
      top: $width-unit;
    }
  }

  .title-quality__container {
    position:relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-bottom: $width-unit;

    .quality-title {
      display: inline;
      position: relative;
      width: $width-unit * 2;

      &:after {
        content: '';
        height: 1px;
        width: $width-unit * 4;
        border-bottom: 1px solid black;
        position: absolute;
        right: -$width-unit * 4.5;
        top: 50%;

        @include media-breakpoint-up(xl) {
          right: -$width-unit * 4;
        }

      }
    }
  }
}
.certificates-wrapper {
  position:relative;
  z-index: 2;
  padding-top: $content-left;
  padding-bottom: $content-left;
}
}
</style>
