<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style >
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
