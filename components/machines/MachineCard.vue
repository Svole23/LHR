<template>
  <div :class="machineIndex">
    <h3 class="machine-title">{{machine.fields.machine_name}}</h3>
    <div class="card-container">
      <div class="numbering__container">
        <span class="numbering numeric">{{ index + 1 | padNumber }}/{{ length | padNumber }}</span>
      </div>
      <div class="machine-capacity__container">
        <machine-capacity-card 
        :transport="machine.fields.machine_weight_transport"
        :transportdecimal="machine.fields.machine_weight_transport_decimal"
        :work="machine.fields.machine_weight_work"/>
      </div>
      <div class="details__container">
        <div class="machine-details__container">
          <div class="machine-details">
            <div class="detail" v-if="machine.fields.machine_serial_number">
              <span class="title">serijski broj:</span>
              <span class="number numeric">{{machine.fields.machine_serial_number}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_basis">
              <span class="title">osnova-bager:</span>
              <span class="number numeric">{{machine.fields.machine_basis}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_engine_serial_number">
              <span class="title">broj motora:</span>
              <span class="number numeric">{{machine.fields.machine_engine_serial_number}}</span>
            </div>
            <div class="engine" v-if="machine.fields.machine_engine">
              <span class="title">motor:</span>
              <span class="number numeric">{{machine.fields.machine_engine}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_factory_number">
              <span class="title">fabrički broj:</span>
              <span class="number numeric">{{machine.fields.machine_factory_number}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_year">
              <span class="title">godina proizvodnje:</span>
              <span class="number numeric">{{machine.fields.machine_year}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_work_table">
              <span class="title">obrtni moment radnog stola:</span>
              <span class="number numeric">{{machine.fields.machine_work_table}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_arrow">
              <span class="title">strela:</span>
              <span class="number numeric">{{machine.fields.machine_arrow}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_hammer">
              <span class="title">malj:</span>
              <span class="number numeric">{{machine.fields.machine_hammer}}</span>
            </div>
            <div class="detail" v-if="machine.fields.machine_capacity">
              <span class="title">kapacitet:</span>
              <div class="capacity-content">
                <span class="capacity-detail numeric" v-html="machine.fields.machine_capacity"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Arrow from '@/assets/svg/arrows/arrow.svg'
  import MachineCapacityCard from '@/components/machines/MachineCapacityCard'
  export default {
    name: 'machine-card',
    components: {
      Arrow,
      MachineCapacityCard
    },
    props: {
      machine: {
        type: Object
      },
      index: {
        type: Number
      },
      length : {
        type: Number
      }
    },
    computed: {
      machineIndex () {
        if(!this.index) {
          return 'machine--card__1'
        }
        return 'machine--card__' + (this.index + 1)
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
.machine--card__1, .machine--card__2, .machine--card__3, 
.machine--card__4, .machine--card__5, .machine--card__6 {
  padding-bottom: $section-bottom * 2;
  padding-top: $section-bottom * 2;
  position: relative;
  z-index: 6;

  @include media-breakpoint-up(md) {
    padding-bottom: $section-bottom;
    padding-top: $section-bottom;
  }

  @include media-breakpoint-up(xl) {
    max-height: 500px;
    padding-top: $section-bottom / 2;
    padding-bottom: $section-bottom / 2;
  }

  .machine-title {
    padding-bottom: $content-left;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
    z-index: 5;

    @include media-breakpoint-up(xl) {
      max-height: 220px;
    }

    .machine-capacity__container {
      border-top: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      padding: 10px;
      position: relative; 
      width: auto;
      
      @include media-breakpoint-up(xl) {
      max-height: 220px;
    }

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
    }

    .machine-details__container {
      border: 1px solid black;
      padding: 10px;
      width: auto;
      background:white;

      .machine-details {
        border: 1px solid black;

        .serial-number {
          border-bottom: 1px solid black;
          display: flex;
          flex-direction: row;

          .title {
            font-size: 16px;
            font-family: $font-family-monospace;
            width: 50%;
            border-right: 1px solid black;
            
          } 

          .number {
            width: 50%;
            font-size: 16px;
          }
        }

        .manufactured {
          border-bottom: 1px solid black;
          display: flex;
          flex-direction: row;

          .title {
            font-size: 16px;
            font-family: $font-family-monospace;
            width: 50%;
            border-right: 1px solid black;
            
          } 

          .number {
            width: 50%;
            font-size: 16px;
            
          }
        }

        .rpm {
          border-bottom: 1px solid black;
          display: flex;
          flex-direction: row;

          .title {
            font-size: 16px;
            font-family: $font-family-monospace;
            width: 50%;
            border-right: 1px solid black;
          } 

          .number {
            width: 50%;
            font-size: 16px;
            
          }
        }

        .engine {
          border-bottom: 1px solid black;
          display: flex;
          flex-direction: row;

          .title {
            font-size: 16px;
            font-family: $font-family-monospace;
            width: 50%;
            padding: 10px;
            border-right: 1px solid black;
            
          } 

          .number {
            width: 50%;
            font-size: 16px;
            padding: 10px;
            
          }
        }

        .capacity {
          display: flex;
          flex-direction: row;

          .title {
            font-size: 16px;
            font-family: $font-family-monospace;
            width: 50%;
            border-right: 1px solid black;
          }

          .capacity-content {
            width: 50%;
            display: flex;
            flex-direction: column;
            font-size: 16px;

            .capacity-detail {
            }
          }
        }
      }
    }
  }

  .more {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: $width-unit * 1.5;
    left: 0;
    z-index: 99;

    .more-text {
      color: $primary;
      font-size: 16px;
    }
    
    .arrow {
      height: auto;
      width: 50px;
      transform: rotateY(180deg);
      position: absolute;
      right: - 70px;
      top: 30%;
      fill: $primary;

    }
  }

  .numbering__container {
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding: 10px 20px 10px 20px;
    position: absolute;
    right: 0;
    bottom: - $width-unit * 2;
    z-index: 99;
    width: $width-unit * 4;
    height: $width-unit * 2;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @include media-breakpoint-up(xl) {
      max-height: 220px;
    }

    .numbering {
      font-size: 21px;
      color: black;
    }
  }

}
.detail {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;

  .title {
    font-family: $font-family-monospace;
    width: 50%;
    border-right: 1px solid black;
    font-size: 16px;
    padding: 10px;
  } 

  .number {
    width: 50%;
    font-size: 16px;
    padding: 10px;
  }
  .capacity-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 10px;

    .capacity-detail {
      p {
        margin-bottom: 0;
      }
    }
  }
}

.detail:last-of-type {
  border-bottom: 0;
}

@include media-breakpoint-up(lg) {
  .detail {
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;

    .title {
      font-size: 12px;
      font-family: $font-family-monospace;
      width: 50%;
      border-right: 1px solid black;
      padding-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    } 

    .number {
      width: 50%;
      font-size: 12px;
      padding-left: 10px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .capacity-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      padding-top: 10px;
      font-size: 12px;
      padding-bottom: 10px;

      .capacity-detail {
        p {
          margin-bottom: 0;
        }
      }
    }
  }

  .detail:last-of-type {
    border-bottom: 0;
  }
  .machine--card__1 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 130%;
        width: 95%;
        background: $secondary;
        position: absolute;
        top: 0%;
        right: - $width-unit;
        z-index: -1;
      }

      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        width: calc(1px + #{$width-unit * 2});

        &:after {
          content: '';
          height: 10px;
          width: 70%;
          position: absolute;
          bottom: - 10px;
          left: 0;
          top: auto;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

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
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white;

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 99;
      width: $width-unit / 2;
      height: $width-unit * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      @include media-breakpoint-up(xl) {
        border: 3px solid white;
      }


      .numbering {
        font-size: 46px;
        color: white;
        transform: rotate(90deg);
      }
    }
  }

  .machine--card__2 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 110%;
        width: 75%;
        background: $secondary;
        position: absolute;
        bottom: -$width-unit;
        right: 0;
        z-index: -1;
      }

      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        width: calc(1px + #{$width-unit * 2});

        &:before {
          content: '';
          height: 10px;
          width: 15%;
          position: absolute;
          bottom: - 10px;
          right: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

        &:after {
          content: '';
          height: 10px;
          width: 70%;
          position: absolute;
          bottom: - 10px;
          left: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

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
              background: $primary;
              height: 3px;
              width: 100%;
              margin-bottom: 10px;
            }

          }
        }
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white;

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: -$width-unit;
      z-index: 99;
      width: $width-unit / 2;
      height: $width-unit * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      @include media-breakpoint-up(xl) {
        border: 3px solid white;
      }

      .numbering {
        font-size: 46px;
        color: white;
        transform: rotate(90deg);
      }
    }
  }

  .machine--card__3 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 110%;
        width: calc(75% + #{$width-unit} + 20px);
        background: $secondary;
        position: absolute;
        bottom: -$width-unit;
        right: - $width-unit;
        z-index: -1;
      }

      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        width: calc(1px + #{$width-unit * 2});

        &:after {
          content: '';
          height: 10px;
          width: 100%;
          position: absolute;
          top: - 10px;
          left: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

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
              background: $primary;
              height: 3px;
              width: 100%;
              margin-bottom: 10px;
            }

          }
        }
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white;

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: -$width-unit;
      z-index: 99;
      width: $width-unit / 2;
      height: $width-unit * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      @include media-breakpoint-up(xl) {
        border: 3px solid white;
      }

      .numbering {
        font-size: 46px;
        color: white;
        transform: rotate(90deg);
      }
    }
  }

  .machine--card__4 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 110%;
        width: calc(100% + #{$width-unit});
        background: $secondary;
        position: absolute;
        bottom: -$width-unit / 1.5;
        right: - $width-unit;
        z-index: -1;
      }

      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        width: calc(1px + #{$width-unit * 2});

        &:after {
          display: none;
          content: '';
          height: 10px;
          width: 100%;
          position: absolute;
          top: - 10px;
          left: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

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
              background: $primary;
              height: 3px;
              width: 100%;
              margin-bottom: 10px;
            }

          }
        }
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white;

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: -$width-unit / 1.5;
      z-index: 99;
      width: $width-unit / 2;
      height: $width-unit * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      @include media-breakpoint-up(xl) {
        border: 3px solid white;
      }

      .numbering {
        font-size: 46px;
        color: white;
        transform: rotate(90deg);
      }
    }
  }

  .machine--card__5 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    &:after {
      content: '';
      height: $width-unit * 2;
      width: $width-unit * 6;
      position: absolute;
      top: $width-unit * 2;
      right: 0;
      background: $secondary;

    }

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 100%;
        width: 100%;
        background: $secondary;
        position: absolute;
        bottom: -$width-unit / 1.5;
        right: 0;
        z-index: -1;
      }

      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        background:white;
        width: calc(1px + #{$width-unit * 2});

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
              background: $primary;
              height: 3px;
              width: 100%;
              margin-bottom: 10px;
            }

          }
        }
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white;

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      border: none;
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: -$width-unit / 1.5;
      z-index: 99;
      width: $width-unit / 2;
      height: $width-unit * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xl) {
        border: 3px solid white;
      }

      .numbering {
        font-size: 46px;
        color: white;
        transform: rotate(90deg);
      }
    }
  }

  .machine--card__6 {
    padding-bottom: $section-bottom;
    position: relative;
    z-index: 6;

    .machine-title {
      padding-bottom: $content-left;
    }
    .card-container {
      display: flex;
      flex-direction: row;
      position: relative;
      padding-top: 2rem;
      padding-left:$width-unit * 2;
      z-index: 5;

      &:before {
        content: '';
        height: 90%;
        width: 95%;
        background: $secondary;
        position: absolute;
        top: - 30%;
        right: - $width-unit;
        z-index: -1;
      }



      .machine-capacity__container {
        border: 1px solid black;
        padding: 10px;
        position: absolute; 
        top:0;
        left:0;
        width: calc(1px + #{$width-unit * 2});

        &:after {
          content: '';
          height: 10px;
          width: 70%;
          position: absolute;
          bottom: - 10px;
          left: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

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
      }

      .machine-details__container {
        border: 1px solid black;
        padding: 10px;
        width: $width-unit * 4;
        background:white; 
        position:relative;

        &:after {
          content: '';
          height: 15px;
          width: 40%;
          position: absolute;
          bottom: - 15px;
          right: 0;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 3px,
            transparent 3px,
            transparent 6px
            );
        }

        .machine-details {
          border: 1px solid black;

          .serial-number {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .manufactured {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .rpm {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 5px;
            }
          }

          .engine {
            border-bottom: 1px solid black;
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            } 

            .number {
              width: 50%;
              font-size: 12px;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
          }

          .capacity {
            display: flex;
            flex-direction: row;

            .title {
              font-size: 12px;
              font-family: $font-family-monospace;
              width: 50%;
              border-right: 1px solid black;
              padding-left: 10px;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .capacity-content {
              width: 50%;
              display: flex;
              flex-direction: column;
              padding-left: 10px;
              padding-top: 10px;
              font-size: 12px;
              padding-bottom: 10px;

              .capacity-detail {
              }
            }
          }
        }
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: $width-unit;
      left: 0;
      z-index: 99;

      .more-text {
        color: $primary;
        font-size: 12px;
      }
      
      .arrow {
        height: auto;
        width: 50px;
        transform: rotateY(180deg);
        position: absolute;
        right: - 70px;
        top: 30%;
        fill: $primary;

      }
    }

    .numbering__container {
      border: none;   
      padding: 10px 20px 10px 20px;
      position: absolute;
      right: 0;
      bottom: - $width-unit;
      z-index: 99;
      width: $width-unit * 2;
      height: $width-unit / 1.5;
      display: flex;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(xl) {
        border: 1px solid black;
      }

      .numbering {
        font-size: 46px;
        color: black;
      }
    }
  }
}

span {
  display: block;
}

.numeric {
  display: inline;
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



p {
  margin-bottom: 0;
}
</style>