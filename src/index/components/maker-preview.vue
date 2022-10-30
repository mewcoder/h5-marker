<script setup>
import { Edit, Menu, Clock } from "@element-plus/icons-vue";
</script>

<template>
  <div class="marker-preview">
    <div class="preview-settings">
      <el-button :icon="Edit">页面设置</el-button>
      <el-button :icon="Menu">组件管理</el-button>
      <el-button :icon="Clock">历史记录</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marker-preview {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 240px;
  right: 376px;
  background-color: #f7f8fa;
}
.preview-settings {
  position: absolute;
  top: 32px;
  right: 16px;
  display: flex;
  flex-direction: column;
  .el-button {
    margin: 0;
    margin-top: 8px;
    padding: 0 8px;
  }
}
</style>
