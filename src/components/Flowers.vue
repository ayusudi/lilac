<template>
      <div>
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: -10px;" class="absolute flower" id="1">
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: 0px; left: 420px;" class="absolute flower" id="2">
      <img src="/assets/flower-p2.png" alt="" style="opacity: 0.6; top: 120px; left: 60px;" class="absolute flower" id="3">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: -5px; left: 250px;" class="absolute flower" id="4">
      <img src="/assets/flower-p2.png" alt="" style="opacity: 0.6; top: 10px; left: 660px;" class="absolute flower" id="5">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 200px; left: 0px;" class="absolute flower" id="6">
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: 375px; left: 0px;" class="absolute flower" id="7"> 
      <img src="/assets/flower-p2.png" alt="" style="opacity: 0.6; top: 180px; left: 560px;" class="absolute flower" id="8">
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: 100px; left: 950px;" class="absolute flower" id="9">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 105px; left: 1250px;" class="absolute flower" id="10">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 300px; left: 1200px;" class="absolute flower" id="12">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 300px; left: 1050px;" class="absolute flower" id="13">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 450px; left: 1200px;" class="absolute flower" id="14">
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: -10px; left: 1300px;" class="absolute flower" id="15">
      <img src="/assets/flower-p3.png" alt="" style="opacity: 0.75; top: 0px; left: 850px;" class="absolute flower" id="16">
      <img src="/assets/flower.png" alt="" style="opacity: 0.6; top: 300px; left: 1270px;" class="absolute flower" id="17">
    </div>
</template>
<script>
export default {
  name: 'Flowers',
  data () {
    return {}
  }
}
</script>
<style scoped>
  .flower {
    animation: flowerfall 8s infinite;
    margin: -70px 40px 54px  -30px;
  }

  @keyframes flowerfall {
    0% {
      opacity: 1;
      -webkit-transform: translate(0, 0px) rotateZ(0deg);
    }
    75% {
      opacity: 0.5;
      -webkit-transform: translate(50px, 100px) rotateZ(0deg); 
    }
    85% {
      opacity: 0;
    }
  }
</style>