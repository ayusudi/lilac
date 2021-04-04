<template>
  <div>
    <div class="my-2 border-2 border-solid border-indigo-200 inline-block rounded bg-purple-100 focus-within:border-indigo-300">
      <label :for="label" class="px-1 text-gray-600" style="font-size: 11.5pt;" >{{label}} : </label>
      <input :type="type" :name="labelLowercase" :id="labelLowercase" class="rounded-r pl-2 input:bg-white " :size="size" :placeholder="placeholder">
    </div>
  </div>
</template>
<script>
export default {
  name : "Input",
  data: function () {
    return {
      labelLowercase : this.label.toLowerCase().trim(),
      placeholder : this.placeHolder ? this.placeHolder : ""
    }
  },
  props : [
    'label', 
    'type',
    'size',
    'placeHolder'
  ]
}
</script>
<style scoped>
  input:focus {
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }

</style>