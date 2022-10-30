<script setup>
import { ArrowLeftBold } from "@element-plus/icons-vue";
</script>

<template>
  <header class="marker-header">
    <div>
      <el-button :icon="ArrowLeftBold" link>返回页面列表</el-button>
    </div>
    <div>
      <el-button>预览</el-button>
      <el-button>保存</el-button>
      <el-button type="primary">下载</el-button>
    </div>
  </header>
</template>

<style scoped>
.marker-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 55px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>
