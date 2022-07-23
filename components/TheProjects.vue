<script setup>
const projects = [
  {
    name: "Kemcio",
    description: "Web app for manage IoT devices",
    image: "kemcio.svg",
    stack: "Vue 3, Windi CSS, Vite, Nest.js, MongoDB",
    github: "https://github.com/KreskoLab/kemcio",
    url: "https://kemcio.vercel.app/",
  },

  {
    name: "Priceefy",
    description:
      "Web app for tracking and monitoring food prices and discounts",
    image: "priceefy.svg",
    stack: "Nuxt 3, Tailwind CSS, Nest.js, MongoDB",
    github: "https://github.com/KreskoLab/kemcio",
    url: "https://priceefy.com/",
  },

  {
    name: "Balloo",
    description: "Mock of balloons store",
    image: "balloo.svg",
    stack: "Nuxt 2, Windi CSS, Vuex, Fastify, MongoDB",
    github: "https://github.com/KreskoLab/kemcio",
    url: "https://balloo.andrii.site/",
  },
];
</script>

<template>
  <div class="my-6">
    <p class="text-sky-100/80 font-medium text-3xl">My last projects</p>

    <div class="grid grid-cols-1 gap-y-8 my-8">
      <div
        v-for="project in projects"
        class="flex items-center lg:space-x-6 w-full border-2 border-gray-900 rounded-xl px-3 py-4 lg:py-6 lg:px-8"
      >
        <img class="w-12 h-12 hidden sm:block" :src="`/${project.image}`" />

        <div class="flex flex-col space-y-3 text-sky-100/80">
          <div>
            <p class="text-2xl font-medium">{{ project.name }}</p>
            <span>{{ project.description }}</span>
          </div>

          <span class="italic text-sky-50/60 text-sm">
            {{ project.stack }}
          </span>
        </div>

        <div
          class="flex flex-col justify-between items-center h-full lg:space-y-0 lg:flex-row lg:space-x-4 text-sky-50 !ml-auto"
        >
          <a
            class="order-last sm:order-first"
            target="_blank"
            :href="project.github"
          >
            <svg class="!p-1" width="32" height="32" viewBox="0 0 16 16">
              <path
                fill="#f8fafc"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>

          <a
            target="_blank"
            class="hover:text-pink-400 order-first sm:order-last"
            :href="project.url"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply transform duration-300 hover:scale-125 z-50;
}

.gradient {
  position: absolute;
  z-index: 0;
  background: #b8236d;
  opacity: 0.5;
  transform: scale(0.8);
  padding-bottom: 100%;
}
</style>
