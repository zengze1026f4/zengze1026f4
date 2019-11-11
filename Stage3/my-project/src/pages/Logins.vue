
<template>
  <div>
    <Return />
    <Login />
  </div>
</template>
<script>
import Login from "../components/Login.vue";
import Return from "../components/Return.vue";
export default {
  components: {
    Login,
    Return
  }
};
</script>