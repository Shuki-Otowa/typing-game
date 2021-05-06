<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  data: () => ({
    //
  }),
  components: {
    Header,
  },
};
</script>

<style>
* {
  color: #222;
  margin: 0;
  padding: 0;
  font-family: "TsukuARdGothic-Regular",
    "ヒラギノ丸ゴ ProN", "ヒラギノ角ゴシック", "Hiragino Sans",
    "Hiragino Maru Gothic ProN", "Osaka", YuGothic, "Yu Gothic", "Yu Gothic UI",
    "メイリオ", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 52px;
  letter-spacing: 3px;
}

.main {
  width: 100vw;
  height: 100vh;
  /* padding-top: 80px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  max-width: 1280px;
}

.question {
  /* font-size: 1.8rem; */
}
.miss-count {
  margin-top: 30px;
}

.input {
  /* font-size: 1.6rem; */
  color: #EF454A;
  /* border-bottom: 6px #EF454A solid; */
}
</style>