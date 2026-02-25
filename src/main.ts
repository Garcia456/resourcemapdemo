import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import ErrorStackParser from "error-stack-parser";
import { findCodeBySourceMap } from "./utils";

const app = createApp(App);
app.use(router);

app.config.errorHandler = (err, instance) => {
  // console.log('err', err)
  const errorStack = ErrorStackParser.parse(err);
  // console.log("errorStack", errorStack);
  findCodeBySourceMap(errorStack[0])
};

app.mount("#app");
