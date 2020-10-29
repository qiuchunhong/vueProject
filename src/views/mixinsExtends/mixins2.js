const mixins = {
  data() {
    return {
      msg: 1,
    };
  },
  methods: {
    foo() {
      console.log("mixins2");
      this.msg++;
    },
  },
  beforeCreate() {
    console.log("mixins2 beforeCreated");
  },
  created() {
    console.log("mixins2 created");
  },
  beforeMount() {
    console.log("mixins2 beforeMount");
  },
  mounted() {
    console.log("mixins2 mounted");
  },
};
export default mixins;
