<template>
  <div>home</div>
</template>
<script>
import { mixinsTest, mixinsTest2, extendsTest } from "./mixinsExtends";
export default {
  name: "Home",
  data() {
    return {};
  },
  beforeCreate() {
    console.log("组件的beforeCreated");
  },
  created() {
    console.log("组件的created");
  },
  mixins: [mixinsTest2, mixinsTest], // 先调用那个mixins对象，就先执行哪个
  extends: extendsTest, // 使用extends
};
</script>
<style lang="css" scoped></style>
