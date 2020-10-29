//暴露两个mixins对象
export const mixinsTest = {
  methods: {
    hello() {
      console.log("mixinsTest 的created");
    },
  },
  beforeCreate() {
    console.log("mixinsTest的beforeCreated");
  },
  created() {
    this.hello();
  },
};
export const mixinsTest2 = {
  methods: {
    hello2() {
      console.log("mixinsTest2 的created");
    },
  },
  beforeCreate() {
    console.log("mixinsTest2 的beforeCreated");
  },
  created() {
    this.hello2();
  },
};
//只能使用一个extends对象，多个无效，extends会先于mixins执行
export const extendsTest = {
  methods: {
    hello3() {
      console.log("extendsTest 的created");
    },
  },
  beforeCreate() {
    console.log("extendsTest 的beforeCreate");
  },
  created() {
    this.hello3();
  },
};
