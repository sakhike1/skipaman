import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import Tilt from "vanilla-tilt-vue";

createApp(App)
  .use(router)
  .use(store)
  .use(Tilt)

  .mount("#app");
