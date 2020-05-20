<template>
  <products :items="lapel_pins"></products>
</template>

<script>
import Products from '@/components/Products'

export default {

  name: 'LapelPinsIndex',

  components: {
    Products
  },

  computed: {
    lapel_pins () {
      return []
    }
  }

}
</script>
