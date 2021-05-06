<template>
  <div id="git" class="main">
    <div class="wrapper">
      <div v-if="playing" class="question">
        <span class="input">{{ pressd }}</span>
        {{ word }}
        <div class="miss-count">miss:{{ miss }}</div>
        <div class="time-count"><p>time:</p><timer class="timer"></timer></div>
      </div>
      <div v-else class="start game">Push "Space Key"</div>
    </div>
  </div>
</template>

<script>
import Timer from "@/components/Timer";

export default {
  components: { Timer },
  data() {
    return {
      startFlg: "",
      words: [
        "git init",
        // "git push origin master",
        // "git add .",
        // "git commit",
        // "git branch hoge",
        // "git checkout hoge",
        // "git merge hoge",
        // "git status",
        // "git log --oneline",
        // "git rm hoge",
      ],
      word: "",
      pressd: "",
      miss: 0,
      time: 0,
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

<style scoped>
.main {
  background: #878650;
}
.time-count {
    display: flex;
    justify-content: center;
}

</style>