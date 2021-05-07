<template>
  <div id="git" class="main">
    <div class="wrapper">
      <div v-if="isPlaying" class="font18">
        <div v-if="isComplete" class="font18">Your Result</div>
        <div v-if="!isComplete" class="question-count">
          {{ currentQuestionCounts }}/{{ questionCounts }}
        </div>
        <div class="font18  ">
          <span class="input">{{ pressd }}</span
          >{{ question }}
        </div>
        <div class="miss-count">miss: {{ missCount }}</div>
        <div>
          <p>time: {{ interval.toFixed(2) }}</p>
          <!-- 小数2桁まで表示 -->
        </div>
      </div>
      <div v-else class="start game">Push "Space Key"</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        "git add",
        "bbbb",
        "cccc",
        // "git init",
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
      isPlaying: false,
      isActive: false, // タイマーの実行
      isComplete: false,
      question: "",
      pressd: "",
      missCount: 0, // ミスタイプのカウント
      currentQuestionCounts: 1, // 現在の問題数
      questionCounts: " ", // 総問題数
      start: 0, // startを押した時刻
      timer: 0, // setInterval()の格納用
      interval: 0, // 計測時間
    };                      
  },
  mounted() {
    addEventListener("keydown", (e) => {
      if (e.key !== " " || this.isPlaying) {
        return;
      }
      this.isPlaying = true;
      this.isActive = true;
      this.setquestion();
      this.keyDown();
      this.start = Date.now();
      this.timer = setInterval(() => {
        this.interval = (Date.now() - this.start) * 0.001;
      }, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
      this.questionCounts = this.questions.length + 1;
    });
  },
  methods: {
    setquestion() {
      this.question = this.questions.splice(
        Math.floor(Math.random() * this.questions.length),
        1
      )[0];
    },
    keyDown() {
      addEventListener("keydown", (e) => {
        if (e.key !== this.question[0]) {
          this.missCount++;
          return;
        }
        this.pressd += e.key;
        this.question = this.question.slice(1);
        if (this.question.length === 0) {
            this.pressd = "";
          if (this.questions.length === 0) {
              this.isComplete = true;
            this.isActive = false;
            clearInterval(this.timer);
            return;
          }
          this.missCount++;
          this.setquestion();
          this.currentQuestionCounts = this.currentQuestionCounts + 1;
        }
      });
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