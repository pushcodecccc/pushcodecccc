export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  //钩子一挂载完就执行这个
  mounted() {
    console.log('hello');

  },
}
export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 200
    }
  },
}
