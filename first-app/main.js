new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    dataToBeChanged: "Initial Value",
    link: "https://www.google.com",
    finishedLink: `<a href="https://www.google.com" target="_blanck">Google</a>`,
    counter: 0,
    x: 0,
    y: 0,
    what: "Call me",
    result: ""
  },
  computed: {
    output() {
      return this.counter > 5 ? "Greate than 5" : "Smaller than 5";
    }
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
      this.result = this.counter > 5 ? "Greate than 5" : "Smaller than 5";
    },
    handleClickDecrease() {
      this.counter--;
    },
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    dummy(e) {
      e.stopPropagation();
    },
    alertMe(e) {
      alert("Lol");
    },
    decrease() {},
    increase() {}
  }
});
