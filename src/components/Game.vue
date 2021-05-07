
<script>
export default {
  data() {
    return {
      startFlg: "",
      word: "",
      pressd: "",
      miss: 0,
      time: 0,
      playing: false,
      active: false, // 実行状態
      done: false,
      start: 0, // startを押した時刻
      timer: 0, // setInterval()の格納用
      interval: 0, // 計測時間
      accum: 0, // 累積時間(stopしたとき用)
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
      this.active = true;
      this.start = Date.now();
      this.timer = setInterval(() => {
        this.interval = this.accum + (Date.now() - this.start) * 0.001;
      }, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
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
            this.done = true;
            this.active = false;
            this.accum = this.interval;
            clearInterval(this.timer);
            return;
          }
          this.setWord();
        }
      });
    },
    gameStart: function () {
      this.startFlg = true;
    },
    // startTimer() {
    //   this.active = true;
    //   this.start = Date.now();
    //   this.timer = setInterval(() => {
    //     this.interval = this.accum + (Date.now() - this.start) * 0.001;
    //   }, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
    // },
    // stopTimer() {
    //   this.active = false;
    //   this.accum = this.interval;
    //   clearInterval(this.timer);
    // },
  },
};
</script>
