import { ref } from "vue";

// 当前添加的组件
const components = ref([]);

// 拖拽目标
const dragTarget = ref(null);

// 配置类型
const configType = ref("page");

export { dragTarget, configType };
