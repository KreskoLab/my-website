<template>
  <div class="relative max-w-full h-full">
    <button
      class="absolute top-[45%] left-4 flex items-center z-50 border-2 border-amber-100 bg-black rounded-full w-6 h-6"
      @click="prev()"
    >
      <svg
        class="h-6 w-6 stroke-amber-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    </button>

    <div class="relative h-full overflow-hidden">
      <slot ref="slides" />
    </div>

    <button
      class="absolute top-[45%] right-4 flex items-center z-50 border-2 border-amber-100 bg-black rounded-full w-6 h-6"
      @click="next()"
    >
      <svg
        class="h-6 w-6 stroke-amber-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: "update:modelValue", slide: number): void;
}>();

const slots = useSlots();
const slides = computed(() => Number(slots.default()[0].children.length) - 1);
const currentSlide = ref<number>(0);
const animation = ref<string>("");

provide("currentSlide", currentSlide);
provide("animation", animation);

function prev() {
  if (currentSlide.value > 0) {
    animation.value = "slide-left";
    currentSlide.value--;

    emit("update:modelValue", currentSlide.value);
  }
}

function next() {
  if (currentSlide.value < slides.value) {
    animation.value = "slide-right";
    currentSlide.value++;

    emit("update:modelValue", currentSlide.value);
  }
}
</script>

<style scoped>
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
