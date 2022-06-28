<template>
  <nut-tabs class="order-list" v-model="activeTab">
    <nut-tabpane title="基本信息">
      <button @click="cascaderVisible = true">tabs内套用</button>
      <div>{{ area }}</div>
      <nut-cascader
        v-model:visible="cascaderVisible"
        v-model="area"
        :options="AreaData"
      ></nut-cascader>
    </nut-tabpane>
  
  </nut-tabs>
</template>

<script>
import { ref } from "@vue/reactivity";
import { AreaData } from "../../plugins/area";

export default {
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

<style>
page {
  background-color: skyblue;

  display: flex;
  flex-direction: column;
}

</style>
