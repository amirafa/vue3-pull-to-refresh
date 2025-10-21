import { createApp } from "vue";
import App from "./App.vue";
import { V3PTR } from "@amirafa/vue3-pull-to-refresh";

const app = createApp(App);
app.use(V3PTR);

app.mount("#app");
