<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile @click="yell('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="yell('contact')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <!-- content -->
    <v-content>
      <v-container fluid>
        <!-- this is where different pages are loaded -->
        <router-view />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'VueJs Guestbook',
      drawer: null
    }
  },
  methods: {
    yell: function (val) {
      // alert('We are moving to ' + val)
      this.title = val.toUpperCase()
    }
  }
}
</script>
