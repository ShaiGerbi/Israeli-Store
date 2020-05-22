<template>
  <v-row>
    <v-col v-for="item in items" :key="item.id" xs="12" sm="6" md="4">
      <v-card>

        <v-img :src="item.src" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular size="50" color="blue lighten-4" indeterminate></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-actions>

          <v-btn color="primary" href="mailto:ShaiGerbiApps@gmail.com" text>
            Buy It Now
          </v-btn>

          <v-spacer />

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {

  name: 'Products',

  props: {
    items: {
      require: true,
      type: Array,
      default () {
        return []
      }
    }
  }

}
</script>
