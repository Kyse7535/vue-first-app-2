<template>
  <nav>
    <v-app-bar flat app dark class=" px-5">
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="hidden-sm-and-down" >Title</v-toolbar-title>
      <div left class="hidden-sm-and-down">
        <v-btn v-for="(item, id) in menu" class="mx-4" :key="id" :to="item.route">{{item.text}}</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-md-and-down">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon class="hidden-md-and-down">
        <v-badge color="success" class="white--text" :content="nbreFavorite" overlap>
          <v-icon>mdi-heart-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge color="success" class="white--text" :content="cart" overlap>
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
        <v-btn icon>
          <v-icon>mdi-lock-outline</v-icon>
        </v-btn>
    </v-app-bar>
  </nav>
</template>
<script>
import {computed} from "vue";
import {store} from "@/store/store";

export default {
  setup() {
    const nbreFavorite = computed(() => store.state.favorites.length);
    const cart = computed(() => store.state.cart.length);
    const menu = [
      {text: "home", route: "/"},
      {text: "shop", route: "/shop"},
      {text: "about", route: "/about"}
    ];
    const buttons = ["mdi-magnify", "mdi-heart-outline", "mdi-cart-outline", "mdi-lock-outline"]

    return {
      nbreFavorite,
      cart,
      menu
    }
  }
}

</script>
<style>
.height-70px {
  height: 70px;
}


</style>