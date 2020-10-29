import { typeConfig } from "./config";
export default {
  filters: {
    $_filterType: (val) => {
      return typeConfig[val] || "type Undefined";
    },
  },
};
