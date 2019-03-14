<template>
  <section class="section--contact-hero">
    <grid-lines :light="true"/>
    <div class="contact-hero__image">
      <img class="hero-image">
      <div class="contact-hero__contact">
        <div class="social-contact">
          <div class="grid-div"></div>
          <div class="social-icons">
            <div class="icon">
              <FacebookLogo class="logo"/>
            </div>
            <div class="icon">
              <LinkedinLogo class="logo"/>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="adress">
            <h3 class="adress-content">{{adress}}</h3>
          </div>
          <div class="contact-details">
            <div class="email">
              <span class="email-title">email:</span>
              <span class="email-content">{{email}}</span>
            </div>
            <div class="phone">
              <span class="phone-title">telefoni:</span>
              <div class="phones">
                <div class="phone-details" v-for="(item,index) in phones" :key="index">
                  <span class="phone-location" v-if="item.name">{{item.name}}</span>
                  <span class="phone-content">{{item.phone}}</span>
                </div>
              </div>
            </div>
            <div class="fax">
              <span class="fax-title">fax:</span>
              <span class="fax-content">{{fax}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FacebookLogo from '@/assets/svg/social/svg/facebook_icon_black.svg'
  import LinkedinLogo from '@/assets/svg/social/svg/linkedin_icon_black.svg'
  export default {
    name: 'section-technologies-hero',
    components: {
      FacebookLogo,
      LinkedinLogo
    },
    data () {
      return {
        adress: 'Bul. Milutina Milankovića 120v, Beograd, Srbija',
        email: 'office@lhr.rs',
        phones: [
        {
          phone: '+381 (0)11 318 0932'
        },
        {
          phone: '+381 (0)11 318 0935'
        },
        {
          name: 'Batajnica',
          phone: '+381 (0)11 787 0066'
        }
        ],
        fax: '+381 (0)11 318 5597'
      }
    }
  }
</script>

<style lang="scss" scoped>
.section--contact-hero {
  width: 100%;
  height: 40vh;

  .hero-image {
    object-fit: cover;
    width: 100%;
  }

  @include media-breakpoint-up(xl) {
    height: 100vh;
  }

  .contact-hero__image {
    height: 40vh;
    width: 100%;
    position: relative;
    background: gray;

    @include media-breakpoint-up(xl) {
      height: 100%;
    }
  }
}
.contact-hero__contact {
  z-index: 5;
  position: absolute;
  bottom: - 370px;
  right: 0;
  height: 370px;
  width: 100%;
  padding: 0;
  padding-left: 0;
  background: white;
  display: flex;
  flex-direction: row;
  padding: 0;
  max-height: 683px;

  @include media-breakpoint-up(md) {
    bottom: - 100%;
    padding: 0 $width-unit 0 $width-unit;
    height: auto;   
  }

  @include media-breakpoint-up(md) {
    bottom: - 70%;
  }

  @include media-breakpoint-up(xl) {
    bottom: 0;
    width: $width-unit * 6;
    padding: 3rem;
    padding-left: 5rem;

    &:after {
      content: '';
      height: 1px;
      width: 100vw;
      background:$grid-white;
      position: absolute;
      top:0;
      right:0;
    }
  }

  .social-contact {
    display: flex;
    flex-direction: row;
    width: calc(100% - #{$width-unit * 8});
    height: $width-unit * 2;
    flex:1;
    position: absolute;
    bottom: -$width-unit * 3;
    left: $width-unit * 7;
    max-height: 683px;
    border: none;

    @include media-breakpoint-up(sm) {
      left: 50%;
      padding-left: 2rem;
      padding-right: 2rem;
    }

    @include media-breakpoint-up(md) {
      height: $width-unit;
      width: calc(100% - #{$width-unit * 9});
      bottom: -$width-unit;
      left: $width-unit;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }

    @include media-breakpoint-up(lg) {
      flex-direction: column;
      width: $width-unit;
      min-width: $width-unit;
      max-width: $width-unit;
      position: relative;
      top: auto;
      left: auto;
      bottom: auto;
      right: auto;
      height: auto;
      border-right: 0;
      padding: 0;

    }

    .grid-div {
      display: none;
      background: gray;
      height: 100%;
      width: 100%;
      border: none;
      max-height: 312px;

      @include media-breakpoint-up(md) {
        border-bottom: 1px solid black;
      }

      @include media-breakpoint-up(lg) {
        display: block;
        height:  41.4%;
        background: white;
        background-image: repeating-linear-gradient(
          red,
          red  5px,
          transparent 5px,
          transparent  10px
          );
      }
    }

    .social-icons {
      height:100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      max-height: 312px;

      @include media-breakpoint-up(md) {
        padding-bottom: 10px;
      }

      @include media-breakpoint-up(lg) {
        padding-bottom: 0;
      }

      @include media-breakpoint-up(lg) {
        height: 50%;
        padding: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        display: block;

      }

      .icon {
        height: 50%;
        padding: 0;

        @include media-breakpoint-up(lg) {
          padding: 10px;

        }

        .logo {
          width: auto;
          height: 100%;

          @include media-breakpoint-up(lg) {
            width: 100%;
          }
        }
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: none;

    @include media-breakpoint-up(md) {
      border: 1px solid black;
    }

    @include media-breakpoint-up(xl) {
      font-size: 16px;
    }

    .adress {
      width: 100%;    
      padding-left: 2rem;
      padding-top: 0.7rem;
      padding-bottom: 1rem;

      @include media-breakpoint-up(sm) {
        padding-right: 1em;
        padding-top: 1rem;
        border: none;
      }

      @include media-breakpoint-up(md) {
        padding-right: 2em;
        border-bottom: 1px solid black;
      }

      @include media-breakpoint-up(xl) {
        padding-left: 2rem;
        padding-top: 0.7rem;

      }

      .adress-content {
        margin: 0;
      }
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      height: 100%;

      .email {
        border: none;
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 3rem;

        @include media-breakpoint-up(md) {
          border-bottom: 1px solid black;
        }

        .email-title {
          height: 100%;
          padding-left: 2rem;
          padding-top: 0.7rem;
          padding-bottom: 1rem;
          width: 8rem;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(xl) {
            padding: 0;
            font-size: 16px;
            padding-left: 2rem;
            padding-top: 0.7rem;
          }
        }

        .email-content {
          height: 100%;
          padding-left: 2rem;
          padding-top: 0.7rem;      
          border: none;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(md) {
            border-left: 1px solid black;
          }

          @include media-breakpoint-up(xl) {
            padding-left: 2rem;
            padding-top: 0.7rem;
          }
        }
      }

      .phone {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex:1;
        
        .phone-title {
          height: 100%;
          padding-left: 2rem;
          padding-top: 0.7rem;
          width: 8rem;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(xl) {
            padding-left: 2rem;
            padding-top: 0.7rem;
          }
        }

        .phones {
          padding-left: 2rem;
          padding-top: 1rem;
          border: none;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(md) {
            border-left: 1px solid black;
          } 

          @include media-breakpoint-up(xl) {
            padding-left: 2rem;
            padding-top: 1rem;

          }

          .phone-details {
            padding-bottom: 1rem;

            .phone-location {
              color: gray;
              font-size: 12px;
            }
          }
        }
      }

      .fax {
        border: none;
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 3rem;

        @include media-breakpoint-up(md) {
          border-top: 1px solid black;
        }


        .fax-title {
          height: 100%;
          padding-left: 2rem;
          padding-top: 0.7rem;  
          width: 8rem;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(xl) {
            padding-left: 2rem;
            padding-top: 0.7rem;

          }
        }

        .fax-content {
          height: 100%;
          padding-left: 2rem;
          padding-top: 0.7rem;
          border: none;

          @include media-breakpoint-up(sm) {
            padding: 0;
            padding-left: 1rem;
          }

          @include media-breakpoint-up(md) {
            border-left: 1px solid black;
          }

          @include media-breakpoint-up(xl) {
            padding-left: 2rem;
            padding-top: 0.7rem;
          }
        }
      }
    }
  }
}

span {
  display: block;
}
</style>