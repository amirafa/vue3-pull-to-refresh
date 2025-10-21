import { App } from "vue";
import Vue3PullToRefresh from "./Vue3PullToRefresh.vue";



export default {
    async install(app: App) {
        app.component('Vue3PullToRefresh', Vue3PullToRefresh);
    },
};
