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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
  margin: 50px 0;
}
</style>
