<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="container">
    <h1>Gallery App</h1>
    <ul class="image-gallery">
      <!-- <li>
        <img
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li>
      <li>
        <img
          src="https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <div class="overlay"></div>
      </li> -->
      <li
        v-for="image in imageList"
        :key="image.id"
        @click="handleRedirect(image.id)"
      >
        <img :src="image.urls.regular" alt="" />
      </li>
    </ul>
  </div>
</template>

<script >
import { GetResources } from "../services/GetResources";

export default {
  name: "GalleryApp",
  props: {},
  data() {
    return {
      imageList: [],
      selectedItem: [],
    };
  },
  mounted() {
    GetResources().then((data) => {
      this.imageList = data.results;
      console.log(this.imageList);
    });
  },
  methods: {
    handleRedirect(id) {
      this.$router.push(`/id/${id}`);
      console.log(this.$router);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  height: 100vh;
}

.image-gallery > li {
  flex-basis: 350px;
  list-style-type: none;
}

.image-gallery li img {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
}
</style>
