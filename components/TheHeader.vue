<template>
  <div>

    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <v-list nav>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {

  name: 'TheHeader',

  data () {
    return {
      drawer: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Stamps',
          to: '/stamps'
        },
        {
          title: 'Coins',
          to: '/coins'
        },
        {
          title: 'Tokens',
          to: '/tokens'
        },
        {
          title: 'Lapel Pins',
          to: '/lapel_pins'
        }
      ],
      title: 'Israeli Store'
    }
  }

}
</script>
