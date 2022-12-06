<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue'
import _ from 'lodash-es'

// 响应式状态
const count = ref(0)
const user = ref({name: 'Tom', age: 20})
const userName = computed({
  get: () => user.value.name,
  set: (val) => {
    user.value.name = val
  }
})

// 更改状态、触发更新的函数
function increment() {
  count.value++
}

// 防抖
const debounce = _.debounce(increment, 500, {
  leading: true,  // 延长开始后调用
  trailing: false  // 延长结束前调用
})

// 生命周期钩子
onMounted(() => {
  console.log(`计算器初始值为 ${count.value}`)
})

// 移除组件时，取消防抖
onUnmounted(() => {
  debounce.cancel()
})
</script>

<template>
  <el-button type="primary" @click="increment">点击了：{{ count }} 次</el-button>
  <div>
    <span>{{ user.name }}</span>
    <span>{{ user.age }}</span>
  </div>
  <div>
    <div>用户：{{ userName }}</div>
    <el-input v-model="userName"></el-input>
  </div>
</template>

<style scoped>

</style>
