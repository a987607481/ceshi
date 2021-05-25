<template>
  <div class="app">
    <span class="aa" @click="aaa++">{{aaa}}</span>
    <router-link to="/home">home</router-link>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "index",
  setup() {
      const aaa = ref(0)
      aaa.value++
      return { aaa };
  }
};
</script>
<style lang='less' scoped>
.app{
    width: 1200px;
    margin: 200px auto;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}
</style>