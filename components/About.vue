<script setup lang="ts">
const technologies = [
  "Vue",
  "Nuxt",
  "Tailwind CSS",
  "Windi CSS",
  "Fastify",
  "Nest",
  "Jest",
  "TypeScript",
  "MongoDB",
  "RabbitMQ",
  "GitHub Actions",
];
</script>

<template>
  <section class="bg-gradient-to-br from-black to-orange-900/90 min-h-screen">
    <div
      class="flex flex-col items-center h-full max-w-screen-2xl container mx-auto"
    >
      <h3 class="text-5xl lg:text-9xl text-amber-100 bg-image mt-16">About</h3>

      <div class="flex flex-col justify-center gap-x-4 gap-y-8 py-12 px-4">
        <div>
          <h3 class="text-lg text-amber-100 font-medium italic mb-1">
            Technologies
          </h3>

          <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2">
            <li
              class="bg-gradient-to-r from-orange-400/80 to-teal-400/80 text-center text-sm lg:text-base px-1"
              v-for="tech in technologies"
              :key="tech"
            >
              {{ tech }}
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg text-amber-100 font-medium italic mb-1">
            Education
          </h3>

          <ul class="space-y-3">
            <li>
              <p
                class="bg-gradient-to-br from-orange-400/80 to-teal-400/80 text-sm lg:text-lg lg:w-max px-2"
              >
                Kyiv National University of Construction and Architecture
              </p>

              <p class="text-amber-100 text-xs lg:text-base">
                Information systems and technologies
                <span class="italic text-xs lg:text-sm font-base ml-2"
                  >2021 - now</span
                >
              </p>
            </li>

            <li>
              <p
                class="bg-gradient-to-br from-orange-400/80 to-teal-400/80 w-max text-sm lg:text-lg px-2"
              >
                Kyiv Electromechanical College
              </p>

              <p class="text-amber-100 text-xs lg:text-base">
                Computer Engineering
                <span class="italic text-xs lg:text-sm font-base ml-2"
                  >2017-2021</span
                >
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
