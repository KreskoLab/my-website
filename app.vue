<script setup lang="ts">
useHead({
  title: "Andrii Orlov - Developer",

  htmlAttrs: {
    lang: "en",
  },

  link: [
    { rel: "icon", type: "image/svg", href: "/favicon.svg" },
    { rel: 'preconnect', href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" },
  ],

  meta: [
    {
      name: "description",
      content: "Full-Stack developer. TypeScript",
    },
  ],
});
</script>

<template>
  <main class="min-h-screen scroll-smooth bg-black overflow-y-auto flex items-center justify-center">
    <div
      class="container mx-auto max-w-screen-md min-w-[320px] py-16 px-4 sm:px-0 h-full w-full"
    >
     <h1 class="text-9xl  text-center z-10 text-orange-600">Ї</h1>
    </div>

    <section class="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div
        class="gradient w-full bottom-0 left-0 transform-gpu blur-[300px] sm:w-96 sm:blur-[1000px] !bg-pink-600 animate-pulse"
      />

      <div
        class="gradient w-full top-0 right-0 transform-gpu blur-[300px] sm:blur-[1000px] sm:w-96 !bg-teal-600 animate-shake-x"
      />
    </section>
  </main>
</template>

<style>
.gradient {
  position: absolute;
  z-index: 0;
  opacity: 0.8;
  padding-bottom: 100%;
  transform: scale(0.8);
}

html {
  font-family: 'Pacifico', cursive !important;
}
</style>
