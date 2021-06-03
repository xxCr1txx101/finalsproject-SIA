import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import EnlargeableImage from "@diracleo/vue-enlargeable-image";

Vue.config.productionTip = false;
Vue.use(EnlargeableImage);

Vue.use(vuetify, {
  iconfont: "md"
});
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
