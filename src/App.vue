<template>
  <div>
    <School @bbb="demo" />

    <hr />
    <Student :getStudentname="getStudentname" />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
  methods: {
    getStudentname(name, sex) {
      console.log("收到了名字", name, sex);
    },
    demo(name, address) {
      console.log("demo收到了", name, address);
    },
  },
};
</script>

<style>