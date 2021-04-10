<template>
  <div id="app" class="container">
    <div class="title">
      <h1 class="mb-50">The Typing Game</h1>
    </div>
    <!-- <div>DONE</div> -->

    <div id="app">
      <div v-if="playing">
        <div class="question mb-50">
          <span>{{ pressd }}</span
          >{{ word }}
        </div>
        <div class="missCount">miss:{{ miss }}</div>
      </div>
      <div v-else class="start mb-50">Push "Space Key"</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startFlg: "",
      words: [
        "Hello World",
        "console.log",
        "npm run serve",
        "git add -A",
        "export default",
      ],
      word: "",
      pressd: "",
      miss: 0,
      playing: false,
    };
  },
  created() {
    addEventListener("keydown", (e) => {
      if (e.key !== " " || this.playing) {
        return;
      }
      this.playing = true;
      this.setWord();
      this.keyDown();
    });
  },
  methods: {
    setWord() {
      this.word = this.words.splice(
        Math.floor(Math.random() * this.words.length),
        1
      )[0];
    },
    keyDown() {
      addEventListener("keydown", (e) => {
        if (e.key !== this.word[0]) {
          this.miss++;
          return;
        }
        this.pressd += e.key;
        this.word = this.word.slice(1);
        if (this.word.length === 0) {
          this.pressd = "";
          if (this.words.length === 0) {
            this.word = "DONE!";
            return;
          }
          this.setWord();
        }
      });
    },
    gameStart: function () {
      this.startFlg = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Skia-Regular_Black", "ヒラギノ角ゴシック", "Hiragino Sans",
    "ヒラギノ丸ゴ ProN", "Hiragino Maru Gothic ProN", "Osaka", YuGothic,
    "Yu Gothic", "Yu Gothic UI", "メイリオ", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 58px;
  letter-spacing: 3px;
}
.container {
  background-color: #7ba889;
  width: 100vw;
  height: 100vh;
}

h1 {
  color: #fff;
  font-size: 100px;
  padding: 50px 0;
}

.mb-50 {
  margin-bottom: 50px;
}

.missCount {
  font-size: 32px;
}

span {
  opacity: 0.8;
  color: red;
  font-size: 48px;
}
</style>
