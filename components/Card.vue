<template>
  <article class="flex flex-col relative space-y-4 px-4 lg:px-12 mt-2">
    <div class="border-8 border-black/90 shadow-xl shadow-black/60">
      <div class="h-[180px] sm:h-[340px] lg:h-[460px]">
        <AppSlider v-model="currentSlide">
          <AppSliderItem v-for="(slide, i) in images" :key="slide" :index="i">
            <img :src="slide" />
          </AppSliderItem>
        </AppSlider>
      </div>

      <div
        class="absolute right-4 -top-5 bg-gradient-to-r from-red-600/90 to-red-500/80 w-max py-3 px-4"
      >
        <nav class="flex flex-row items-center justify-center space-x-6">
          <a
            class="flex items-center justify-center"
            target="_blank"
            :href="github"
          >
            <svg
              class="fill-amber-100 h-8 w-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>

          <a target="_blank" :href="link" v-if="link">
            <svg
              class="stroke-amber-100 fill-black h-8 w-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>

    <h1
      class="mx-auto text-center text-orange-500 uppercase tracking-wider text-2xl lg:text-3xl font-semibold bg-black/60 w-4/6"
    >
      {{ title }}
    </h1>

    <section class="text-amber-100 font-medium">
      <h2>{{ subtitle }}</h2>

      <ul
        class="bg-gradient-to-tr from-purple-900/80 to-purple-900/40 mt-4 px-3 py-1 space-y-3"
      >
        <li>{{ frontend }}</li>
        <li>{{ backend }}</li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  images: string[];
  frontend: string;
  backend: string;
  github?: string;
  link?: string;
}>();

const currentSlide = ref<number>(0);
</script>
