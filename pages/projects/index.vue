<template>
  <div class="relative lg:w-[720px] overflow-hidden bg-black/60 px-6 py-10">
    <ul
      class="flex flex-col flex-nowrap lg:h-[520px] lg:space-y-20 overflow-x-hidden overflow-y-scroll snap-mandatory snap-y"
    >
      <li v-for="card in cards" :key="card.title">
        <NuxtLink :to="`/projects/${card.title.toLowerCase()}`">
          <Card
            class="snap-center"
            :title="card.title"
            :subtitle="card.subtitle"
            :image="card.image"
            :frontend="card.frontend"
            :backend="card.backend"
          />
        </NuxtLink>
      </li>
    </ul>

    <div
      class="absolute top-1/3 bg-black/40 border-2 border-amber-100 rounded-full"
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
          d="M5 15l7-7 7 7"
        />
      </svg>

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
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Priceefy",
    subtitle: "App for tracking food prices in Ukraine",
    frontend: "Frontend: Nuxt 3, Tailwind CSS, Pinia",
    backend: "Backend: Nest, MongoDB",
    image:
      "https://res.cloudinary.com/kresko/image/upload/v1652807950/Priceefy-thumb_oojyax.png",
  },

  {
    title: "Balloo",
    subtitle: "Mock of balloons e-commerce website",
    frontend: "Frontend: Nuxt 2, Windi CSS, Vuex",
    backend: "Backend: Fastify, Passport, MongoDB",
    image:
      "https://res.cloudinary.com/kresko/image/upload/v1653059804/balloo_uarh1b.png",
  },
];
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
