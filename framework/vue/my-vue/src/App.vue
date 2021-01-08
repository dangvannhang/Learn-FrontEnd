<template>
  <div id="app">


    <input type="text" v-model="newTask">

    <button @click="tasks.push({content: newTask, done: false})">Them</button>

    <div v-for="(task,index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done" >
      <span :class="{isFinished: task.done} ">
        {{task.content}}
      </span>
    </div>


  </div>
</template>
<script>

export default {
  data() {
    return {
      newTask:'',
      tasks:[
        {
          content:'watching films',
          done:false
          },
        {
          content:'Reading books',
          done:false
          },
        {
          content:'Playing game',
          done:false
          },
      ]
    }
  },

}
</script>
<style>
.isFinished{
  text-decoration-line: line-through;
}
</style>
