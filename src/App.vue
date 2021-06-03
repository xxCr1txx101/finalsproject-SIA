<template>
  <v-app>
    <NavBar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import NavBar from "../src/components/navbar";
export default {
  name: "App",
  components: {
    NavBar
  },
  data: () => ({
    //
  })
};
</script>
