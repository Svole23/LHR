<template>
  <div id="app">
    <app-header/>
    <main-menu/>
    <transition name="page-transition">
      <component :is="pageTemplate" :model="page" />
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import BaseApp from '@/plugins/mixins/baseApp'
import CustomTransition from '@/components/transitions/CustomTransition'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import MainMenu from '@/components/MainMenu'
import {TweenMax} from 'gsap'
export default {
  name: 'app',
  mixins: [
    BaseApp
  ],
  components: {
    AppHeader,
    AppFooter,
    MainMenu
  },
  data () {
    return {
      showCookie: false,
      siteName: "LHR"
    }
  },
  computed: {
    isMenuOpen () {
      console.log('coming from layout',this.$store.state.isMenuOpen)
      return this.$store.state.isMenuOpen
    },
    pageKey () {
      let key = this.page ? this.page.id : null

      // CUSTOM TRANSITION PAGES
      // stay on the same template and don't do the default transition
      if (this.page && this.page.attribute_set_code === 'news_article') {
        key = 'blog'
      }

      return key
    },
    gdprVisible () {
      return this.$store.getters['app/getState']('gdprVisible')
    },
    isShrinked () {
      return this.$store.getters["app/getState"]("scrollTop") > 30
    }
  },
  watch: {
    // locale (val) {
    //   this.loaded = false
    //   this.$store.dispatch('app/SET_STATE', { locale: val })
    //   this.setLocale(val)
    // }

    isMenuOpen (newvalue,oldvalue) {
      if(newvalue === true) {
        TweenMax.set("body", { overflowY: 'hidden' })
      }
      if(newvalue === false) {
        TweenMax.set("body", { overflowY: 'scroll' })
      }
    }
  },

  // events: {},
  mounted () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, true)
    window.addEventListener('scroll', this.scrollHandler, true)
    const self = this
    self.$nextTick(self.resizeHandler)
    if (!this.parsedPages.length) {
      // console.warn("API fetch didn't finish on server side")
      this.$store.dispatch('pages/LOAD_PAGES', 'en_US')
    }
    // this.showCookie = !cookies.get('showCookie')
  },

  methods: {
    // @TODO move this to app or create a plugin
    onMouseMove (e) {
      this.$store.dispatch('app/SET_STATE', {
        pageX: e.pageX,
        pageY: e.pageY
      })
    },
    scrollHandler () {
      let doc = document.documentElement
      let left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

      this.$store.dispatch('app/SET_STATE', {
        scrollTop: top,
        scrollLeft: left
      })
    },
    resizeHandler () {
      const self = this

      self.$store.dispatch('app/SET_STATE', {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      })

      self.$nextTick(() => {
        self.$bus.$emit('resize')
      })
    },
    cookieClick () {
      this.showCookie = false
      // cookies.set('showCookie', true)
    }
  }
}
</script>

<style lang="scss">
// app -------------------------------------------------------------------------

#app {
  overflow-x: hidden;
 // h1,h2,h3,h4,h5 {
 //   font-family: "Ubuntu", sans-serif;
 // }
}
</style>
