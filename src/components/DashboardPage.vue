<template>
  <main>
    <header>
      <div class="h-16 bg-white">
        <div class="pt-3 px-32 flex justify-between container mx-auto">
          <img src="/images/logoNavbar.svg" alt="" class="w-44" />
          <button class="w-[133px] h-10 bg-[rgb(241,241,243)] rounded-md pr-8 pt-2 font-semibold	">Zohid
          <div class="relative w-8 h-8 left-[90px] rounded -top-7 bg-[#00AE69] pt-1">
            <i class="icon-personIcon text-center text-[#F1F1F3]"></i>
          </div>
          </button>
          <i class="icon-loginIcon absolute right-20 top-5 text-2xl"></i>
        </div>
      </div>
    </header>
    <Topbar />
  </main>
  <div class="flex space-x-14 p-10 justify-center">
    <div
      v-for="card in cards"
      :key="card.id"
      class="flex bg-white rounded-lg shadow-md p-4 space-x-4 w-96"
    >
      <div class="p-3 rounded-full text-white">
        <span class="icon-paidIcon text-4xl">
          <span class="path1"></span>
          <span class="path2"></span>
        </span>
      </div>
      <div>
        <p class="text-sm text-gray-500">{{ card.label }}</p>
        <p class="text-xl font-bold text-gray-700">{{ card.amount }} UZS</p>
      </div>
    </div>
  </div>
  <div id="chart">
    <apexchart type="line" :options="chartOptions" :series="series" height="350" />
  </div>
  <ApexChart/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Topbar from './Topbar.vue';
import VueApexCharts from 'vue3-apexcharts';
import ApexChart from './ApexChart.vue';


// Kartalar ma'lumotlari
const cards = [
  { id: 1, label: "Jami to'langan summa", amount: "1 684 325 000" },
  { id: 2, label: "Jami so'ralgan summa", amount: "14 098 530 000" },
  { id: 3, label: "To'lanishi kerak summa", amount: "12 414 205 000" },
];
</script>
