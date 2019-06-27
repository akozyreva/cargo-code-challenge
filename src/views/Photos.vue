<template>
    <div>
    <v-container>
  <PhotoCard :loadedPhotos="loadedPhotos"/>
  <v-content>
      <div class="text-xs-center">
        <v-btn
        @click="showPhotos()"
        flat
        target="_blank"
      >
        <span class="mr-2">Show More Photos</span>
      </v-btn>
        </div>
    </v-content>
    </v-container>
    </div>
</template>

<script>
import PhotoCard from '@/components/PhotoCard'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PhotoCard
  },
  data () {
    return {
      counter: 0
    }
  }, 
  methods: {
    showPhotos() {
      this.counter += 1
      this.$store.dispatch('setPhotos', this.counter)
    }
  },
   mounted(){
    this.showPhotos()
  },
  computed: {
    ...mapGetters([
      'loadedPhotos'
    ])
  }
}
</script>
