<template>
  <!-- BACKDROP -->
  <div
    v-if="show"
    class="bg-[#000]/50 fixed inset-0 z-10"
    @click="$emit('close-modal')"
  ></div>

  <!-- BODY -->
  <div
    v-if="show"
    class="z-20 fixed w-[586px] h-[568px] inset-0 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
  >
    <div class="flex items-center text-lg justify-between px-8 py-4 text-white">
      <h2 class="text-black size-6 font-semibold">{{ title }}</h2>
      <button @click="$emit('close-modal')" class="text-[#B2B7C1]">x</button>
    </div>

    <!-- CONTENT -->

    <div class="max-w-lg pt-6 mx-auto bg-white rounded">
      <!-- ARIZA HOLATI -->
      <div class="mb-4">
        <CSelect :options="sponsorStatuses" />
      </div>

      <!-- HOMIYLIK SUMMASI -->
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2"
          >Homiylik summasi</label
        >
        <div class="grid grid-cols-3 gap-2">
          <button
            class="border border-gray-300 rounded px-4 py-2 bg-white100 text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Barchasi
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 border-blue-500 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            1 000 000 UZS
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            5 000 000 UZS
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            7 000 000 UZS
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            10 000 000 UZS
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            30 000 000 UZS
          </button>
          <button
            class="border border-gray-300 rounded px-4 py-2 hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            50 000 000 UZS
          </button>
        </div>
      </div>

      <!-- SANA -->
      <div class="mb-4">
        <label for="date" class="block text-gray-700 font-medium mb-2"
          >Sana</label
        >
        <input
          id="date"
          type="text"
          placeholder="kk.oo.yyyy - kk.oo.yyyy"
          class="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- BUTTONLAR -->
      <div class="flex justify-end gap-4 pt-14">
        <button
          class="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Tozalash
        </button>
        <button
          class="flex items-center gap-2 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12h3m-9 0h3m-9 0h3M3 4h18M3 20h18M4 6h16M4 18h16M6 8v8m12-8v8"
            />
          </svg>
          Natijalarni ko'rish
        </button>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup>
import CSelect from "./Base/CSelect..vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Filter",
  },
});
</script>
