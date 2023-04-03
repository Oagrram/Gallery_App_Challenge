<template>
  <div class="home">
    <GalleryApp />
  </div>
</template>

<script>
// @ is an alias to /src
import GalleryApp from "@/components/Gallery.vue";

export default {
  name: "HomeView",
  components: {
    GalleryApp,
  },
};
</script>
