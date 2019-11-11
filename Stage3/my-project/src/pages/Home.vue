<template>
  <div class="mainpage clearfix">
    <Header />
    <Banner />
    <Conpany />
    <Grid />
    <Lines />
    <Lists />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Conpany from "../components/Conpany.vue";
import Grid from "../components/Grid.vue";
import Lines from "../components/Lines.vue";
import Lists from "../components/Lists.vue";

export default {
  components: {
    Header,
    Banner,
    Conpany,
    Grid,
    Lines,
    Lists
  }
};
</script>
<style >
.mainpage {
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