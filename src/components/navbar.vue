<template>
  <nav>
    <v-app-bar>
      <v-icon left large color="black">image_search</v-icon>

      <v-toolbar-title class=" dark--text">
        <span class="font-weight-light">Insta</span>
        <span>Flickr</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn router to="/" class="mr-3">
        Home
      </v-btn>

      <v-btn router to="/about">
        About
      </v-btn>
    </v-app-bar>
    <!-- End of create form -->
  </nav>
</template>
<script>
export default {
  name: "NavBar"
};
</script>

<style>
.close {
  margin-left: 440px;
}
.close_align {
  margin-top: -10px;
}
.bottomclose {
  margin-left: 1221px;
}
.v-application .mr-5 {
  margin-right: 260px !important;
}
</style>
