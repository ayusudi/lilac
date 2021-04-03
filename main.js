
Vue.component('input-component', {
  data: function () {
    return {
      count: 0,
      labelLowercase : this.label.toLowerCase().trim()
    }
  },
  props : [
    'label', 
    'type',
    'size'
  ],
  template: `
  <div>
    <div class="my-2 border-2 border-solid border-indigo-200 inline-block rounded bg-purple-100 focus-within:border-indigo-300">
      <label for="email" class="px-1 text-gray-600" style="font-size: 11.5pt;">{{label}} : </label><input :type="type" :name="labelLowercase" :id="labelLowercase" class="rounded-r pl-2 input:bg-white " :size="size">
    </div>
  </div>`
})

Vue.component('button-gradient', {
  data  : function() {
    return {

    }
  },
  props : [],
  template : `
  
  `
})

const app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue!'
  }
})