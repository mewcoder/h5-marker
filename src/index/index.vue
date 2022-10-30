<script setup>
import MakerHeader from "./components/maker-header.vue";
import MakerPanel from "./components/maker-panel.vue";
import MakerPreview from "./components/maker-preview.vue";
import MakerConfig from "./components/maker-config.vue";
</script>

<template>
  <div class="marker-container">
    <MakerHeader />
    <div class="marker-body">
      <MakerPanel />
      <MakerPreview />
      <MakerConfig />
    </div>
  </div>
</template>

<style scoped>
.marker-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background-color: #f7f8fa;
  padding: 16px;
}
.marker-body {
  position: absolute;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
