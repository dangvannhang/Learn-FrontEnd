<template>
  <div>
   <div>
     <div class="lists" v-for="(language, index) in languages" :key="index">
       <span>{{language.name}}</span>
     </div>
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
  
</style>