<script setup>
const technologies = [
  {
    name: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "Nuxt",
    image: "https://nuxtjs.org/design-kit/colored-logo.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Windi CSS",
    image: "https://windicss.org/assets/logo.svg",
  },
  {
    name: "Nest.js",
    image:
      "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
  },
  {
    name: "Fastify",
    image:
      "https://raw.githubusercontent.com/fastify/graphics/96648545bcad9d1984dd96363a39e2775b59afef/fastify-1000px-square-01.svg",
  },
  {
    name: "MongoDB",
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    name: "TypeScript",
    image: "https://iambrent.com/_nuxt/img/typescript.274a93d.svg",
  },
  {
    name: "Jest",
    image: "https://miro.medium.com/max/600/1*RQwRLQ0yyCvYmRn_Nst5yg.png",
  },
];
</script>

<template>
  <div class="my-12">
    <p class="text-3xl text-sky-100/80">I had experience with</p>

    <div
      class="grid grid-cols-2 gap-x-4 lg:grid-cols-3 lg:gap-x-12 gap-y-4 my-8"
    >
      <div
        v-for="tech in technologies"
        class="flex flex-col space-y-3 items-center bg-black/90 border border-gray-900 rounded-xl py-3 px-4"
      >
        <img class="w-16 h-16" :src="tech.image" :alt="tech.name" />
        <span class="text-sky-50/90">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
