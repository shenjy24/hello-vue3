<script setup>
import {reactive} from "vue";

const state = reactive({
  hidden: true,
  list: [
    {id: 1, name: '张三', age: 18, sex: 0},
    {id: 2, name: '李四', age: 23, sex: 0},
    {id: 3, name: '王五', age: 25, sex: 1},
  ],
  form: {},
  id: 3
})

const delBtn = (index) => {
  state.list.splice(index, 1)
}

const detailBtn = (item) => {
  state.hidden = false
  if (item !== 'add') {
    state.form.name = item.name
    state.form.age = item.age
    state.form.sex = item.sex
    state.form.id = item.id
    state.form.addIsUpdate = 'update'
  } else {
    state.form = {}
  }
}

const updateBtn = () => {
  if (state.form.name !== '' && state.form.age > 0 && state.form.sex !== 2) {
    if (state.form.addIsUpdate === 'update') {
      state.list.forEach((item, index) => {
        if (state.form.id === item.id) {
          item.name = state.form.name
          item.age = state.form.age
          item.sex = state.form.sex
          state.hidden = true
        }
      })
    } else {
      state.form.id = ++state.id
      state.list.push(state.form)
      state.hidden = true
    }
    state.form = {}
  } else {
    alert('请正确输入！')
  }
}
</script>

<template>
  <div style="text-align:center;">
    <button @click="detailBtn('add')" v-if="state.hidden">添加</button>
    <table align="center" border cellpadding="10" cellspacing="0" v-if="state.hidden">
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in state.list" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.sex == 0 ? '男' : '女' }}</td>
        <td>
          <button @click="detailBtn(item)">修改</button>
          &nbsp
          <button @click="delBtn(index)">删除</button>
        </td>
      </tr>
    </table>
    <div style="border:1px solid #CCC;margin:70px" v-if="!state.hidden">
      <div>
        姓名：<input type="text" v-model="state.form.name"/>
      </div>
      <div>
        年龄：<input type="number" v-model="state.form.age"/>
      </div>
      <div>
        性别：<select v-model="state.form.sex">
        <option value="0">男</option>
        <option value="1">女</option>
      </select>
      </div>
      <div>
        <button @click="updateBtn">确定</button>
        &nbsp
        <button @click="state.hidden = true">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
