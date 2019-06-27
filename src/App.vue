<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title class="headline">
        <span class="font-weight-light" >Code challenge </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          to="/"
          flat
        >
          Home page
        </v-btn>
        <v-btn
          to="/photos"
          flat
        >
          Photos
        </v-btn>
      </v-toolbar-items> 
    </v-toolbar> 
     <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
