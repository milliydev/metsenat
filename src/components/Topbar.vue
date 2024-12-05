<script setup>
import { RouterLink } from "vue-router";
import CModal from "./CModal.vue";
import { ref } from "vue";
</script>

<template>
  <main>
    <div class="h-[88px] bg-[#F9F9F9]">
      <div class="px-32 flex justify-between container mx-auto pt-6">
        <div
          class="flex border border-white100 rounded-lg overflow-hidden h-10"
        >
          <Router-link to="/dashboardpage" activeClass="active">
            <button
              class="px-6 py-2 text-blue100 font-semibold hover:bg-blue100 hover:text-white"
            >
              DASHBOARD
            </button>
          </Router-link>
          <Router-link to="/sponsors" activeClass="active">
            <button
              class="px-6 py-2 text-blue100 font-semibold border-l border-gray-200 hover:bg-blue100 hover:text-white"
            >
              HOMIYLAR
            </button>
          </Router-link>
          <Router-link to="/students" activeClass="active">
            <button
              class="px-6 py-2 text-blue100 border-l border-gray-200 hover:bg-blue100 hover:text-white"
            >
              TALABALAR
            </button>
          </Router-link>
        </div>

        <input
          type="text"
          id="search"
          placeholder="Izlash"
          class="w-72 h-10 relative -top-1 left-64 px-10 outline-none bg-[#E8E8E8]"
        />
        <span
          class="icon-SearchIcon relative -left-40 top-5 text-[#B1B1B8]"
        ></span>

        <button
          @click="showModal = true"
          class="bg-[#EDF1FD] w-32 rounded-lg h-10 my-2 -pl-4 text-blue100"
        >
          <span class="icon-FilterIcon"></span> Filter
        </button>
      </div>
    </div>
    <CModal :show="showModal" @close-modal="showModal = false" />
  </main>
</template>

<script>
const showModal = ref(false);
</script>

<style scoped>
.active button {
  background-color: #3366ff;
  color: white;
}
</style>
