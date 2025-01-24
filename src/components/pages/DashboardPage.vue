<template>
  <main>
    <Header />
    <ToolBar />
  </main>
  <div class="flex space-x-14 p-10 justify-center">
    <div v-for="card in cards" :key="card.id" class="flex bg-white rounded-lg shadow-md p-4 space-x-4 w-96">
      <!-- Dinamik ikonka -->
      <div class="p-3 rounded-full text-white">
        <span :class="[card.icon]">
          <span></span>
        </span>
      </div>
      <div>
        <p class="text-sm text-gray-500">{{ card.label }}</p>
        <p class="text-xl font-bold text-gray-700">{{ card.amount }} UZS</p>
      </div>
    </div>
  </div>
  <ApexChart />
</template>

<script setup>
import ApexChart from "../ApexChart.vue";
import Header from "../Header.vue";
import ToolBar from "../ToolBar.vue"

// Kartalar ma'lumotlari
const cards = [
  {
    id: 1,
    label: "Jami to'langan summa",
    amount: "1 684 325 000",
    icon: "icon-paidIcon",
  },
  {
    id: 2,
    label: "Jami so'ralgan summa",
    amount: "14 098 530 000",
    icon: "icon-requestedIcon",
  },
  {
    id: 3,
    label: "To'lanishi kerak summa",
    amount: "12 414 205 000",
    icon: "icon-dueIcon",
  },
];
</script>

<style scoped>
</style>
