<template>
  <div class="bigdel clearfix">
    <Header2 />
    <Banner2 />
    <Detail />
    <Goodaction />
  </div>
</template>
<script>
import Detail from "../components/Detail.vue";
import Banner2 from "../components/Banner2.vue";
import Goodaction from "../components/Goodaction.vue";
import Header2 from "../components/Header2.vue";
export default {
  components: {
    Detail,
    Banner2,
    Goodaction,
    Header2
  }
};
</script>
<style >
html,
body,
.bigdel {
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