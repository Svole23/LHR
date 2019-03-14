<template>
<page-section>
  <grid-lines/>
  <grid-container>
    <div class="home-piles row no-gutters">
      <div class="col-12 col-md-8 col-lg-6">
        <h3 class="section--piles__title" v-html="title"/>
        <div class="pile__container" v-for="(item, index) in list" :key="index">
          <div class="pile-index numeric">{{ index + 1 | padNumber }}</div>
          <div class="pile-details">
            <p class="pile-title">{{item.title}}</p>
            <span class="pile-text">{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </grid-container>
</page-section>
</template>

<script>
  export default {
    name: 'section-home-piles',
    data () {
      return {
        title: 'Specijalizovani smo za izvodjenje <br/>svih vrsta šipova:',
        list: [
          {
            title:'Pobijenih, "Simpleks" šipova',
            text: 'prečnika 406, 520 i 600 mm livenih u tlu'
          },
          {
            title:'Bušenih klasičnih šipova',
            text: 'prečnika 400, 600, 800, 1200, 1500 mm'
          },
          {
            title:'Bušenih CFA šipova sa kontinualnom spiralom',
            text: 'prečnika 600 , 800 mm i 1000mm'
          },
          {
            title:'SDA šipova',
            text: 'prečnika 520mm i 600mm'
          },
          {
            title:'"Mega" šipova',
            text: ''
          },
          {
            title:'Gotovih armirano-betonskih i čeličnih šipova',
            text: ''
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
.section--piles__title {
  padding-right: 2rem;
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.pile__container {
  display:flex;
  flex-direction: row;
  margin-bottom: 2rem;

  .pile-index {
    width: $content-left;
    min-width: $content-left;
    font-size: 14px;

  }

  .pile-details {
    display: flex;
    flex-direction: column;

    .pile-title {
      margin:0;
      font-size: 21px;
      font-weight: bold;
    }
  }
}

.home-piles {
  padding-bottom: $section-bottom;
}
</style>
