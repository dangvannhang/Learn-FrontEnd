<template>
  <div>
    <!-- Moi cai vong lap se render ra mot cai  div.lists -->
    <div class="lists" 
      v-for="(language, index) in languages" 
      :key="index"
      @click="language.selected = !language.selected"
      :class="{selected:language.selected}"
    >
       
      <span>{{language.name}}</span>

     </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        languages:[
          {name:'php', selected: false},
          {name:'html,css', selected: false},
          {name:"java", selected: false},
          {name:'javascript', selected: false},
          {name:'C', selected: false},
          {name:'C#', selected: false},
        ]
      }
    }
  }
</script>

<style lang="scss">
    div .lists {
      display: inline;
      border: 1px solid burlywood;
      margin: 20px;
      border-radius: 4px;
      padding: 5px;
    
      span {
        color: red;
        text-align: center;
      }
    }
    .selected {
      background-color:#66ffff; 
      span {
        color: black;
      }
    }
</style>