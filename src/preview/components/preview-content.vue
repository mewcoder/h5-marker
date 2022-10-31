<script setup>
import { onMounted, onUnmounted, ref, shallowRef } from "vue";
import { Top, Bottom, Edit, Delete } from "@element-plus/icons-vue";
import { insertAfter } from "../../helper";

const compList = ref([]);

const selectedId = ref(-1);

const placeholder = ref(null);
const placeholderShow = ref(false);

const viewBody = ref(null);

const handleSelect = (id) => {
  selectedId.value = id;
};

let insertIndex = 0;
// 控制传输参数
function handleDragging(mouse) {
  let { x, y, height, width } = viewBody.value.getBoundingClientRect();
  let offsetY = mouse.y - y;
  let offsetX = mouse.x - x;
  let isIn = offsetX > 0 && offsetX < width && offsetY > 0 && offsetY < height;
  if (isIn) {
    console.log("1");
    let nowComps = [...compList.value];
    if (nowComps && nowComps.length) {
      nowComps.map((c, idx) => {
        if (!placeholder.value) return;
        let target = document.getElementById(c + idx);
        let parent = target.parentNode;
        let top = target.offsetTop;
        let targetH = target.offsetHeight;
        if (offsetY > top && offsetY < top + targetH / 2) {
          parent.insertBefore(placeholder.value, target);
          insertIndex = idx;
        } else if (offsetY > top + targetH / 2 && offsetY < top + targetH) {
          insertAfter(placeholder.value, target);
          insertIndex = idx + 1;
        }
      });
    }
    console.log(insertIndex);
    placeholderShow.value = true;
  } else {
    insertIndex = 0;
    placeholderShow.value = false;
  }
}

function handleDrop(type) {
  if (placeholderShow.value) {
    addComponent(type, insertIndex);
    placeholderShow.value = false;
  }
}

function addComponent(type, index) {
  compList.value.splice(index, 0, type);
  selectedId.value = index;
}
onMounted(() => {
  window.addEventListener("message", (e) => {
    console.log(e.data);
    if (typeof e.data === "object") {
      const type = e.data.type;
      if (type === "dragging") {
        handleDragging(e.data.value);
      } else if (type === "drop") {
        handleDrop(e.data.value);
      } else {
        return;
      }
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("message");
});
</script>

<template>
  <main ref="viewBody" class="preview-content">
    <div
      class="preview-item"
      v-for="(comp, i) in compList"
      :key="i"
      :id="comp + i"
    >
      <el-tooltip effect="dark" :content="comp" placement="left">
        <div
          class="item-content"
          :class="{
            selected: selectedId === i,
          }"
          @click="handleSelect(i)"
        >
          <component :is="comp" />
        </div>
      </el-tooltip>

      <div v-if="selectedId === i" class="item-operation">
        <el-button text :icon="Top" />
        <el-button text :icon="Bottom" />
        <el-button text :icon="Edit" />
        <el-button text :icon="Delete" />
      </div>
    </div>

    <div v-if="placeholderShow" ref="placeholder" class="item-placeholder">
      <span class="placeholder-text">组件放置位置</span>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.preview-content {
  position: relative;
  min-height: 620px;
  background: #fff;
}
.preview-item {
  position: relative;
}
.item-content {
  display: inline-block;
  cursor: pointer;
  min-height: 20px;
  width: 358px;
  padding: 0 8px;
  &:hover::before {
    border: 1px dashed #155bd4;
    content: "";
    position: absolute;
    width: 377px;
    height: 100%;
    left: -1px;
    top: 0;
    box-sizing: border-box;
    z-index: 99;
    cursor: pointer;
  }
  &.selected::before {
    content: "";
    position: absolute;
    width: 375px;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: 2px solid #155bd4;
    z-index: 99;
    cursor: move;
  }
}

.item-operation {
  position: absolute;
  top: 0;
  right: -46px;
  width: 44px;
  height: 140px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgb(200 201 204 / 50%);
  border-radius: 2px;
  padding: 0;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .el-button + .el-button {
    margin-left: 0;
    margin-top: 4px;
  }
}

.item-placeholder {
  line-height: 42px;
  height: 42px;
  width: 100%;
  text-align: center;
  background-color: rgba(9, 109, 217, 0.39);
  pointer-events: none;

  .placeholder-text {
    font-size: 12px;
    color: #fff;
    padding: 4px 16px;
    background-color: #096dd9;
  }
}
</style>
