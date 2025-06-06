<script setup lang="ts">

</script>

<template>
  <div
    class="antialiased bg-white dark:bg-black dark:text-white flex flex-col items-center h-full justify-center min-h-screen place-content-center sm:text-base text-black text-sm"
  >
    <div class="flex flex-1 flex-col gap-y-16 py-14">
      <div class="flex flex-1 flex-col items-center justify-around">
        <div class="flex flex-col gap-y-4 items-center justify-center">
          <img
            alt="Tchooz Logo"
            src="/logo-black.png"
            class="h-24 dark:hidden"
          >
          <img
            alt="Tchooz Logo"
            src="/logo-white.png"
            class="h-24 hidden dark:block"
          >
          <h1 class="dark:text-white font-semibold sm:text-5xl text-4xl text-black text-center">
            Welcome to Tchooz!
          </h1>
        </div>

        <img src="/tchoozy/demonstration.svg" alt="Tchooz Demonstration" class="w-128">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
