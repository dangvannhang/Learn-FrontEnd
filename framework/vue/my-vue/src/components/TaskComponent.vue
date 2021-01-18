<template>
  <div class="task">
    <span>{{taskData.content}}</span>
  </div>
</template>
<script>
export default {  
  props: [
    'taskData',
  ],
  data() {
    return {
      content:'test',
    }
  } 
}
</script>
<style scoped>

</style>