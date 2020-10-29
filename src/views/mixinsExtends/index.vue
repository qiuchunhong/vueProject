<template>
  <div>
    <child></child>
    <kid></kid>
  </div>
</template>

<script>
import Vue from "vue";
import mixins2 from "./mixins2";
// let mixins2 = {
//   data() {
//     return {
//       msg: 1,
//     };
//   },
//   methods: {
//     foo() {
//       this.msg++;
//     },
//   },
// };
Vue.component("child", {
  template: '<h1 @click="foo">child component- {{msg}}</h1>',
  mixins: [mixins2],
  methods: {
    foo() {
      console.log("Child foo()" + this.msg++);
    },
  },
});
Vue.component("kid", {
  template:
    '<h1 @click="foo">kid component- {{msg}} ==={{ type | $_filterType}}</h1>',
  mixins: [mixins2],
  data() {
    return {
      type: 4,
    };
  },
  beforeCreate() {
    console.log("component beforeCreated");
  },
  created() {
    console.log("component created");
  },
  beforeMount() {
    console.log("component beforeMount");
  },
  mounted() {
    console.log("component mounted");
  },
});
export default {};
</script>
