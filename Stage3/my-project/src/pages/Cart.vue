<template>
  <div class="bigcar clearfix">
    <Nav />
    <Shopcar />
    <Count />
  </div>
</template>
<script>
import Shopcar from "../components/Shopcar.vue";
import Nav from "../components/Nav.vue";
import Count from "../components/Count.vue";
export default {
  components: {
    Shopcar,
    Nav,
    Count
  }
};
</script>
<style >
html,
body,
.bigcar {
  height: 100%;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
</style>