<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        time1: new Date().toISOString().split("T")[0]
      };
    },
  };
</script>

<template>
  <div>
    <date-picker v-model="time1" valueType="format"></date-picker>
  </div>
</template>

<style>
.mx-calendar button:active, .mx-calendar button:focus{
  outline: solid white !important;
  color: #9648ca !important;
}
.mx-input {
   border: solid #C7D3FD 2px !important;
}
.mx-input:focus,.mx-input:hover {
  outline: none !important;
  border: solid #A5B4FB 2px !important;
}
.mx-input:-webkit-autofill,
.mx-input:-webkit-autofill:hover,
.mx-input:-webkit-autofill:focus,
.mx-input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s !important;
    border: none !important;
}

td.cell:hover{
  background-color: rgba(238, 193, 252, 0.5) !important;
}
.mx-calendar-content .cell.active {
    color: #fff;
    background-color: #bb85ec !important;
}

.mx-btn-text {
   color: #54188b !important;
}
.mx-table-date .today {
    color: #7425a8 !important;
    font-weight: 800;
}
</style>