<template>
  <div class="logo-container">
    <LhrLogo class="logo"/>
  </div>
</template>

<script>
  import LhrLogo from '@/assets/svg/logo/LHR_logo_orange.svg'
  export default {
    name: 'logo',
    components: {
      LhrLogo
    }
  }
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  
  .logo {
    width: 100%;
    height: auto;
  }
}
</style>