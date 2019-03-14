<template>
  <grid-container>
    <div class="activity row no-gutters" :class="activity.fields.activity_layout">
      <div class="arrow-container">
        <Arrow class="arrow"/>
      </div>
      <div class="image-container">
        <parallax :speedFactor="0.3" :wrapped="true" :absolute="true">
          <img class="image" 
          v-if="activity.fields.image" 
          :src="activity.fields.image.url | fileApi"/>
        </parallax>
      </div>
      <div class="side-div"/>
      <div class="numbering-div numeric">
        <span class="numbering">
          {{ index + 1 | padNumber }}/{{ length | padNumber }}
        </span>
      </div>
      <div class="section-content__container col-12 xxl-col-9">
        <span class="activity-span">{{header}}</span>
        <h2 class="activity-title">{{activity.fields.title}}</h2>
        <div class="activity-content" v-html="activity.fields.content" />
      </div>
      <div class="col-3"/>
    </div>
  </grid-container> 
</template>

<script>
  import Arrow from '@/assets/svg/arrows/arrow.svg'
  export default {
    name: 'home-activity',
    props: {
      activity: {
        type: Object
      },
      index: {
        type: Number
      },
      length : {
        type: Number
      }
    },
    components: {
      Arrow
    },
    data () {
      return {
        header: 'Osnovne aktivnosti',
        timelineReady: false
      }
    },
    mounted () {
      this.initTimeline()
      this.$timeline.play()
    },
    computed: {
      activityIndex () {
        console.log(this.index,this.length)
        if(!this.index) {
          return 'activity1'
        }
        return 'activity' + (this.index + 1)
      }
    },
    methods: {
      initTimeline () {
        this.$timeline = new TimelineMax({
          paused: true
        })

        let el = this.$el.querySelectorAll('.arrow')

        this.$timeline
        .to(el, 0.4, {
          repeat: -1,
          y: 40,
          yoyo: true,
        })
        this.timelineReady = true;
      },

      start () {
        if (!this.timelineReady) return

      }
  }
}
</script>

<style lang="scss" scoped>

