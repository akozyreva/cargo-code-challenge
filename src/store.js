import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      photos: []
  },
  mutations: {
    setPhotos(state, photosUrls) {
      photosUrls.forEach( el => state.photos.push(el))
    }
  },
  actions: {
    setPhotos (vuexContext, page) {
      const api_key = "a78365b0b0a18733a5419c9da4e39706"
      const baseURI = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${api_key}&per_page=3&page=${page}&format=json&nojsoncallback=1`
        axios.get(baseURI)
        .then( result => {
          const photosArr = result.data.photos.photo
          let photosArrUrls = []
          photosArr.forEach( (el) => {
              const url = `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`
              photosArrUrls.push(url)
          });
          vuexContext.commit('setPhotos', photosArrUrls)
        }).catch(er => {console.log(er)})
    }
  },
  getters: {
    loadedPhotos(state) {
        return state.photos
    }
  }
})
