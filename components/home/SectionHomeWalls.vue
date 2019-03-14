<template>
  <page-section>
    <grid-lines/>
    <grid-container>
      <div class="home-walls row no-gutters">
        <div class="walls-col col-12 col-xxl-8">
          <div class="walls-container">
            <h3 class="walls-title">{{title}}</h3>
            <div class="walls-sizes">
              <div class="radius-container">
                <div class="sizes-large" ref="large" />
                <div class="sizes-medium" ref="medium" />
                <div class="sizes-small" ref="small" />
                <div class="line-trough" ref="line"/>
              </div>
            </div>
          </div>
        </div>
        <div class="walls-col col-6 offset-6 offset-xxl-0 col-xxl-4">
          <div class="image-container"></div>
          <div class="sizes-container numeric">
            <span class="size"
            :id="'size' + (index + 1) "
            v-for="(size,index) in sizes"
            :key="index"
            @mouseover="mouseEnter(size.number).stopPropagation()"
            @mouseleave="mouseLeave(size.number).stopPropagation()"
            >
            {{size.number}}mm
          </span>
        </div>
      </div>
    </div>
  </grid-container>
</page-section>
</template>

<script>
  export default {
    name: 'section-home-walls',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        sizes: [
        {
          number: 400
        },
        {
          number: 600
        },
        {
          number: 800
        },
        ]
      }
    },
    methods: {
      mouseEnter (input) {
        let small = this.$refs.small
        let medium = this.$refs.medium
        let large = this.$refs.large
        let line = this.$refs.line

        if(input === 400) {
          small.style.opacity = "1"
          line.style.opacity = "1"
        }

        if(input === 600) {
          medium.style.opacity = "1"
          line.style.opacity = "1"
        }

        if(input === 800) {
          large.style.opacity = "1"
          line.style.opacity = "1"
        }
      },
      mouseLeave (input) {
        let small = this.$refs.small
        let medium = this.$refs.medium
        let large = this.$refs.large
        let line = this.$refs.line

        if(input === 400) {
          small.style.opacity = "0.2"
          line.style.opacity = "0.2"
        }

        if(input === 600) {
          medium.style.opacity = "0.2"
          line.style.opacity = "0.2"
        }

        if(input === 800) {
          large.style.opacity = "0.2"
          line.style.opacity = "0.2"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-walls {
  position:relative;
  padding-bottom: $section-bottom;
  position: relative;
}
.walls-container {
  z-index: 5;
  background: black;
  color: white;
  padding-left: $content-left;
  padding-right: $width-unit;
  padding-top: $width-unit;
  padding-bottom: $width-unit * 4.5;
  position: relative;

  @include media-breakpoint-up(sm) {
    padding-bottom: $width-unit * 2;
  }

  @include media-breakpoint-up(xl) {
    padding-bottom: $width-unit;
  }

  .walls-title {
    line-height: 1.5;
    font-size: 21px;

    @include media-breakpoint-up(xl) {
      font-size: 28px;
    }
  }

  .walls-sizes {
    width: 20%;
    padding: 20%;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    @include media-breakpoint-up(sm) {
      bottom: - 2.2rem;
      right: - 2rem;
    }

    @include media-breakpoint-up(xl) {
      bottom: - 1rem;
      right: - 1rem;
    }

    .radius-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      .sizes-large {
        top: 50%;
        left: 50%;
        position: absolute;
        width: 130px;
        height: 130px;
        border: 2px solid white;
        border-radius: 50%;
        padding: 17px;
        opacity: 0.2;
        transform: translate(- 50%, - 50%);
      }

      .sizes-medium {
        top: 50%;
        left: 50%;
        position: absolute;
        width: 90px;
        height: 90px;
        border: 2px solid white;
        border-radius: 50%;
        padding: 17px;
        opacity: 0.2;
        transform: translate(- 50%, - 50%);
      }

      .sizes-small {
        top: 50%;
        left: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        border: 2px solid white;
        border-radius: 50%;
        opacity: 0.2;
        transform-origin: center center;
        transform: translate(- 50%, - 50%);
      }

      .line-trough {
        height: 2px;
        width: $width-unit * 6;
        background: white;
        opacity: 0.2;
        position: absolute;
        transform-origin: center center;
        transform: translate(- 50%, - 50%) rotate(- 45deg);
        top: 50%;
        left: 50%;
      }
    }
  }
}

.sizes-container {
  padding-top: 20px;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $secondary;
  padding-bottom: 10px;

  @include media-breakpoint-up(xl) {
    height:100%;
    padding: 1rem;
  }

  @include media-breakpoint-up(xxl) {
    height:60%;
    padding: 0;
  }

  .size {
    display: block;
    padding-bottom: 10px;
    position:relative;
    cursor: pointer;
    font-size: 16px;

    @include media-breakpoint-up(xl) {
      font-size: 21px;
    }

    &:before {
      content: '\2205';
      position: absolute;
      left: - 30px;
      // top: 6px;
      height: 10px;
      width: 10px;
      // border: 1px solid black;
      // border-radius: 50%;

    }
  }
}

.image-container {
  z-index: 5;
  height: 40%;
  background: gray;
  display: none;

  @include media-breakpoint-up(xxl) {
    display: block;
    background: white;
    background: radial-gradient($secondary 15%, transparent 15%) 1px 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 15%) 1px 1px,;
    background-color:white;
    background-size:16px 16px;
  }
}

.walls-col {
  z-index: 5;
}

</style>