.layout1 {
  background: transparent;
  padding-top: $width-unit / 2;
  position: relative;
  z-index: 1;
  padding-bottom: 0;

  @include media-breakpoint-up(md) {
    margin-right: -$width-unit;
    padding-right: $width-unit;
  }

  .arrow-container {
    display: block;
    position: absolute;
    right: $width-unit;
    top: 50%;
    width: $width-unit;
    height: $width-unit * 2;
    background: transparent;

    @include media-breakpoint-up(md) {
      display: block;
    }

    .arrow {
      fill: white;
      transform:rotate(-90deg);
    }
  }

  .numbering-div {
    position: absolute;
    height: calc(100% - #{$width-unit * 2});
    width: $width-unit;
    background: transparent;
    right: -$width-unit;
    top: - 150px; 
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;  

    @include media-breakpoint-up(md) {   
      height: calc(100% - #{$width-unit * 3});
      top: $width-unit * 2;
      left: - $width-unit;
      border: none;
    }

    @include media-breakpoint-up(xl) {
      right: $width-unit;
      border: 2px solid white;
    }


    .numbering {
      font-size: 21px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
      -webkit-text-fill-color: black;
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: black;

      @include media-breakpoint-up(md) {
       font-size: 64px;
       transform: rotate(- 90deg);
       color: white;
       -webkit-text-fill-color: transparent;
       -webkit-text-stroke-width: 2px;
       -webkit-text-stroke-color: white;
     }
   }

 }

 .image-container {
  display:none;
  position:absolute;
  right:0;
  top:0;
  width: calc(15px + #{$width-unit * 7} - 28px);
  height: 70%;
  z-index: 2;

  .image {
    width: 100%;
    height: auto;
    flex: right center;
  }
}
.section-content__container {
  position: relative;
  z-index: - 1;
  background: transparent;
  padding-left: 0;
  padding-bottom: $section-bottom;

  @include media-breakpoint-up(sm) {
    padding-bottom: $section-bottom / 2;
  }

  @include media-breakpoint-up(md) {
    padding-bottom: 0;
    background: $secondary;
    padding-left: $content-left;
    padding-bottom: $section-bottom;
  }
}

.side-div {
  width: $width-unit * 2;
  height: calc(100% - #{$width-unit});
  position: absolute;
  bottom: 0;
  left: - $width-unit * 2;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 2;

  @include media-breakpoint-up(md) {
    height: calc(100% - #{$width-unit * 2});     
    background: $secondary;

    &:before {
      content: '';
      height: 1px;
      width: 100vw;
      position: absolute;
      top:0;
      left: -$width-unit;
      border-bottom: 1px solid $grid-gray;
    }

    &:after {
      content: '';
      height: $width-unit;
      width: $width-unit;
      position: absolute;
      bottom:0;
      left: 0;
      background: url('~assets/img/x-lines-white.png');
      background-size: 30px 30px;
    }
  }
}

.activity-span {
  display: block;
  padding-bottom: $width-unit;

  @include media-breakpoint-up(sm) {
    padding-bottom: $width-unit / 2;
  }

  @include media-breakpoint-up(md) {
    padding-bottom: $content-left / 2;
    padding-top: $width-unit;
  }
}

.activity-title {
  padding-bottom: $width-unit;
  margin:0;

  @include media-breakpoint-up(sm) {
    padding-bottom: $width-unit / 2;
  }
}

.activity-content {
  display:flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-family: $font-family-base;

  @include media-breakpoint-up(md) {
    font-family: $font-family-monospace;
  }
}
}

.layout2 {
  background: transparent;
  padding-top: $width-unit / 2;
  position: relative;
  z-index: 1;
  padding-bottom: 0;

  @include media-breakpoint-up(md) {
    background: $secondary;
    padding-top: calc(#{$width-unit * 2} - #{$content-left});
    padding-bottom: $width-unit;
    margin-right: -$width-unit;
    padding-right: $width-unit * 3;
  }

  .arrow-container {
    display: block;
    position: absolute;
    right: $width-unit;
    top: 50%;
    width: $width-unit;
    height: $width-unit * 2;
    background: transparent;

    @include media-breakpoint-up(md) {
      display: none;
    }

    .arrow {
      fill: white;
      transform:rotate(-90deg);
    }
  }

  .numbering-div {
    position: absolute;
    height: calc(100% - #{$width-unit * 2});
    width: $width-unit;
    background: transparent;
    top: - 95px; 
    right: -$width-unit;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-up(md) {
      border: none;
      width: $width-unit * 4;
      height: $width-unit;
      background: transparent;
      bottom: 0;
      top: auto;
      right: 0;
      z-index: 5;
    }

    @include media-breakpoint-up(xl) {
      border: 2px solid white;
    }

    .numbering {
      font-size: 21px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
      -webkit-text-fill-color: black;
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: black;

      @include media-breakpoint-up(md) {
        font-size: 64px;
        transform:rotate(0);
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }
    }

  }

  .image-container {
    display:none;
    position:absolute;
    right:0;
    top:0;
    width: calc(15px + #{$width-unit * 7} - 28px);
    height: 70%;
    z-index: 2;

    @include media-breakpoint-up(md) {
      display:block;
      width: calc(15px + #{$width-unit * 9} - 30px);
    }

    .image {
      width: 100%;
      height: auto;
      flex: right center;

      @include media-breakpoint-up(md) {
        width: auto;
        height: 110%;
        flex: right;
      }
    }
  }
  .section-content__container {
    position: relative;
    z-index: - 1;
    background: transparent;
    padding-left: 0;
    padding-bottom: $section-bottom;

    @include media-breakpoint-up(sm) {
      padding-bottom: $section-bottom / 2;
    }

    @include media-breakpoint-up(md) {
      z-index: 3;
      background: $secondary;
      padding-left: $content-left;
      padding-top: $content-left;
      padding-bottom: $section-bottom;
    }
  }

  .side-div {
    width: $width-unit * 2;
    height: calc(100% - #{$width-unit});
    position: absolute;
    bottom: 0;
    left: - $width-unit * 2;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;

    @include media-breakpoint-up(md) {
      height: 100%;      
      background: $secondary;
      border: 0;

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top:calc(#{$width-unit * 2} - #{$content-left});
        left: -$width-unit;
        border-bottom: 1px solid $grid-gray;
        z-index: 3;
      }   

      &:after {
        content: '';
        height: $width-unit;
        width: $width-unit;
        position: absolute;
        bottom:0;
        left: 0;
        background: url('~assets/img/x-lines-white.png');
        background-size: 30px 30px;
        display:none;
      }  
    }
  }

  .activity-span {
    display: block;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }

    @include media-breakpoint-up(md) {
      padding-bottom: $content-left / 2;
    }
  }

  .activity-title {
    padding-bottom: $width-unit;
    margin:0;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }
  }

  .activity-content {
    display:flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-family: $font-family-base;

    .activity-index {
      display:block;
      width: 3rem;
      font-size: 14px;
    }
  }
}

.layout3 {
  background: transparent;
  padding-top: $width-unit / 2;
  position: relative;
  z-index: 1;
  padding-bottom: 0;

  @include media-breakpoint-up(md) {
    background: $secondary;
    padding-top: 0;
    margin-right: -$width-unit;
    padding-right: $width-unit;
  }

  .arrow-container {
    display: block;
    position: absolute;
    right: $width-unit;
    top: 50%;
    width: $width-unit;
    height: $width-unit * 2;
    background: transparent;

    @include media-breakpoint-up(md) {
      display: none;
    }

    .arrow {
      fill: white;
      transform:rotate(-90deg);
    }
  }

  .numbering-div {
    position: absolute;
    height: calc(100% - #{$width-unit * 2});
    width: $width-unit;
    background: transparent;
    top: - 25px;
    right: -$width-unit;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-up(md) {
      height: $width-unit * 3;
      bottom:0;
      top: auto;
      right: $width-unit;
      border: none;
      z-index: 5;

      &:after {
        content: '';
        width: $width-unit;
        height: $width-unit;
        position: absolute;
        right: -$width-unit;
        top: -$width-unit;
        background: url('~assets/img/x-lines-white.png');
        background-size: 30px 30px;
      }
    }

    @include media-breakpoint-up(xl) {
      border: 2px solid white;
    }

    .numbering {
      font-size: 21px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
      -webkit-text-fill-color: black;
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: black;

      @include media-breakpoint-up(md) {
        font-size: 64px;
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }
    }
  }

  .image-container {
    display:none;
    position:absolute;
    right:0;
    top:0;
    width: calc(15px + #{$width-unit * 7} - 28px);
    height: 70%;
    z-index: 2;

    @include media-breakpoint-up(md) {
      width: calc(15px + #{$width-unit * 9} - 30px);
    }

    .image {
      width: 100%;
      height: auto;
      flex: right center;
    }
  }
  .section-content__container {
    position: relative;
    z-index: - 1;
    background: transparent;
    padding-left: 0;
    padding-bottom: $section-bottom;

    @include media-breakpoint-up(sm) {
      padding-bottom: $section-bottom / 2;
    }

    @include media-breakpoint-up(md) {
      padding-bottom: 0;
      z-index: 2;
      background: $secondary;
      padding-left: $content-left;
      padding-bottom: $section-bottom;
      padding-top: $content-left;
      padding-right: $width-unit * 2;
    }
  }

  .side-div {
    width: $width-unit * 2;
    height: calc(100% - #{$width-unit});
    position: absolute;
    bottom: 0;
    left: - $width-unit * 2;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;

    @include media-breakpoint-up(md) {
      height: 100%;
      top: auto;
      background: $secondary;
      border: 0;
      display: none;

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top: - $width-unit;
        left: -$width-unit * 2;
        border-bottom: 1px solid $grid-gray;
        z-index: 99;
      }
    }
  }

  .activity-span {
    display: block;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }

    @include media-breakpoint-up(md) {
      padding-bottom: $content-left / 2;
    }
  }

  .activity-title {
    padding-bottom: $width-unit;
    margin:0;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }
  }

  .activity-content {
    display:flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-family: $font-family-base;

    @include media-breakpoint-up(md) {
      position: relative;

      &:after {
        content: '';
        width: 1rem;
        height: 1px;
        background: black;
        position: absolute;
        left: - 2rem;
        top: 0.7rem;
      }
      .activity-text {
        padding-left: 2rem
      }
      .activity-index {
        display:block;
        width: 3rem;
        display: none;
      }
    }
  }
}

.layout4 {
  background: transparent;
  padding-top: $width-unit / 2;
  position: relative;
  z-index: 1;
  padding-bottom: 0;

  @include media-breakpoint-up(md) {
    background: $secondary;
    padding-top: 0;
    margin-right: -$width-unit;
    padding-right: $width-unit;
    padding-bottom: $width-unit * 2;
  }

  .arrow-container {
    display: block;
    position: absolute;
    right: $width-unit;
    top: 50%;
    width: $width-unit;
    height: $width-unit * 2;
    background: transparent;

    @include media-breakpoint-up(md) {
      top: 25%;
    }

    .arrow {
      fill: white;
      transform:rotate(-90deg);
    }
  }

  .numbering-div {
    position: absolute;
    height: calc(100% - #{$width-unit * 2});
    width: $width-unit;
    background: transparent;
    top: - 95px;
    right: -$width-unit;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-up(md) {
      width: calc(15px + #{$width-unit * 4} - 20px);
      height: $width-unit;
      bottom:$width-unit * 2;
      right: $width-unit;
      z-index: 5;
      top: auto;
      border: none;

      &:after {
        content: '';
        width: $width-unit;
        height: $width-unit;
        position: absolute;
        right: -$width-unit;
        top: -2px;
        background: url('~assets/img/x-lines-white.png');
        background-size: 30px 30px;
      }
    }

    @include media-breakpoint-up(xl) {
      border: 2px solid white;
    }

    .numbering {
      font-size: 21px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
      -webkit-text-fill-color: black;
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: black;

      @include media-breakpoint-up(md) {
        font-size: 64px;
        transform:rotate(0);
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }
    }

  }

  .image-container {
    display:none;
    position:absolute;
    right:0;
    top:0;
    width: calc(15px + #{$width-unit * 7} - 28px);
    height: 70%;
    z-index: 2;

    @include media-breakpoint-up(md) {
      display:block;
      left:-$width-unit * 3;
      bottom:0;
      width: calc(15px + #{$width-unit * 9} - 28px);
      height: 100%;
      z-index: 2;
    }

    .image {
      width: 100%;
      height: auto;
      flex: right center;

      @include media-breakpoint-up(md) {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .section-content__container {
    position: relative;
    z-index: - 1;
    background: transparent;
    padding-left: 0;
    padding-bottom: $section-bottom;

    @include media-breakpoint-up(sm) {
      padding-bottom: $section-bottom / 2;
    }

    @include media-breakpoint-up(md) {
      z-index: 2;
      background: $secondary;
      padding-left: $content-left;
      padding-top: $width-unit;
      padding-bottom: $width-unit;
      padding-right: $width-unit * 2;
    }
  }

  .side-div {
    width: $width-unit * 2;
    height: calc(100% - #{$width-unit});
    position: absolute;
    bottom: 0;
    left: - $width-unit * 2;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;

    @include media-breakpoint-up(md) {
      height: 100%;
      background: white;
      border: 0;
      z-index:1;

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top: 0;
        left: -$width-unit;
        border-bottom: 1px solid $grid-gray;
        z-index: 99;
      }
    }
  }

  .activity-span {
    display: block;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }

    @include media-breakpoint-up(md) {
      padding-bottom: $content-left / 2;
    }
  }

  .activity-title {
    padding-bottom: $width-unit;
    margin:0;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }
  }

  .activity-content {
    display:flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-family: $font-family-base;

    @include media-breakpoint-up(md) {
      .activity-index {
        display:block;
        width: 3rem;
      }
    }
  }
}

.layout5 {
  background: transparent;
  padding-top: $width-unit / 2;
  position: relative;
  z-index: 1;
  padding-bottom: 0;

  @include media-breakpoint-up(md) {
    background: $secondary;
    padding-top: calc(15px +#{$content-left} - 30px);
    margin-right: -$width-unit;
    padding-right: $width-unit;
  }

  .arrow-container {
    display: block;
    position: absolute;
    right: $width-unit;
    top: 50%;
    width: $width-unit;
    height: $width-unit * 2;
    background: transparent;

    @include media-breakpoint-up(md) {
      display: none;
    }

    .arrow {
      fill: white;
      transform:rotate(-90deg);
    }
  }

  .numbering-div {
    position: absolute;
    height: calc(100% - #{$width-unit * 2});
    width: $width-unit;
    background: transparent;
    top: - 80px;
    right: -$width-unit;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-up(md) {
      border: 2px solid white;
      height: $width-unit * 3;
      bottom:0;
      left: -$width-unit;
      top: auto;
      z-index: 5;
      border: none;

      &:after {
        content: '';
        width: $width-unit;
        height: $width-unit;
        position: absolute;
        right: 0;
        top: -$width-unit * 2;
        background: url('~assets/img/x-lines-white.png');
        background-size: 30px 30px;

        @include media-breakpoint-up(xl) {
          right: calc(2px + #{$width-unit} - 4px);
          top: -$width-unit;
        }

        @media only screen and (min-width : 1900px) {
          top: 0;
        }
      }
    }

    @include media-breakpoint-up(xl) {
      border: 2px solid white;
    }

    .numbering {
      font-size: 21px;
      font-weight: bold;
      color: black;
      transform: rotate(90deg);
      -webkit-text-fill-color: black;
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: black;

      @include media-breakpoint-up(md) {
        font-size: 64px;
        transform: rotate(- 90deg);
        color: white;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
      }
    }
  }

  .image-container {
    display:none;
    position:absolute;
    right:0;
    top:0;
    width: calc(15px + #{$width-unit * 7} - 28px);
    height: 70%;
    z-index: 2;

    @include media-breakpoint-up(md) {
      display:none;
      position:absolute;
      left:-$width-unit * 3;
      bottom:0;
      width: calc(15px + #{$width-unit * 9} - 28px);
      height: 70%;
      z-index: 2;
    }

    .image {
      width: 100%;
      height: auto;
      flex: right center;

      @include media-breakpoint-up(md) {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .section-content__container {
    position: relative;
    z-index: - 1;
    background: transparent;
    padding-left: 0;
    padding-bottom: $section-bottom;

    @include media-breakpoint-up(sm) {
      padding-bottom: $section-bottom / 2;
    }

    @include media-breakpoint-up(md) {
      position: relative;
      z-index: 2;
      background: $secondary;
      padding-left: $content-left;
      padding-bottom: $section-bottom;
      padding-right: $width-unit * 2;
    }
  }

  .side-div {
    width: $width-unit * 2;
    height: calc(100% - #{$width-unit});
    position: absolute;
    bottom: 0;
    left: - $width-unit * 2;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;

    @include media-breakpoint-up(md) {
      height: 100%;
      background: $secondary;
      display: flex;
      border: 0;
      z-index:1;

      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top: 0;
        left: -$width-unit;
        border-bottom: 1px solid $grid-gray;
        z-index: 99;
      }
    }
  }

  .activity-span {
    display: block;
    padding-bottom: $width-unit;

    @include media-breakpoint-up(sm) {
      padding-bottom: $width-unit / 2;
    }

    @include media-breakpoint-up(md) {
     padding-bottom: $content-left / 2;
   }
  }

 .activity-title {
  padding-bottom: $width-unit;
  margin:0;

  @include media-breakpoint-up(sm) {
    padding-bottom: $width-unit / 2;
  }
}

.activity-content {
  display:flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-family: $font-family-base;

  @include media-breakpoint-up(md) {
    .activity-index {
      display:block;
      width: 3rem;
    }
  }
}
}
</style>