<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="home-stats row no-gutters">
        <div class="stats-main__container col-12 col-xl-6 offset-xl-6">
          <div class="stat-row">
            <div class="stat-container"></div>
            <div class="stat-container container-two"></div>
            <div class="stat-container">
            </div>
          </div>
          <div class="stat-row">
            <div class="stat-container">
              <div class="stat" v-view.once="startCounter1">
                <counter
                  ref="counter1"
                  :number="stat1.number"
                  :duration="4000"
                  :autoStart="false"
                  tag="span"
                  class="stat-number numeric" >
                  <template slot-scope="props">{{ props.number + '+' }}</template>
                </counter>
                <span class="stat-text">{{stat1.text}}</span>
              </div>
            </div>
            <div class="stat-container">
              <div class="stat" v-view.once="startCounter2">
                <counter
                  ref="counter2"
                  :number="stat2.number"
                  :duration="4000"
                  :autoStart="false"
                  tag="span"
                  class="stat-number numeric" >
                  <template slot-scope="props">{{ props.number + '+' }}</template>
                </counter>
                <span class="stat-text">{{stat2.text}}</span>
              </div>
            </div>
            <div class="stat-container"></div>
          </div>
          <div class="stat-row">
            <div class="stat-container">
              <div class="stat" v-view.once="startCounter3">
                <counter
                  ref="counter3"
                  :number="stat3.number"
                  :duration="4000"
                  :autoStart="false"
                  tag="span"
                  class="stat-number numeric" >
                  <template slot-scope="props">{{ props.number + '+' }}</template>
                </counter>
                <span class="stat-text">{{stat3.text}}</span>
              </div>
            </div>
            <div class="stat-container stat-border"></div>
            <div class="stat-container">
              <div class="stat" v-view.once="startCounter4">
                <counter
                  ref="counter4"
                  :number="stat4.number"
                  :duration="4000"
                  :autoStart="false"
                  tag="span"
                  class="stat-number numeric" >
                  <template slot-scope="props">{{ props.number + '+' }}</template>
                </counter>
                <span class="stat-text">{{stat4.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </grid-container>
  </page-section>
</template>

<script>
import Counter from '@/plugins/counter.js'

export default {
  name: 'section-home-stats',
  components: {
    Counter
  },
  data: () => ({
    stat1: {
      number: 350,
      text: 'Zadovoljnih klijenata'
    },
    stat2: {
      number: 800,
      text: 'Ostvarenih projekata'
    },
    stat3: {
      number: 6000,
      text: 'Dužnih kilometara šipova'
    },
    stat4: {
      number: 50,
      text: 'Zaposlenih u kompaniji'
    }
  }),
  methods: {
    startCounter1 () {
      this.$refs.counter1.start()
    },
      startCounter2 () {
      this.$refs.counter2.start()
    },
    startCounter3 () {
      this.$refs.counter3.start()
    },
    startCounter4 () {
      this.$refs.counter4.start()
    }
  }
}
</script>

<style lang="scss" scoped>
.home-stats {
  padding-bottom: $section-bottom;
  padding-top: 0;

  @include media-breakpoint-up(lg) {
    padding-bottom: $section-bottom;
    padding-top: $width-unit * 2;
  }

  @include media-breakpoint-up(xl) {
    padding-top: 0;
  }

  .stats-main__container {
    padding-top: $section-bottom * 2;
    padding-bottom: $section-bottom * 2;

    @include media-breakpoint-up(sm) {
      padding-bottom: $section-bottom;
      padding-top: $section-bottom * 1.3;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  .col-6 {
    z-index: 5;
  }
}
.stat-row {
  width: 100%;
  height: auto;
  display:flex;
  flex-direction: row;

  @include media-breakpoint-up(lg) {
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: row;
  }

  .stat-container {
    padding-top: 50%;
    width: 50%;
    background: red;

    @include media-breakpoint-up(md) {
      width: 33%;
      padding-top: 33%;
    }

    @include media-breakpoint-up(lg) {
      padding-top: 33.33%;
      width: 33.33%;
      background: red;
    }

    .stat {
      display: flex;
      flex-direction: column;
      padding-right: 1rem;

      @include media-breakpoint-up(lg) {
        padding: 0;
      }

      .stat-number {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}

.stat-row:nth-child(1) {
  position:relative;
  .stat-container:nth-child(1) {
    display: none;
    background: white;

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }
  .stat-container:nth-child(2) {
    background-image: url('~/assets/img/LHR-home-stat.jpg');
    position: relative;
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
    }

    &:after {
      content: '';
      height: 50%;
      width: 50%;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url('~/assets/img/diagonal-lines-black.png');

      @include media-breakpoint-up(lg) {
        z-index: 10;
      }
    }
  }
  .stat-container:nth-child(3) {
    position:absolute;
    top: - 50%;
    right:0;
    display: none;
    background-image: url('~/assets/img/LHR-home-stat.jpg');

    @include media-breakpoint-up(lg) {
      display: block;
    }

    &:after {
      content: '';
      height: 50%;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: url('~/assets/img/diagonal-lines-lhr-red.png');
    }
  }
}

.stat-row:nth-child(2) {
  .stat-container:nth-child(1) {
    position: relative;
    background: $primary;

    &:before {
      content: '';
      height: 25%;
      width: $width-unit * 2.1;
      position: absolute;
      bottom:0;
      left: calc(1px -#{$width-unit * 2} + 2px);
      z-index: -1;
      display: none;

      @include media-breakpoint-up(lg) {
        background-image: 
          repeating-linear-gradient(
            black,
            black 1px,
            white,
            gray,
            white 5px
          );
        z-index: -1;
        display: block;
      }
    }

    .stat {
      color: white;
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
  }
  .stat-container:nth-child(2) {
    background: white;
    position:relative;

      &:after {
        
      }

    &:after {
      content: '';
      position: absolute;
      height: $width-unit;
      width: 100%;
      background-image: url('~/assets/img/diagonal-lines-lhr-red.png');
      top: - $width-unit;
      left: 0;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    .stat {
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
  }
  .stat-container:nth-child(3) {
    background: white;
    display: none;

    @include media-breakpoint-up(lg) {
      border-right: 1px solid $grid-gray;
      display: block;
    }
  }
}

.stat-row:nth-child(3) {
  .stat-container:nth-child(1) {
    background: black;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      height: $width-unit;
      width: 100%;
      background-image: url('~/assets/img/diagonal-lines-black.png');
      bottom: - $width-unit;
      left: 0;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }
    .stat {
      color: white;
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
  }
  .stat-container:nth-child(2) {
    display: none;
    background: gray;
    background-image: url('~/assets/img/x-lines-black.png');
    background-size: 15px 15px;

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }
  .stat-container:nth-child(3) {
    background: #ebebe0;
    position: relative;
    .stat {
      position: absolute;
      bottom: 10%;
      left: 10%;
    }
  }
}
</style>
