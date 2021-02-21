<template>
  <div id="nav">
    <v-main>
      <Header @togglenav="navopen = !navopen" />
      <div style="display: flex;">
        <SideBar :open="navopen" />
        <Content />
      </div>
    </v-main>
  </div>
</template>

<script>
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
export default {
  components: {
    Content,
    Header,
    SideBar,
  },
  data() {
    return {
      navopen: true,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
