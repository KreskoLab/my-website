<template>
  <main class="min-h-screen">
    <section
      class="bg-gradient-to-tr from-stone-900 to-orange-900 bg-noise h-screen"
    >
      <div
        class="flex flex-col justify-center items-center h-full max-w-screen-2xl container mx-auto"
      >
        <h1 class="text-5xl lg:text-9xl text-amber-50 bg-image">
          Andrii Orlov
        </h1>

        <h2 class="text-amber-100 lg:text-lg text-opacity-anim mt-1">
          Yes... Another one self taught developer
        </h2>
      </div>
    </section>

    <TheColors />

    <section
      id="projects"
      class="bg-gradient-to-tr from-stone-800 to-stone-900 bg-noise min-h-screen"
    >
      <div
        class="flex flex-col items-center h-full max-w-screen-2xl container mx-auto"
      >
        <h3 class="text-5xl lg:text-9xl text-amber-50 bg-image mt-16">
          Projects
        </h3>

        <div
          class="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-x-4 gap-y-16 py-12"
        >
          <div
            class="w-full lg:w-[900px]"
            v-for="card in cards"
            :key="card.title"
          >
            <Card
              :title="card.title"
              :subtitle="card.subtitle"
              :images="card.images"
              :frontend="card.frontend"
              :backend="card.backend"
              :link="card.link"
              :github="card.github"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Priceefy",
    subtitle: "App for tracking food prices in Ukraine",
    frontend: "Frontend: Nuxt 3, Tailwind CSS, Pinia, ApexCharts, SSR",
    backend: "Backend: Nest, MongoDB, Jest, GitHub Actions",
    github: "",
    link: "https://priceefy.com",
    images: [
      "https://res.cloudinary.com/kresko/image/upload/v1652807950/Priceefy-thumb_oojyax.png",
      "https://res.cloudinary.com/kresko/image/upload/v1653602172/Pepsi_max_-_Priceefy_jls5gl.png",
      "https://res.cloudinary.com/kresko/image/upload/v1653603005/Pepsi_-_Priceefy_cpg6pq.png",
    ],
  },

  {
    title: "Balloo",
    subtitle: "Mock of balloons e-commerce website",
    frontend: "Frontend: Nuxt 2, Windi CSS, Vuex, SSR",
    backend: "Backend: Fastify, Passport, MongoDB",
    github: "",
    link: "https://balloo.andrii.site",
    images: [
      "https://res.cloudinary.com/kresko/image/upload/v1653059804/balloo_uarh1b.png",
      "https://res.cloudinary.com/kresko/image/upload/v1653600865/Balloo_1_uslptr.png",
    ],
  },

  {
    title: "Dumka",
    subtitle: "UGC engine",
    frontend: "Frontend: Nuxt 3, Tailwind CSS, Pinia",
    backend: "Backend: Nest, MongoDB, Jest, GitHub Actions",
    github: "",
    link: "",
    image:
      "https://res.cloudinary.com/kresko/image/upload/v1652807950/Priceefy-thumb_oojyax.png",
  },

  {
    title: "Kemcio",
    subtitle: "App for manage IOT devices",
    frontend: "Frontend: Vite, Windi CSS, Pinia, SPA",
    backend: "Backend: Nest, MongoDB, Jest, Microservices",
    image:
      "https://res.cloudinary.com/kresko/image/upload/v1652807950/Priceefy-thumb_oojyax.png",
  },
];

onMounted(() => {
  const section = document.getElementById("projects");

  const observer = new IntersectionObserver(
    (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting) {
        firstEntry.target.children[0].children[0].classList.add(
          "text-opacity-anim"
        );
      } else {
        firstEntry.target.children[0].children[0].classList.remove(
          "text-opacity-anim"
        );
      }
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  observer.observe(section);
});
</script>

<style>
.bg-image {
  background: url(~/assets/noise.png),
    linear-gradient(
      103deg,
      #b7ab99 3.56%,
      #ffa235 32.81%,
      #cf5c2a 56.49%,
      #f6543c 92.71%
    );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bg-noise {
  background-image: url(~/assets/noise.png) center center repeat;
  background-size: 0.2%;
}

h1 {
  animation: rotateText 0.5s ease;
}

html {
  scroll-behavior: smooth;
}

.text-opacity-anim {
  animation: opacityText 1s ease;
}

@keyframes rotateText {
  0% {
    transform-origin: bottom;
    opacity: 0;
    transform: rotate(-5deg) scale(0.9) translate(10px, 50px);
  }

  100% {
    transform-origin: center;
    transform: rotate(0) scale(1) translate(0);
  }
}

@keyframes opacityText {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
