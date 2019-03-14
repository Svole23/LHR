<template>
  <section class="section--gallery">
    <div class="image__content-container" v-for="(image,index) in galleryImages" :key="index">
      <div class="image-container">
        <img class="image" :src='image.fields.image.url | fileApi'>
      </div>
      <div class="image-text__container"></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'section-gallery--mobile',
    computed: {
    galleryImages () {
      return this.$store.getters.Gallery
    }
  }
  }
</script>

<style lang="scss" scoped>
.section--gallery {
  padding-left: $width-unit;
  padding-right: $width-unit;
  padding-top: $width-unit * 2;
  .image__content-container {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    margin-bottom: $section-bottom;
    .image-container {
      height: 80%;
      width: 100%;
      overflow: hidden;

      .image {
        object-fit: cover;
        width: 100%;
      }
    }
    .image-text__container {
      width: 100%;
      height: 20%;
      background: white;
    }
  }
}

.image__content-container:nth-child(1) {
  margin-top: $section-bottom * 2;
}
</style>