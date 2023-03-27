<script setup>
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok("home", {
  version: "published",
});
</script>
<template>
  <main>
    <section class="welcome-area">
      <div class="welcome-slides owl-carousel">
        <!-- Single Slide -->
        <div
          class="single-welcome-slide bg-img bg-overlay"
          style="background-image: url(#)"
        >
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <!-- Welcome Text -->
              <div class="col-12 col-lg-8 col-xl-6">
                <div class="welcome-text">
                  <h2 data-animation="bounceInDown" data-delay="900ms">
                    Hallo <br />Ik ben Ludou
                  </h2>
                  <p data-animation="bounceInDown" data-delay="500ms">
                    In mijn vrije tijd maak ik foto's en teken ik
                  </p>
                  <div
                    class="hero-btn-group"
                    data-animation="bounceInDown"
                    data-delay="100ms"
                  >
                    <a href="#go-to" class="btn alime-btn mb-3 mb-sm-0 mr-4"
                      >Neem een kijkje!</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <StoryblokComponent v-if="story" :blok="story.content" />
    </section>
  </main>
</template>
