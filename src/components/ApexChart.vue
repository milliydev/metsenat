<template>
    <div>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md w-[1265px] mx-auto">
        <h2 class="text-lg font-bold mb-4">Homiylar va talabalar soni</h2>
        <apexchart
          type="line"
          height="402px"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const series = ref([
    {
      name: 'Homiylar', 
      data: [150, 200, 500, 1284, 1100, 1200, 1300, 1400, 1500, 1800, 2000, 2300],
    },
    {
      name: 'Talabalar',
      data: [100, 150, 300, 1153, 1300, 1400, 1350, 1450, 1600, 1900, 2100, 2500],
    },
  ]);
  
  const chartOptions = ref({
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#4A90E2', '#FF6B6B'],
    xaxis: {
      categories: [
        'Yanvar',
        'Fevral',
        'Mart',
        'Aprel',
        'May',
        'Iyun',
        'Iyul',
        'Avgust',
        'Sentabr',
        'Oktabr',
        'Noyabr',
        'Dekabr',
      ],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val.toLocaleString()}`,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val.toLocaleString()}`,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
  });
  </script>
  
  <style scoped>
  .bg-gray-100 {
    background-color: #f9fafb;
  }
  </style>
  