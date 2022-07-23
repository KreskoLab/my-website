<template>
  <nav
    class="flex justify-between items-center fixed top-0 backdrop-filter backdrop-blur w-full bg-sky-100/80 border-b border-indigo-300 z-50"
  >
    <div class="flex items-center space-x-3">
      <img
        width="42"
        height="42"
        src="https://avatars.githubusercontent.com/u/29521254?v=4"
        alt="kresko`s avatar"
        class="rounded-lg"
      />
      <h1 class="text-2xl font-medium hidden sm:block">Andrii Orlov</h1>
    </div>

    <ul class="flex space-x-6">
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<style>
nav {
  @apply px-4 py-3 lg:px-16 lg:py-4;
}
</style>
