<template>
  <div class="page page--gallery">
  	<grid-lines/>
    <section-gallery-swiper class="swiper"/>
    <section-gallery class="gallery"/>
  </div>
</template>

<script>
import SectionGallerySwiper from '@/components/gallery/SectionGallerySwiper'
import SectionGallery from '@/components/gallery/SectionGallery'
export default {
  name: 'gallery',
  components: {
  	SectionGallerySwiper,
    SectionGallery
  },
  props: [
    'model'
  ]
}
</script>

<style lang="scss" scoped>
.swiper {
  display: none;
}

.gallery {
  display: block;
}

@include media-breakpoint-up (lg) {
  .swiper {
    display: block;
  }

  .gallery {
    display: none;
  }
}
</style>