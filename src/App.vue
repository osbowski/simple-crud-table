<template>
  <Home />
</template>
<script>
import Home from "./view/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>
<style>
.wrapper {
  max-width: 50vw;
  margin: 50px auto;
}

.text-alert{
  text-align: center;
  color:red;
  padding: 10px;
}
</style>
