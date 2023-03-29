import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import "./assets/main.css";

import Page from "./components/Page.vue";
import Test from "./components/Test.vue";

const app = createApp(App);

app.component("Page", Page);
app.component("Test", Test);

app.use(router);

app.use(StoryblokVue, {
  accessToken: "KSGrB1IPzaGh8jkkanqTzAtt",
  bridge: true, // enable the bridge
  // bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production

  use: [apiPlugin],
});

app.mount("#app");
