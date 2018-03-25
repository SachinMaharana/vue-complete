new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    dataToBeChanged: "Initial Value",
    link: "https://www.google.com",
    finishedLink: `<a href="https://www.google.com" target="_blanck">Google</a>`,
    counter: 0
  },
  methods: {
    changeTitle(e) {
      this.title = e.target.value;
    },
    runThisFunction(e) {
      this.dataToBeChanged = e.target.value;
    },
    sayHello() {
      this.title = "Hello";
      return this.title;
    },
    handleClickIncrease() {
      this.counter++;
    },
    handleClickDecrease() {
      this.counter--;
    }
  }
});
