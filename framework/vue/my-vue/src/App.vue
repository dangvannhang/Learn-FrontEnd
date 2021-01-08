<template>
  <div id="app">

   <h1 v-bind:id="id">Hello Dang Van Nhang</h1>
  </div>
</template>


<script>

export default {
  
  // Ham data luon tra ve mot gia tri hay mot object
  data() {
    return {
      id: 'header_title'
    }
  },
}
</script>

<style>

</style>
