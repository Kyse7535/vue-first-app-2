<template>
  <v-app>
    <HeaderView />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderView from "@/views/HeaderView.vue";

export default defineComponent({
  name: 'App',
  components: {HeaderView},
  data () {
    return {
      //
    }
  },
})
</script>
