<template>
  <div id="app">

<Task v-for="(task, index) in tasks" :key="index" :taskData="task"/>

  </div>
</template>
<script>
import Task from './components/TaskComponent.vue';
export default {
  data() {
    return {
      tasks: [
        {
          content: 'di cho', done: false
        },
        {
          content: 'hoc bai', done: false
        },
        {
          content: 'nau an', done: false
        },
        {
          content: 'viet code', done: false
        },
        {
          content: 'run code', done: false
        },
        {
          content: 'test code', done: false
        },

      ]
    }
  },
  components: {
    Task,

  }

}
</script>
<style>

</style>
