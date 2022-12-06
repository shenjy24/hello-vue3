<script setup lang="ts">
import {useRoute} from 'vue-router'
import {onMounted} from "vue";

const route = useRoute()
const componentId: string = route.params.id.toString()

onMounted(() => {
  console.log(route.params.id)
})
</script>

<script lang="ts">
import Calculator from "@/components/module/Calculator.vue"
import TodoList from "@/components/module/TodoList.vue"

export default {
  // 注册组件
  components: {Calculator, TodoList}
}
</script>

<template>
  <main>
    <component :is="componentId"></component>
  </main>
</template>
