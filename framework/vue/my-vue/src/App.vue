
<template>
  <div >
    {{ tongTien | dauCham}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      tongTien: 1000000,
    }
  },
  filters: {
    dauCham: function (soTien) {
      return soTien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
     
    }
  }

}
</script>