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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 3px;
}


.main {
  font-family: "ヒラギノ丸ゴ ProN", "ヒラギノ角ゴシック", "Hiragino Sans",
    "Hiragino Maru Gothic ProN", "Osaka", YuGothic, "Yu Gothic", "Yu Gothic UI",
    "メイリオ", Meiryo, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.font-lg {
  font-size: 6rem;
  font-weight: bold;
}
.font-md {
  font-size: 3rem;
  font-weight: bold;
}
.font-sm {
  font-size: 2rem;
  font-weight: bold;
}
.mt {
  margin-top: 38px;
}
.miss-count {
  margin-top: 10px;
}

.question-count {
  margin-bottom: -10px;
}
.input {
  color: #ef454a;
  border-bottom: 6px #ef454a solid;
  padding-bottom: 15px;
}
</style>