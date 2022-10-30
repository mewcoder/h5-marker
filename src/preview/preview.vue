<script setup>
import PreviewHeader from "./components/preview-header.vue";
import PreviewContent from "./components/preview-content.vue";
import PreviewFooter from "./components/preview-footer.vue";
</script>

<template>
  <div class="preview-main">
    <PreviewHeader />
    <PreviewContent />
    <PreviewFooter />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.preview-main {
  position: absolute;
  width: 375px;
  transform: translateX(-50%);
  margin-left: 50%;
  display: inline-block;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 10%);
}
</style>
