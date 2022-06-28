<template>
  <button @click="cascaderVisible = true">页面内直接使用级联选择器</button>
  <div>{{ area }}</div>
  <nut-cascader
    v-model:visible="cascaderVisible"
    v-model="area"
    :options="AreaData"
  ></nut-cascader>

  <Test />
</template>

<script>
import { ref } from "@vue/reactivity";
import { AreaData } from "../../plugins/area";
import Test from "./Test";

export default {
  components: {
    Test,
  },
  setup() {
    const cascaderVisible = ref(false);
    const area = ref([]);

    return {
      AreaData,
      cascaderVisible,
      area,
    };
  },
};
</script>

<style></style>
