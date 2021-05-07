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
  font-size: 52px;
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

.wrapper {
  max-width: 1280px;
  width: 100%;
}

.font18 {
  font-size: 1.8rem;
  font-weight: bold;
}
.miss-count {
  margin-top: 10px;
}

.question-count {
  font-size: .8rem;
  margin-bottom: -10px;
}
.input {
  font-size: 1.6rem;
  color: #ef454a;
  border-bottom: 6px #ef454a solid;
}

</style>