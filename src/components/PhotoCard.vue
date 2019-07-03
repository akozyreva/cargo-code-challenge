<template>
  <div>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6 mb-4 v-for="(photo, index) in loadedPhotos" :key="index">
        <v-card>
          <v-img :src="photo"></v-img>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["loadedPhotos"],
  data: () => ({})
};
</script>

<style></style>
