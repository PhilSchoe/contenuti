import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import CustomPreset from "./theme/customPreset";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: CustomPreset,
    options: {
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});

app.mount("#app");
