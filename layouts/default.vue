<template>
  <v-app>
    <v-toolbar fixed dark app color="primary" :clipped-left="clipped">
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; MegosApp</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        title: '桜島降灰予報'
      }
    }
  }
</script>
