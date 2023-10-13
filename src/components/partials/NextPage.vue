<script>
export default {
  name: "NextPage"
}
</script>

<template>

  <div class="arrow">
    <div class="cevron"></div>
    <div class="cevron"></div>
    <div class="cevron"></div>
  </div>

</template>

<style lang="scss" scoped>

.arrow {
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.arrow .cevron {
    width: 20px;
    aspect-ratio: 1/1;

    border-bottom: 4px solid white;
    border-right: 4px solid white;
    transform: rotate(-45deg);
    
    margin: -2px;
    animation: animate 4s infinite;
}

.arrow .cevron:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow .cevron:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(-45deg) translate(-10px,-10px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(-45deg) translate(10px,10px);
    }
}
</style>