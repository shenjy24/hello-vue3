<script setup lang="ts">
import {reactive} from "vue";
import {ElMessage} from 'element-plus'

const state = reactive({
  numCount: 0,
  form: {
    num1: '',
    num2: '',
  }
})

const MCK = (val: string) => {
  if (!state.form.num1 || !state.form.num2) {
    ElMessage.error('请输入数字')
    return
  }
  switch (val) {
    case '加':
      state.numCount = parseInt(state.form.num1) + parseInt(state.form.num2)
      break;
    case '减':
      state.numCount = parseInt(state.form.num1) - parseInt(state.form.num2)
      break;
    case '乘':
      state.numCount = parseInt(state.form.num1) * parseInt(state.form.num2)
      break;
    case '除':
      state.numCount = parseInt(state.form.num1) / parseInt(state.form.num2)
      break;
    case '清空':
      state.numCount = 0
      state.form.num1 = ''
      state.form.num2 = ''
      break;
  }
}

</script>

<template>
  <div class="calculator">
    <h1>计算结果：{{ state.numCount }}</h1>
    <div>
      第一个数字：<input type="number" v-model="state.form.num1"/>
    </div>
    <div style="margin:10px">
      第二个数字：<input type="number" v-model="state.form.num2"/>
    </div>
    <div>
      <button @click="MCK('加')">加</button>
      <button @click="MCK('减')">减</button>
      <button @click="MCK('乘')">乘</button>
      <button @click="MCK('除')">除</button>
      <button @click="MCK('清空')">清空</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator {
  text-align: center
}
</style>
