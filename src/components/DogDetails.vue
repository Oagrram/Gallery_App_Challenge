<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="container">
    <div class="image">
      <img
        :src="selectedItem.urls.regular"
        alt="
        "
      />
      <h1>{{ selectedItem.alt_description }}</h1>
    </div>
  </div>
</template>

<script >
import { GetSelectedItem } from "../services/GetResources";

export default {
  name: "DogDetails",
  props: {},
  data() {
    return {
      selectedItem: [],
    };
  },
  async mounted() {
    this.selectedItem = await GetSelectedItem(this.$route.params.id);
    console.log(this.selectedItem.description);
    console.log(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px;
  font-family: monospace;
  font-weight: bold;
}

.image {
  width: 600px;
  height: 600px;
  margin: auto;
}
.image > img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #ccc;
}
</style>
