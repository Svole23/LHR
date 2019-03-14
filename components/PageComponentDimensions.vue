<template>
  <div class="component-container">
    <div class="title-container">
      <h4 class="component-title">{{item.fields.title}}</h4>  
    </div>
    <div class="dimensions-container row no-gutters">
      <div class="col-6 col-left">
        <div class="container-upper">
          <div class="header-container">
            <p class="title">Oblik</p>
          </div>
          <div class="component-content-container__1" v-html="item.fields.component_content_one"/>
        </div>
        <div class="container-lower">
          <div class="header-container">
            <p class="title">Prečnik</p>
          </div>
          <div class="component-content-container__2" v-html="item.fields.component_content_two"/>
        </div>
      </div>
      <div class="col-6 col-right">
        <div class="container-upper">
          <div class="header-container" />
          <div class="shape-container">
            <div class="outter">
              <div class="box">
                <div class="circle"></div>
              </div>
              <div class="inner"></div>
            </div>
          </div>
        </div>
        <div class="container-lower">
          <div class="header-container">
            <p class="title">Dimenzije</p>
          </div>
          <div class="component-content-container__3" v-html="item.fields.component_content_three"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-component-dimensions',
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.component-container {
  display: flex;
  flex-direction: column;
  padding-right: 0;

  @include media-breakpoint-up(lg) {
    flex-direction: row;
    padding-left: 0;
  }

  @include media-breakpoint-up(xl) {
    margin-bottom: $width-unit;
    padding-left: $content-left;
  }

  .title-container {
    flex: 1;
    height: $width-unit * 2;
    background: transparent;      
    color: black; 
    padding: 0; 
    margin-bottom: 3rem;  

    @include media-breakpoint-up(lg) {
      padding: $content-left / 2;
      background: $secondary;
      margin-bottom: 0;
    }
  }

  .dimensions-container {
    background: black;
    color: white;
    width: 100%;
    height: 450px;
    padding: 0;
    margin-bottom: 2rem;

    @include media-breakpoint-up(md) {
      padding: 2rem;
    }

    @include media-breakpoint-up(lg) {
      width: $width-unit * 4;
      margin-bottom: 0;
    }

    @include media-breakpoint-up(xl) {
      height: $width-unit * 4;
    }

    .col-left {
      border-right: 1px solid white;
    }

    .col-left,.col-right {
      max-width: 50%;
      .container-upper,.container-lower {
        height: 50%;
        width: 100%;
      }

      .header-container {
        height: 3rem;
        width: 100%;
        border-bottom: 1px solid white;
        display: flex;
        flex-direction: row;
        align-items: center;

        .title {
          margin: 0;
          padding-left: 1rem;
        }
      }

      .container-upper {
        border-bottom: 1px solid white;

        .shape-container {
          padding-top: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;

          .outter {
            width:100px;
            height:100px;
            float: left;
            position: relative;
            overflow: hidden;
            transform: rotate(67deg);

            .box {
              position: absolute;
              height: 75px;
              width: 75px;
              border: 1px solid white;
              top: 12px;
              left: 12px;
              transform: rotate(-67deg);


              .circle {
                width: 80%;
                height: 80%;
                border-radius: 50%;
                border: 1px solid white;
                position: absolute;
                top: 7px;
                left: 7px;
              }
            }
          }
          .inner {
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            overflow: hidden;
            transform: rotate(45deg);
            background: transparent;
            border: 1px solid white;
          }
          .inner:before {
            position: absolute;
            top: -1px; right: -1px; bottom: -1px; left: -1px;
            transform: rotate(45deg);
            content: '';
            border: 1px solid white;
          }
        }
      }
      .component-content-container__1,
      .component-content-container__2,
      .component-content-container__3, {
        height: 100%;
        width: 100%;
      }
    }
  }
}
  </style>