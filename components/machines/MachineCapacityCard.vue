<template>
  <div class="machine-capacity">
    <div class="capacity-transport" v-if="transport">
      <span class="transport__content">
        <span class="numeric" v-view.once="start">{{transport}}t u transportu</span>
      </span>
      <progress class="transport__line" :value="transport" max="80"></progress>
    </div>
    <div class="capacity-transport" v-if="transportdecimal">
      <span class="transport__content">
        <span class="numeric" v-view.once="start">{{transportdecimal}}t u transportu</span>
      </span>
      <progress class="transport__line" :value="transportdecimal" max="80"></progress>
    </div>
    <div class="capacity-work" v-if="work"> 
      <span class="work__content">
        <span class="numeric" v-view.once="start">{{work}}t u radu</span>
      </span>
      <progress class="work__line" :value="work" max="80"></progress>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'machine-capacity-card',
    data () {
      return {
        timelineReady: false
      }
    },
    props: {
      transport: {
        type: Number
      },
      transportdecimal: {
        type: Number
      },
      work: {
        type: Number
      }
    },
    mounted () {
      this.initTimeline()
    },

    methods: {
      initTimeline () {
        this.$timeline = new TimelineMax({
          paused: true
        })

        let el = this.$el.querySelectorAll('.work__line')
        let el2 = this.$el.querySelectorAll('.transport__line')

        this.$timeline
        .from(el, 2, {
          value: 0,
          ease: Power2.easeInOut
        })
        .from(el2, 2, {
          value: 0,
          ease: Power2.easeInOut
        }, "-=2")
        this.timelineReady = true;
      },

      start () {
        if (!this.timelineReady) return
          this.$timeline.play()
      }
    }
  }
</script>

<style lang="scss" scoped>
.machine-capacity {
  border: 1px solid black;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;

  .capacity-transport {
    .transport__content {
      padding-bottom: 0;
    }
    .transport__line {
      background: $primary;
      height: 3px;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .capacity-work {
    .work__content {
      padding-bottom: 0;
    }
    .work__line {
      background: $primary;
      height: 3px;
      width: 100%;
      margin-bottom: 10px;
    }

  }
}

progress[value] {
  appearance: none;
  width: 100%;
  height: 3px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  overflow: hidden;
}

progress[value]::-webkit-progress-value {
  background-color: $primary;
}
</style>