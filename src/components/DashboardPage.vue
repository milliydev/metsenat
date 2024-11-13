<script setup>
import Topbar from './Topbar.vue';
</script>

<template>
  <main>
    <header>
      <div class="h-16 bg-white">
        <div class="pt-3 px-32 flex justify-between container mx-auto">
          <img src="/img/logoNavbar.svg" alt="" class="w-44" />
          <button class="w-32 h-10 bg-[#F1F1F3] rounded-md">Shohrux</button>
          <i class="icon-loginIcon absolute right-20 top-6 text-2xl"></i>
        </div>
      </div>
    </header>
    <Topbar/>
  </main>
</template>
