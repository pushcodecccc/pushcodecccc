<template>
  <div class="demo">
    <h2>名字是：{{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <button @click="send">收到了</button>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["getStudentname", "names"],
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    send() {
      this.getStudentname(this.name, this.sex);
    },
  },
};
</script>
// scoped可以防止个个组件使用类名冲突
<style scoped>
.demo {
  background-color: orange;
}
</style>