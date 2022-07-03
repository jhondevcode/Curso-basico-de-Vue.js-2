Vue.component("counter", {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
  },
  template: `
    <div>
      <button v-on:click="increment">Click me!</button>
      <span>{{ counter }}</span>
    </div>
  `,
});

Vue.component("control", {
  data() {
    return {
      counter: localStorage.getItem("counter")
        ? localStorage.getItem("counter")
        : 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  watch: {
    counter(newValue, oldValue) {
      // persist counter in localstorage
      localStorage.setItem("counter", newValue);
    },
  },
  template: `
    <div>
      <button v-on:click="decrement" style="cursor: pointer">-</button>
      <span>{{ counter }}</span>
      <button v-on:click="increment" style="cursor: pointer">+</button>
    </div>
  `,
});

new Vue({
  el: "#app",
  data() {
    return {
      title: "Hello VueJS",
    };
  },
});
