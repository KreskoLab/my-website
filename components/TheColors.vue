<template>
  <ul class="bg-stone-900" id="colors">
    <li class="h-6" />
    <li class="h-8" />
    <li class="h-10" />
  </ul>
</template>

<script setup lang="ts">
onMounted(() => {
  const section = document.getElementById("colors");

  const observer = new IntersectionObserver(
    (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting) {
        for (let i = 0; i < firstEntry.target.children.length; i++) {
          const item = firstEntry.target.children[i];
          item.classList.add("color" + (i + 1));
        }
      } else {
        for (let i = 0; i < firstEntry.target.children.length; i++) {
          const item = firstEntry.target.children[i];
          item.classList.remove("color" + (i + 1));
        }
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  observer.observe(section);
});
</script>

<style scoped>
@keyframes makeItfadeIn {
  100% {
    background-position: left;
  }
}

li {
  width: 100%;
  background-size: 200% 100%;
  background-position: right;
}

.color1 {
  background: linear-gradient(
    to right,
    rgba(217, 119, 6, 0.9) 50%,
    transparent 0
  );

  background-size: 200% 100%;
  background-position: right;
  animation: makeItfadeIn 1.5s forwards;
}

.color2 {
  background: linear-gradient(
    to right,
    rgb(234 88 12 / 0.9) 50%,
    transparent 0
  );

  background-size: 200% 100%;
  background-position: right;
  animation: makeItfadeIn 1.8s 0.5s forwards;
}

.color3 {
  background: linear-gradient(
    to right,
    rgb(225 29 72 / 0.9) 50%,
    transparent 0
  );

  background-size: 200% 100%;
  background-position: right;
  animation: makeItfadeIn 2s 1s forwards;
}
</style>
