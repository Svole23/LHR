<template>
  <section class="section">
    <div class="map-container">
      <div class="map-section">
        <GmapMap
  :center="center"
  :options="options"
  :zoom="13"
  map-type-id="terrain"
  style="width: 100%; height: 100%;"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in positions"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
      </div>
    </div>
  </section>
</template>

<script>
import mapStyles from '@/data/mapStyles'
import {gmapApi} from 'vue2-google-maps'

export default {
  name:'contact-map',
  data: () => ({
    options: {
      styles: mapStyles
    },
    places: [],
    positions: [
      {position:{lat: 44.813427,lng: 20.412067}}
    ],
    center: {
      lat: 44.813427,
      lng: 20.412067
    }
  }),
  computed: {
    locations () {
      return this.$store.getters.StateLocations
    },
    activeLocation () {
      return this.$store.getters.ActiveLocation
    }
  },
  methods: {
    onZoomChanged (zoom) {
      // fix 
      if (this.zoom !== zoom) {
        this.zoom = zoom
      }
    },
    zoomIn () {
      this.zoom++
      console.log(this.zoom)
    },
    zoomOut () {
      this.zoom--
      console.log(this.zoom)
    },
    onMarkerClick (marker) {
      this.center = marker
      this.zoom = 15
    },
    fitBounds () {
      console.log('clicked on fitBounds')
      if (!this.$mapObject) return

      // create bounds object
      let bounds = new google.maps.LatLngBounds()

      // iterate markers / extend bounds
      this.markers.forEach((marker, index) => {
        console.log('extending bounds', marker)
        bounds.extend(marker)
      })

      console.log('bounds', bounds)

      // fir bounds
      this.$mapObject.fitBounds(bounds)
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  //mounted () {
  //  this.geolocate()
  //    this.$mapObject = null
  //    this.$refs.map.$mapPromise.then((map) => {
  //      this.$mapObject = map
  //      this.fitBounds()
  //    })
  //},
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
  position:relative;
  padding-right:0;
  height: 100%;
  width: 100%;
  padding-left: 0;
}
.map-container {
  height: 100%;
  width: 100%;
}
.map-section {
  height: 100%;
  width: 100%;
}
</style>