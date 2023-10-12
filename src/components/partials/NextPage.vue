<script>
export default {
  name: "NextPage"
}
</script>

<template>
  <div class="arrow-container">
    <div class="arrow">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.arrow-container{
  position: relative;
}
.arrow {
  cursor: pointer;
}

.arrow p {
    display: block;
    width: 18px;
    aspect-ratio: 1/1;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.arrow p:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow p:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
</style>