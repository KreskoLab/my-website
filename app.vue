<script setup>
useHead({
  title: "Andrii Orlov - Developer",
  link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
  meta: [
    {
      name: "description",
      content: "Full stack developer, JavaScript lover",
    },
  ],
});
</script>

<template>
  <main class="min-h-screen scroll-smooth bg-black overflow-y-auto">
    <div
      class="container mx-auto max-w-screen-md min-w-[320px] py-16 px-4 sm:px-0 h-full"
    >
      <section class="z-50">
        <div class="flex items-center space-x-6">
          <img
            width="64"
            height="64"
            src="https://avatars.githubusercontent.com/u/29521254?v=4"
            alt="kresko`s avatar"
            class="rounded-xl ring-[5px] ring-sky-500/60 z-50"
          />

          <div class="text-sky-50/80 font-medium">
            <h1 class="text-3xl tracking-wider font-bold">Andrii Orlov</h1>
            <p>Full stack developer</p>
          </div>
        </div>

        <div class="text-sky-100/90 my-10 text-lg tracking-wide">
          <p>Hello. I`m Andrii from Kyiv, Ukraine.</p>
          <p>I`m interesed in building web apps and some little in IoT.</p>
        </div>

        <TheLinks />
      </section>

      <section class="z-50">
        <TheAbout />
      </section>

      <section class="z-50">
        <TheProjects />
      </section>

      <section class="fixed top-0 left-0 w-full h-full">
        <div
          class="gradient w-full bottom-0 left-0 blur-[300px] sm:w-96 sm:blur-[500px] !bg-pink-600"
        />
        <div
          class="gradient w-full top-0 right-0 blur-[300px] sm:blur-[1000px] sm:w-96 !bg-teal-600"
        />
      </section>
    </div>
  </main>
</template>

<style scoped>
.gradient {
  position: absolute;
  z-index: 0;
  opacity: 0.8;
  padding-bottom: 100%;
  transform: scale(0.8);
}
</style>
