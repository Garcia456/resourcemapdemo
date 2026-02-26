import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import ErrorStackParser from "error-stack-parser";
import { findCodeBySourceMap } from "./utils";
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'


const app = createApp(App);
app.use(router);
app.use(ElementPlus)

// app.config.errorHandler = (err, instance) => {
//   console.log('err', err)
//   const errorStack = ErrorStackParser.parse(err);
//   console.log("errorStack", errorStack);
//   findCodeBySourceMap(errorStack[0])
// };

app.config.errorHandler = (err, instance) => {
  const errorStack = ErrorStackParser.parse(err);
  const jsError = {
    stack_frames: errorStack,
    message: err.message,
    stack: err.stack,
    error_name: err.name,
  }
  instance!.$message.error(`触发了一个 ${err.name} 异常`)
  localStorage.setItem('jsErrorList', JSON.stringify(jsError))
};

app.mount("#app");
