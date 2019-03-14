<template>
  <div class="section-gallery-swiper">
    <swiper ref="mySwiper" :options="swiperOption" @slideChange="start()">
      <swiper-slide 
        v-for="(image,index) in galleryImages" 
        :key="index"
        >
        <div class="image-container">
          <img class="swiper-image" :src='image.fields.image.url | fileApi'>
        </div>
      </swiper-slide>
    </swiper>
    <div class="gallery-interface">
      <div class="loading-bar__container">
        <progress class="progress-bar" value="0" max="100"></progress>
      </div>
      <div class="text-container">
        <p class="text" v-for="(image,index) in galleryImages" :key="index"></p>
      </div>
      <div class="buttons-container">
        <div class="button-prev" id="prevEl" :on-click="start()">
         <Arrow class="arrow-left"/>
       </div>
       <div class="button-next" id="nextEl" :on-click="start()">
        <Arrow class="arrow-right"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Arrow from '@/assets/svg/arrows/arrow.svg'
  import {TimelineMax} from 'gsap'
  export default {
    name: 'section-gallery-swiper',
    components: {
      Arrow
    },
    data () {
      return {
        activeIndex: null,
        timelineReady: false,
        images: [
        {
          url: '@/static/img/backgrounds/about-hero.jpg'
        },
        {
          url: '@/static/img/backgrounds/about-meeting.jpg'
        },
        {
          url: '@/static/img/backgrounds/academy-hero.jpg'
        },
        ],
        
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          navigation: {
            nextEl: '#nextEl',
            prevEl: '#prevEl'
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          speed : 1000,
        }
      }
    },

    mounted () {
      this.initTimeline()
      this.start()
    },
    computed: {
      galleryImages () {
        return this.$store.getters.Gallery
      }
    },
    methods: {
      imageIndex(input) {
        this.activeIndex = input
        console.log(this.activeIndex)
      },
      initTimeline () {
        this.$timeline = new TimelineMax({
          paused: true
        })

        let el = this.$el.querySelectorAll('.progress-bar')

        this.$timeline
        .to(el, 5, {
          value: 100,
          ease: Power2.easeInOut
        })
        onComplete: this.$timeline.invalidate().restart()

        this.timelineReady = true;
      },

      start () {
        if (!this.timelineReady) return
          this.$timeline.restart()
        this.$timeline.play()
      }
    }
  }
</script>

<style lang="scss" scoped>
.section-gallery-swiper {
  height: 100vh;
  width: 100%;
  position: relative;

  .gallery-interface {
    position: absolute;
    bottom: 0;
    right: 0;
    width: $width-unit * 9;
    height: $width-unit;
    background: white;
    z-index: 99;
    display: flex;

    .loading-bar__container {
      width: $width-unit * 5;
      height: $width-unit;
      position: absolute;
      right:0;
      top: - $width-unit;
      background: white;
      display: flex;
      align-items: center;
      padding-left: 70px;
      padding-right: 70px;


      progress[value] {
        appearance: none;
        width: 100%;
        height: 6px;
      }

      progress[value]::-webkit-progress-bar {
        background-color: #eee;
        overflow: hidden;
      }

      progress[value]::-webkit-progress-value {
        background-color: $primary;
      }
    }

    .text-container {
      height: 100%;
      width: $width-unit * 4;
      display: flex;
      padding-left: 2rem;
      padding-top: 2rem;

      .text {
        margin: 0;
      }
    }

    .buttons-container {
      width: auto;
      height: 100%;
      position: absolute;
      bottom:0;
      right:0;
      display: flex;
      flex-direction: row;

      .button-prev {
        width: $width-unit;
        height: $width-unit;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow-left {
          width: 60%;
          height: auto;
          fill: white;
        }
      }

      .button-next {
        width: $width-unit;
        height: $width-unit;
        background: black;
        border-left: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow-right {
          width: 60%;
          height: auto;
          transform: rotate(180deg);
          fill: white;
        }
      }
    }
  }
}
.image-container {
 width: 100%;
 height: 100vh;
 overflow: hidden;

 .swiper-image {
  object-fit: cover; 
  height: 100%;
  width: 100%;
}
}
</style>