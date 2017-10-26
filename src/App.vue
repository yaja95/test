<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dark>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon dark v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" scroll-off-screen>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-btn
        icon
        dark
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        dark
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <router-view>
            </router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon dark>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {icon: 'home', title: 'Home', url: '/'},
          {icon: 'dialpad', title: 'GPA Calculator', url: '/GPA'},
          {icon: 'alarm', title: 'Analog Clock', url: '/time'},
          {icon: 'date_range', title: 'Calendar', url: '/calendar'},
          {icon: 'camera', title: 'Slideshow!', url: '/slides'}
          ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Ajay\'s Webpage'
      }
    }
  }

</script>
