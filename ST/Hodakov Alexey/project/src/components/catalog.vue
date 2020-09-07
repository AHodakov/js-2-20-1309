<template>
  <div class="row" id="catalog">
    <item v-for="item of items" :key="item.productId" :item="item" />
  </div>
</template>

<script>
import item from "./items/item.vue";
import {get} from "../utils/requests.js"

export default {
  components: { item },
  data() {
    return {
      items: [],
      url:
        "https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json",
    };
  },
  methods: {
   
    // find(item) {
    //   return this.basketItems.find((el) => el.productId == item.productId);
    // },
    // addBasketItem(item) {
    //   if (this.find(item)) {
    //     this.find(item).amount++;
    //   } else {
    //     this.basketItems.push(Object.assign({}, item, { amount: 1 }));
    //   }
    // },
  },
  mounted() {
    get(this.url).then((item) => {
      this.items = item;
    });
  },
};
</script>

<style>
</style>