<template>
  <article
    class="flex flex-col space-y-4 lg:min-w-[660px] h-max bg-black/60 py-4 px-6"
  >
    <section class="flex flex-col space-y-2 text-amber-100">
      <h1 class="italic text-xl font-semibold">Basic</h1>
      <p>Andrii Orlov. {{ age }} years old. Kyiv, Ukraine</p>
    </section>

    <section class="flex flex-col space-y-2 text-amber-100">
      <h1 class="italic text-xl font-semibold">Technologies</h1>
      <div class="grid gap-3 grid-cols-4">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="bg-gradient-to-tl from-orange-500/90 to-orange-400/90 text-gray-800 text-center py-1 px-2"
        >
          {{ tech }}
        </span>
      </div>
    </section>

    <section class="flex flex-col space-y-2 text-amber-100">
      <h1 class="italic text-xl font-semibold">Education</h1>

      <div>
        <p
          class="px-2 bg-gradient-to-r from-purple-400/90 to-purple-400/60 text-gray-800 w-max mb-1"
        >
          Kyiv National University of Construction and Architecture
        </p>

        <span>Information Systems and Technologies</span>
        <span class="text-sm ml-2">2021 - Today</span>
      </div>

      <div>
        <p
          class="px-2 bg-gradient-to-r from-purple-400/90 to-purple-400/60 text-gray-800 w-max mb-1"
        >
          Kyiv electromechanical collage
        </p>

        <span>Computer engineering</span>
        <span class="text-sm ml-2">2017 - 2021</span>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const age = computed<number>(() => {
  const ageDifMs = Date.now() - new Date("2002-06-03").getTime();
  const ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
});

const technologies: string[] = [
  "Nuxt.js",
  "Vue.js",
  "Tailwind CSS",
  "Windi CSS",
  "Fastify",
  "Nest.js",
  "MongoDB",
  "RabbitMQ",
];
</script>
