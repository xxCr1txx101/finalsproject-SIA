<template>
  <li class="image-card">
    <v-img
      class="image-card__image zoom"
      :src="image.url_n"
      :alt="image.title"
    />
    <div class="image-card__body">
      <p v-if="image.title" class="image-title">{{ image.title }}</p>
      <p v-else class="image-title">No Title Found</p>
      <p class="image-owner">By {{ image.ownername }}</p>
      <a
        :href="image.url_n"
        :alt="image.title"
        @click.prevent="downloadItem(image)"
      >
        <v-icon class="iconalign">mdi-arrow-down-bold-circle-outline</v-icon>
      </a>
      <section class="image-date-view-wrapper">
        <p class="image-date">{{ image.datetaken }}</p>
        <p class="image-views">Views: {{ image.views }}</p>
      </section>
    </div>
  </li>
</template>

<script>
import axios from "axios";
export default {
  name: "ImageCard",
  props: ["image"],
  methods: {
    downloadItem({ url_n, title }) {
      axios
        .get(url_n, { responseType: "blob" })
        .then(response => {
          const blob = new Blob([response.data], {
            type: "application/jpg/png/jpeg"
          });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = title;
          link.setAttribute("download", "image.jpg");
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
  }
};
</script>

<style lang="scss">
i.v-icon.notranslate.iconalign.mdi.mdi-arrow-down-bold-circle-outline.theme--light {
  margin-left: 180px;
  margin-top: -80px;
  color: black;
}
a {
  text-decoration: none;
}
.image-card {
  width: calc(33% - 1rem);
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: 0.5rem 0;
  }
}
.image-card__image {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.image-card__body {
  padding: 0.5rem 1rem 1rem;
}
.image-title {
  font-weight: bold;
  margin: 0;
}
.image-owner {
  margin-top: 0;
  font-size: 0.8rem;
}
.image-title,
.image-owner {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.image-date-view-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.image-date,
.image-views {
  margin-bottom: 0;
  font-size: 0.8rem;
}
.zoom {
  padding: 50px;
  transition: transform 0.2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
}
// .thumbnail:hover {
//   position: relative;
//   top: -25px;
//   left: -35px;
//   width: 500px;
//   height: auto;
//   display: block;
//   z-index: 999;
// }

// li:hover .large {
//   left: 20px;
//   top: -150px;
// }
</style>
