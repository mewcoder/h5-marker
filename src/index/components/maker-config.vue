<script setup>
import PageConfig from "./config/page-config.vue";
import ItemConfig from "./config/item-config.vue";
import { configType } from "../store";
</script>

<template>
  <div class="marker-config">
    <div class="config-header">{{ "设置" }}</div>
    <div class="config-body">
      <PageConfig v-if="configType === 'page'" />
      <ItemConfig v-else />
    </div>
  </div>
</template>

<style scoped>
.marker-config {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 376px;
  background: #fff;
  border-left: #e0e0e0;
  overflow-y: auto;
}
.config-header {
  padding: 24px 16px;
  border-bottom: 1px solid #e0e0e0;
}
.config-body {
  padding: 16px;
}
</style>
