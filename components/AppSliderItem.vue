<template>
  <transition :name="animation">
    <div class="absolute h-full w-full" v-show="index === currentSlide">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  index: number;
}>();

const currentSlide = inject<number>("currentSlide");
const animation = inject<string>("animation");
</script>

<style scoped>
div :deep(*) {
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

.slide-left-enter-active {
  animation: slide-left-in 0.5s ease-in;
}
.slide-left-leave-active {
  animation: slide-left-out 0.5s ease-in;
}
@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.slide-right-enter-active {
  animation: slide-right-in 0.5s ease-in;
}
.slide-right-leave-active {
  animation: slide-right-out 0.5s ease-in;
}
@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
