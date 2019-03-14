<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="section--home-technologies row-no gutters">
        <span class="technology-span">{{header}}</span>
        <h2 class="technology-title">{{title}}</h2>
        <p class="technology-text">{{lead}}</p>
        <div class="technology-content">
          <div class="technology-list col-12 col-lg-6">
            <div class="technology" v-for="(tech,index) in technologies" :key="index">
              <span class="technology-index numeric">{{ index + 1 | padNumber }}</span>
              <div class="technology-name__container">
                <nuxt-link class="technology-link" :to="tech.url">
                  <h3 class="technology-name"
                    @mouseover="changeActiveIndex(index)"
                    @mouseenter="start()"
                    @mouseleave="restart()">
                    {{tech.fields.title}}
                  </h3>
                </nuxt-link>
            </div>
          </div>
        </div>
        <div class="technology-box">
          <div class="curtain" ref="curtain"></div>
          <div 
            v-for="(tech,index) in technologies" 
            :key="index" 
            class="block-reveal__image"
            :class="{active:checkIndex(index)}">
          <img class="image" :src="imageSrc(tech)">
          </div>
        </div>
      </div>
    </div>
  </grid-container>
</page-section>
</template>

<script>
  export default {
    name: 'section-home-technologies',
    props: {
      title: {
        type: String
      },
      lead: {
        type: String
      }
    },
    data () {
      return {
        activeIndex: null,
        timelineReady: false,
        header: 'reference'
      }
    },
    mounted () {
      this.initTimeline()
    },
    computed: {
      technologies () {
        return this.$store.getters.Technologies
      }
    },
    methods: {
      imageSrc (input) {
        if(input.fields.technologies_page_image) {
          return this.$options.filters.fileApi(input.fields.technologies_page_image.url)
        }
        return require ('@/static/img/backgrounds/about-hero.jpg')
      },
      changeActiveIndex (input) {
        console.log(this.activeIndex)
        this.activeIndex = input
      },
      initTimeline () {
        this.$timeline = new TimelineMax({
          paused: true
        })
        let curtain = this.$el.querySelectorAll('.curtain')
        let active = this.$el.querySelectorAll('.active')
        this.$timeline
        //.to(active,0.1, {
        //  x: '0',
        //  ease: Power2.easeInOut
        //})
        .to(curtain, 0.5, {
          delay:0.1,
          x: '100%',
          ease: Power2.easeInOut
        })
        this.timelineReady = true;
      },

      start () {
        if (!this.timelineReady) return
          this.$timeline.play()
      },
      restart () {
        this.$timeline.reverse()

      },
      checkIndex (input) {
        if(this.activeIndex === input) {
          console.log("data",this.activeIndex,"input",input)
          //this.$timeline.progress(0)
          return true
        }
        return false
      },
    }
  }
</script>

<style lang="scss" scoped>
.section--home-technologies {
  padding-top: $section-bottom;
  padding-bottom: 0;
  position: relative;
  z-index: 1;
  margin-right: 0;
  padding-right: 0;

  @include media-breakpoint-up(md) {
    padding-top: calc(#{$width-unit * 1} + #{$section-bottom});
    padding-bottom: $width-unit;
    margin-right: -$width-unit;
    padding-right: $width-unit;
  }

  .technology-link {
    text-decoration: none;
    color: black;
  }

  .technology-text {
    padding-right: 0;
    margin:0;
    padding-bottom: $width-unit;
    font-size: 20px;

    @include media-breakpoint-up(sm) {
      padding-bottom: 0;
    }

    @include media-breakpoint-up(md) {
      padding-right: $width-unit * 2;
      margin:0;
      padding-bottom: $width-unit;
      font-size: 20px;
    }
  }

  .technology-span {
    display: block;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(md) {
      padding-bottom: 1rem;
    }
  }

  .technology-title {
    padding-bottom: $width-unit;
    margin:0;

    @include media-breakpoint-up(md) {
      padding-bottom: $width-unit / 1.5;
    }
  }

  .technology-content {
    display:flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;

    .technology-box {
      display: none;
      position:relative;
      background: transparent;
      margin-right: -$width-unit;
      flex:1;
      z-index: 5;
      overflow: hidden;

      @include media-breakpoint-up(xl) {
        display: block;
      }

      .curtain {
        width: 100%;
        height: 100%;
        background: $primary;
        transform-origin: 100% 50%;
        position: relative;
        z-index: 7;
      }

      .block-reveal__image {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 100% 50%;
        transform: translateX(- 100%);
        transition: 0.1s ease-in;
        z-index: 6;
        overflow: hidden;
        width: 100%;
        height: 100%;
        .image  {
          object-fit: cover;
          object-position: 50% 50%;
          width: 100%;
          height: 100%;
        }
      }

      .active {
        transition: 0.4s ease-out;
        transform: translateX(0);
        z-index: 5;
      }
    }

    .technology-list {
      padding-top: $content-left;
      padding-bottom: $content-left;

      @include media-breakpoint-up(sm) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      @include media-breakpoint-up(md) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        padding-top: $content-left;
        padding-bottom: $content-left;
      }

      @include media-breakpoint-up(xl) {
          padding-bottom: 0;
          padding-top: 0;
          width: 50%;
          min-width: 50%;
          max-width: 50%;
          display: block;
      }
      
      .technology {
        display: flex;
        flex-direction: row;

        @include media-breakpoint-up(sm) {
          flex-direction: row;
          width: 50%;
        }

        .technology-name__container {
          .technology-name {
            font-weight: bold;
            opacity: 0.3;
            position: relative;
            width: auto;
            padding-top: 8px;
            padding-bottom: 8px;
            height: 100%;
            @include media-breakpoint-up(sm) {
              padding-top: 1rem;
              padding-bottom: 1rem;
            }

            @include media-breakpoint-up(md) {
              width: 240px;
            }
          
            @include media-breakpoint-up(xl) {
              padding: 0;
              padding-left: 1rem;
              width: 340px;
            }
          }

          .technology-name:hover {
            opacity: 1;

            &:after {
              content: '';
              height: 1px;
              width: $width-unit * 1.3;
              background: black;
              position: absolute;
              right: - 150px;
              top: 15px;
              display: block;

              @media only screen and (min-width : 1900px) {
              right: - $width-unit;
              }
            }
          }
        }
        .technology-index {
          display: block;
          width: $content-left;
          opacity: 0.5;
        }
      }     
    }
  }
}
</style>