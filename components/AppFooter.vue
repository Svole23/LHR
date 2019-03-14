<template>
  <div class="app-footer">
    <div class="main">
      <div class="social__container">
        <div class="facebook-logo">
          <FacebookLogo class="logo"/>
        </div>
        <div class="linkedin-logo">
          <LinkedinLogo class="logo"/>
        </div>
      </div>
      <nuxt-link to="/" class="logo-container">
        <LhrLogoWhite class="lrh-logo"/>
      </nuxt-link>
      <div class="contact-container">
        <div class="email-logo">
          <EmailLogo class="logo"/>
        </div>
        <div class="location-logo">
          <LocationLogo class="logo"/>
        </div>
      </div>
    </div>
    <div class="copy">
      <div class="privacy-policy">
        <p class="privacy-text">Privacy Policy</p>
      </div>
      <div class="copyright">
        <span class="copyright-logo">©</span>
        <p class="copyright-text">Copyright LHR <span class="numeric">2019</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import FacebookLogo from '@/assets/svg/social/svg/facebook_icon_white.svg'
  import LinkedinLogo from '@/assets/svg/social/svg/linkedin_icon_white.svg'
  import LhrLogoWhite from '@/assets/svg/logo/LHR_logo_white.svg'
  import EmailLogo from '@/assets/svg/contact/email_icon_white.svg'
  import LocationLogo from '@/assets/svg/contact/location_icon_white.svg'
  export default {
    name: 'app-footer',
    components: {
      FacebookLogo,
      LinkedinLogo,
      LhrLogoWhite,
      EmailLogo,
      LocationLogo
    }
  }
</script>

<style lang="scss" scoped>
.app-footer {
  background: black;
  position: relative;

  .numeric {
    font-size: 10px;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: $width-unit * 8;

    @include media-breakpoint-up(sm) {
      height: $width-unit * 6;
    }

    @include media-breakpoint-up(md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: $width-unit;
      padding-right: $width-unit;
      padding-top: $width-unit;
      padding-bottom: $width-unit / 1.5;
      height: auto;
      position: relative;
    }

    .logo-container {
      display: block;
      width: $width-unit * 4;
      height: auto;
      opacity: 1;
      position: absolute;
      top: $width-unit;
      left: $width-unit;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 3
      }

      @include media-breakpoint-up(md) {
        width: $width-unit * 1.5;
        height: 100%;
        opacity: 0.1;
        position: static;
      }

      .lhr-logo {
        height: 100%;
        opacity: 0.1;
      }
    }

    .logo-container:hover {
      opacity: 1;
    }

    .social__container {
      width: $width-unit * 4;
      height: $width-unit * 2;
      display: flex;
      flex-direction: row;
      position: absolute;
      top: $width-unit * 3;
      left: $width-unit;
      padding: 10px;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 3;
        top: $width-unit * 2.2;
        padding: 20px;
      }

      @include media-breakpoint-up(md) {
        width: $width-unit;
        height: 100%;
        flex-direction: row;
        padding: 0;
        position: static;    
      }

      .facebook-logo {
        height: 100%;
        width: 50%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        opacity: 1;
        padding: 0;
        position: relative;
        overflow: hidden;

        &:after {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(- 130%);
          position: absolute;
          left: 0;
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(130%);
          position: absolute;
          right: 0;
        }

        @include media-breakpoint-up(md) {
          opacity: 0.5;
          padding: 0;
        }

        @include media-breakpoint-up(xl) {
          padding: 15px;
        }
      }

      .facebook-logo:hover {
        opacity: 1;

        &:after {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
        &:before {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }

        .logo {
          opacity: 1;
        }
      }

      .linkedin-logo {
        height: 100%;
        width: 50%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        opacity: 1;
        padding: 0;
        position: relative;
        overflow: hidden;

        &:after {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(- 130%);
          position: absolute;
          left: 0;
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(130%);
          position: absolute;
          right: 0;
        }

        @include media-breakpoint-up(md) {
          opacity: 0.5;
          padding: 0;
        }

        @include media-breakpoint-up(xl) {
          padding: 15px;
        }
      }

      .linkedin-logo:hover {
        opacity: 1;

        &:after {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
        &:before {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }

        .logo {
          opacity: 1;
        }
      }
    }

    .contact-container {
      width: $width-unit * 4;
      height: $width-unit * 2;
      display: flex;
      flex-direction: row;
      position: absolute;
      top: $width-unit * 5;
      left: $width-unit;
      padding: 10px;

      @include media-breakpoint-up(sm) {
        width: $width-unit * 3;
        top: $width-unit * 4;
        padding: 20px;
      }

      @include media-breakpoint-up(md) {
        width: $width-unit;
        height: 100%;
        flex-direction: row;
        position: static;
        padding: 0;
      }

      .email-logo {
        height: 100%;
        width: 50%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        opacity: 1;
        padding: 0;
        position: relative;
        overflow: hidden;

        &:after {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(- 130%);
          position: absolute;
          left: 0;
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(130%);
          position: absolute;
          right: 0;
        }

        @include media-breakpoint-up(md) {
          opacity: 0.5;
          padding: 0;
        }

        @include media-breakpoint-up(xl) {
          padding: 15px;
        }
      }

      .email-logo:hover {
        opacity: 1;

        &:after {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
        &:before {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
      }

      .location-logo {
        height: 100%;
        width: 50%;
        min-height: 100%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        opacity: 1;
        padding: 0;
        position: relative;
        overflow: hidden;

        &:after {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(- 130%);
          position: absolute;
          left: 0;
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: white;
          transform: translateY(130%);
          position: absolute;
          right: 0;
        }

        @include media-breakpoint-up(md) {
          opacity: 0.5;
          padding: 0;
        }

        @include media-breakpoint-up(xl) {
          padding: 15px;
        }
      }

      .location-logo:hover {
        opacity: 1;

        &:after {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
        &:before {
          transform: translateY(-15px);
          transition: transform 0.25s ease-in;
        }
      }
    }
  }

  .copy {
    height: 20%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: $width-unit * 2;
    padding-right: 0;
    position: absolute;
    right: $width-unit;
    bottom: $width-unit;

    @include media-breakpoint-up(md) {
      height: $width-unit / 1.7;
      width: 100%;
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-left: $width-unit;
      padding-right: $width-unit;
      align-items: center;
      position: static;
      flex-direction: row;
    }

    .copyright {
      display: flex;
      flex-direction: row;
      opacity: 0.3;
      color: white;
      font-size: 9px;
      justify-content: flex-end;
      font-family: $font-family-monospace;

      @include media-breakpoint-up(md) {
        align-items: center;
        justify-content: flex-start;
      }

      .copyright-logo {
        display: block;
        font-size: 14px;
      }

      .copyright-text {
        padding-left: 0.3rem;
        margin:0;
        display: inline;

        @include media-breakpoint-up(md) {
          padding-left: 1rem;
          margin:0;
          display: block;
        }
      }
    }

    .privacy-policy {
      color: white;
      opacity:0.3;
      font-size: 9px;
      align-items: center;
      align-self: flex-end;
      font-family: $font-family-monospace;

      @include media-breakpoint-up(md) {
        align-self: auto;
      }

      .privacy-text {
        margin:0;
        display: inline;
        width: auto;
      }
    }
  }
}

.logo {
  height: 100%;
  max-width: 100%;
  opacity: 0.5;
}

.logo:hover {
  opacity: 1;
}
</style>
