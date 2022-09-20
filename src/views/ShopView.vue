<template>
<main>
  <div class="h-150 bg-grey-lighten-1">
    <v-container class="position-relative d-flex h-150">
      <span class="d-block position-absolute h-auto start-0">
        <router-link class="ma-0 text-decoration-none " to="/">
        <v-icon size="15" class="mr-1">mdi-home</v-icon>Home >
        </router-link>
        Features products
      </span>
      <h2 class="align-self-center w-100 text-md-center ">Features Products</h2>
    </v-container>
  </div>

  <v-container>
    <v-row>
      <v-col><h1>Pagination</h1>
      </v-col>
    </v-row>
    <v-row v-if="isProductsEmpty">
      <v-col class="d-flex justify-center">
        <img src="../../public/loadin.gif" />
      </v-col>
    </v-row>
    <v-row else>
      <v-col v-for="product in products" :key="product.id" cols="4" class=" position-relative h-400px " >
        <img :src="`https://${product.imageUrl}`" :alt="product.name" class=" w-100 h-auto " />
        <div class=" position-absolute bottom-0 ">
          <p>{{firstWord(product.name)}}...</p>
          <p class=" font-weight-bold ">{{product.price.current.text}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</main>
</template>

<script lang="ts">
import type {Product} from '@/components/typeInterfaces'
import {store} from "@/store/store";
import {defineComponent} from "vue";
export default defineComponent({
  data() {
    return {
      products: [] as Array<Product>
    }
  },
  computed: {
    isProductsEmpty(): Boolean  {
      return this.products.length === 0
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      await store.dispatch('fetchProductsLocally')
      this.products = store.getters.getAllProducts
    },
    firstWord(nameProduct: string) {
      let nameArray = nameProduct.split(" ");
      nameArray = nameArray.splice(3);
      return nameArray.join(" ");
    }
  }
})
</script>

<style>
.px-8 {
  padding-left: 150px;
  padding-right: 150px;
}

.h-150 {
  height: 150px;
}

.start-0 {
  left: 17px;
}

.bottom-0 {
  bottom: 0;
}

.h-400px {
  height: 575px;
}


</style>