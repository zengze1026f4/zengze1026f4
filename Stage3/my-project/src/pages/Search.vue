<template>
  <div class="search clearfix">
    <Search />
    <div class="twopage clearfix">
      <Slide />
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Slide from "../components/Slide.vue";
export default {
  components: {
    Search,
    Slide
  }
};
</script>
<style >
html,
body,
.search,
.twopage {
  width: 100%;
  height: 100%;
}
.search {
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 50px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
}
</style>