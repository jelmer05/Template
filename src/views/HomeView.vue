<script setup>
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok("home", {
  version: "published",
});
</script>
<template>
  <main>
    <section>
      <StoryblokComponent v-if="story" :blok="story.content" />
    </section>
  </main>
</template>
