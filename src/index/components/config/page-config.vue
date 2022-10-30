<script setup>
import { reactive, ref } from "vue";
const formData = reactive({
  name: "",
  type: "",
});
</script>

<template>
  <div style="margin: 20px" />
  <el-form :model="formData" label-position="top">
    <el-form-item label="Name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="Type">
      <el-input v-model="formData.type" />
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
