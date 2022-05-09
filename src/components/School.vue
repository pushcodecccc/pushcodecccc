<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="action">自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "李四",
      address: "广西",
    };
  },
  methods: {
    action() {
      this.$emit("bbb", this.name, this.address);
    },
  },
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
}
</style>