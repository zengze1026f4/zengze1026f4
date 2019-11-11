<template>
  <div class="mine clearfix">
    <Nav1 />
    <Me />
  </div>
</template>
<script>
import Me from "../components/Me.vue";
import Nav1 from "../components/Nav1.vue";
export default {
  components: {
    Nav1,
    Me
  }
};
</script>
<style>
html,
body,
.mine {
  height: 100%;
}
.mine {
  overflow: auto;
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