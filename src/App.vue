<template>
  <div id="gameApp" class="container">
    <div class="title">
      <h1>The Typing Game</h1>
    </div>
    <button v-if="startFlg != true" class="startButton" @click="gameStart">
      Game Start
    </button>
    <div v-if="startFlg" class="question-wrapper">
      <div class="question">{{ currentQuestion }}</div>
      <div v-if="currentQuestionCounts == questionCounts" class="message">Clear!</div>
      <input v-model="typeBox" type="text" class="form" />
      <div class="count">{{ currentQuestionCounts }} /{{ questionCounts }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameApp",
  data() {
    return {
      startFlg: "",
      currentQuestion: "",
      questions: [
        "Hello World",
        "console.log",
        "npm run serve",
        "git add -A",
        "export default",
      ],
      typeBox: "",
      currentQuestionCounts: 0,
      questionCounts: 0,
    };
  },

  methods: {
    gameStart: function () {
      this.startFlg = true;
    },
  },
  mounted: function () {
    this.currentQuestion = this.questions[0];
    this.questionCounts = this.questions.length;
  },
  watch: {
    typeBox: function (e) {
      if (e === this.currentQuestion) {
        this.questions.splice(0, 1);
        this.currentQuestion = this.questions[0];
        this.typeBox = "";
        this.currentQuestionCounts = this.currentQuestionCounts + 1
      }
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
  font-size: 32px;
}
.container {
  background-color: #7ba889;
  width: 100vw;
  height: 100vh;
}

.startButton {
  margin-bottom: 20px;
  padding: 10px 20px;
}

h1 {
  font-size: 60px;
  padding: 50px 0;
}
.question {
  padding: 20px 0;
}
.message {
  padding: 20px 0;
}
.form {
  outline: none;
  border: none;
  width: 500px;
  padding: 10px 0;
}
.count {
  margin-top: 20px;
}

</style>
