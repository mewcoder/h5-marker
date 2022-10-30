<script setup>
import { components } from "../data";
</script>

<template>
  <div class="marker-panel">
    <div v-for="item in components" :key="item.text" class="comp-item">
      <el-icon :size="32">
        <component :is="item.icon" />
      </el-icon>
      <div>{{ item.text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.marker-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 240px;
  padding: 12px 0;
  box-sizing: border-box;
  border-right: 1px solid #e0e0e0;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
}
.comp-item {
  position: relative;
  width: 100px;
  height: 88px;
  font-size: 12px;
  margin-bottom: 12px;
  margin-left: 12px;
  cursor: move;
  background: #fff;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background-color: #409eff;
    color:#fff;
  }
}
</style>
