<template>
  <header
    class="transform origin-bottom -rotate-3 w-full h-max bg-black/70 px-2"
  >
    <span
      class="origin-bottom -rotate-6 text-4xl tracking-wider text-orange-500"
    >
      Andrii
    </span>

    <span class="rigin-bottom -rotate-3 text-3xl text-amber-100">Orlov</span>
  </header>
</template>

<style scoped>
@keyframes floater {
  0% {
    transform: translate(-3%, -3%);
    transition: ease 1.8s;
  }
  50% {
    transform: translate(3%, 3%);
    transition: ease 1.8s;
  }
}
</style>
