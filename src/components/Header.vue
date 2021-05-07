<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/git">Git</router-link>
    <router-link to="/linux">Linux</router-link>
    <router-link to="/js">Javascript</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        title: "Git",
        path: "/git",
      },
      {
        title: "Linux",
        path: "/linux",
      },
      {
        title: "Js",
        path: "/js",
      },
      {
        title: "Home",
        path: "/home",
      },
    ],
  }),
};
</script>

<style>
.header {
  font-weight: bold;
  line-height: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
}

a {
  color: inherit;
  width: 50%;
  font-size: .5rem;
  position: relative;
  display: inline-block;
  text-decoration: none;
}
a::after {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  margin: auto;
  content: "";
  width: 160px;
  height: 2px;
  background: #222;
  transform: scale(0, 1);
  transform-origin: center;
  transition: transform 0.5s;
}
a:hover::after {
  transform: scale(1, 1);
}
.header h4 {
  font-size: 0.8rem;
}
</style>