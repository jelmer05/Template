<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in blok.body"
      :blok="blok"
      :key="blok._uid"
    />
  </div>
</template>
