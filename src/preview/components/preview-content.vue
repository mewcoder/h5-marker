<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <main class="preview-content"></main>
</template>

<style scoped>
.preview-content {
  position: relative;
  min-height: 726px;
  background: #fff;
}
</style>
