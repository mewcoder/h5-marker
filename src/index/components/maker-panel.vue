<script setup>
import { components } from "../constant";
import { dragTarget } from "../store";

function handleDragStart(type) {
  dragTarget.value = type;
}
function handleDragEnd() {
  dragTarget.value = null;
}
</script>

<template>
  <div class="marker-panel">
    <div
      v-for="item in components"
      :key="item.text"
      class="comp-item"
      draggable="true"
      @dragstart="handleDragStart(item.type)"
      @dragend="handleDragEnd"
      @click="handleDragStart(item.type)"
    >
      <el-icon :size="28">
        <component :is="item.icon" />
      </el-icon>
      <div class="comp-item__text">{{ item.text }}</div>
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
  height: 80px;
  font-size: 12px;
  margin-bottom: 12px;
  margin-left: 12px;
  cursor: move;
  color: #606266;
  background: #fff;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__text {
    margin-top: 4px;
  }
  &:hover {
    background-color: #409eff;
    color: #fff;
  }
}
</style>
