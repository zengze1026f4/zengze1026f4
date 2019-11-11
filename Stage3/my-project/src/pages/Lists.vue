<template>
  <div>
    <Navd />
    <Tab />
    <Goodlist />
  </div>
</template>
<script>
import Tab from "../components/Tab.vue";
import Goodlist from "../components/Goodlist.vue";
import Navd from "../components/Navd.vue";
export default {
  components: {
    Tab,
    Goodlist,
    Navd
  }
};
</script>