<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计算器初始值为 ${count.value}`)
})
</script>

<template>
  <el-button type="primary" @click="increment">点击了：{{ count }} 次</el-button>
</template>

<style scoped>

</style>
