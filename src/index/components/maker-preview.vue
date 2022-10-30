<script setup>
import { ref } from "vue";
import { Edit, Menu, Clock } from "@element-plus/icons-vue";
import { dragTarget } from "../store";

const overlay = ref(null);

function handleDragOver(e) {
  const { x, y } = overlay.value.getBoundingClientRect();
  const { clientX, clientY } = e;
  const offsetX = clientX - x;
  const offsetY = clientY - y;

  // 当前鼠标的位置
  postMessage("dragging", {
    x: offsetX,
    y: offsetY,
  });
}

function handleDrop() {
  postMessage("drop", dragTarget.value);
}

function postMessage(type, value) {
  const iframe = document.getElementById("preview-iframe");
  iframe.contentWindow.postMessage(
    {
      type,
      value,
    },
    "*"
  );
}
</script>

<template>
  <div class="marker-preview">
    <div
      ref="overlay"
      class="iframe-overlay"
      @dragover="handleDragOver"
      @drop="handleDrop"
      ondragover="return false"
    ></div>
    <iframe id="preview-iframe" class="preview-iframe" src="/preview.html" />
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
  overflow: auto;
}
.iframe-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.preview-iframe {
  border: none;
  height: 800px;
  width: 100%;
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
