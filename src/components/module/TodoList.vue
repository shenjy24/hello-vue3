<script setup>

import {reactive, ref} from "vue";
import {ElMessage} from 'element-plus'

const message = ref('')
const state = reactive({
  todoList: []
})

const add = () => {
  if (message.value) {
    state.todoList.push(message.value)
    message.value = ''
  } else {
    ElMessage.error('没有输入事项')
  }
}

const del = (index) => {
  state.todoList.splice(index, 1)
}
</script>

<template>
  <div style="text-align: center">
    <h1>今日事项</h1>
    <ul v-for="(item, index) in state.todoList" :key="index">
      <ol>
        {{ item }}
        <a style="color: red; margin: 15px; cursor: pointer" @click="del(index)">删除</a>
      </ol>
    </ul>
    <input type="text" v-model="message" @keyup.enter="add" placeholder="输入事项后，按回车确认"/>
    <h2>共有{{ state.todoList.length }}个小目标</h2>
  </div>
</template>

<style scoped>

</style>
