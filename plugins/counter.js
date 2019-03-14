export default {
  name: 'counter',
  data () {
    return {
      value: 0,
      counting: false
    }
  },
  props: {
    autoStart: {
      type: Boolean,
      default: true,
    },
    emitEvents: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 1000,
      validator: value => value >= 0,
    },
    tag: {
      type: String,
      default: 'span',
    },
    number: {
      type: Number,
      required: true,
      validator: value => value >= 0,
    },
    transform: {
      type: Function,
      default: props => props,
    }
  },
  render(createElement) {
    return createElement(this.tag, this.$scopedSlots.default ? [
      this.$scopedSlots.default(this.transform({
        number: this.value
      })),
    ] : this.$slots.default);
  },
 watch: {
    $props: {
      deep: true,
      immediate: true,

      handler() {
        if (this.autoStart) {
          this.start();
        }
      }
    }
  },
  methods: {
    start() {
      if (this.counting) {
        return
      }
      let minStepInterval = 50
      let stepTime = Math.abs( Math.floor( this.duration / this.number ))
      this.interval =  Math.max(stepTime, minStepInterval)
      this.startTime = new Date().getTime()
      this.endTime = this.startTime + this.duration

      if (this.emitEvents) {
        this.$emit('start')
      }
      this.counting = true
      this.continue()  
      
    },
    continue () {
      if (!this.counting) {
        return
      }

      let now = new Date().getTime()

      if (this.endTime >= now) {
        this.timeout = setTimeout(this.progress, this.interval, this);
      } else {
        this.end();
      }
    },
    pause () {
      clearTimeout(this.timeout)
    },
    progress () {
      if (!this.counting) {
        return
      }
      let now = new Date().getTime() // current run time 
      // get remaining time of animation (ie 723ms => 0.723)
      let remaining = Math.max((this.endTime - now) / this.duration, 0)
      // get current number value based on the percentage of the animation duration 
      // end number - remaining time * end number (ie 100 - (0.723*100) => 27.7 => 27)  
      let value = Math.round(this.number - (remaining * this.number))
      if (value >= this.number) {
        clearTimeout(this.timeout)
        value = this.number
      }
      else {
        this.value=value
      }
      if (this.emitEvents) {
        this.$emit('progress', {
          number: this.value,
          progress: 1 - remaining
        });
      }
      this.continue();
    },
    abort() {
      if (!this.counting) {
        return;
      }
      this.pause();
      this.counting = false;

      if (this.emitEvents) {
        this.$emit('abort');
      }
    },
    end() {
      if (!this.counting) {
        return;
      }

      this.pause();
      this.endTime = 0;
      this.counting = false;
      this.value = this.number

      if (this.emitEvents) {
        this.$emit('end');
      }
    }
  },
  beforeDestroy() {
    this.pause();
  }
}