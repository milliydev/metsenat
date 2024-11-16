<script setup>
import Topbar from './Topbar.vue';
</script>
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
    <Topbar/>
</main>

  <div class="overflow-x-auto py-6">
    <table class="w-5/6 mx-auto">
      <thead>
        <tr class="bg-gray-100 text-gray-600 uppercase text-sm">
          <th class="py-4 px-6 text-left">#</th>
          <th class="py-4 px-6 text-left">F.I.SH.</th>
          <th class="py-3 px-6 text-left">Tel. raqami</th>
          <th class="py-3 px-6 text-left">Homiylik summasi</th>
          <th class="py-3 px-6 text-left">Sarflangan summa</th>
          <th class="py-3 px-6 text-left">Sana</th>
          <th class="py-3 px-6 text-left">Holati</th>
          <th class="py-3 px-6 text-left">Amallar</th>
        </tr>
      </thead>
      <tbody class="text-gray-700 text-sm font-ligh">
  <tr v-for="(item, index) in items":key="index" class="border-b border-gray-200 hover:bg-gray-100 mb-36 bg-[#fff] leading-6">
    <td class="py-3 px-6">{{ index + 1}}</td>
    <td class="py-3 px-6">{{ item.name }}</td>
    <td class="py-3 px-6">{{ item.phone }}</td>
    <td class="py-3 px-6">{{ item.sponsorshipAmount }} UZS</td>
    <td class="py-3 px-6">{{ item.spentAmount }} UZS</td>
    <td class="py-3 px-6">{{ item.date }}</td>
    <td :class="getStatusClass(item.status)" class="py-3 px-6">
      {{ item.status }}
    </td>
    <td class="py-3 px-6 text-blue-500 cursor-pointer">
      <button @click="viewDetails(item)">🔍</button>
    </td>
  </tr>
</tbody>

    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Alimov Abror Xabibullayevich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "30 000 000",
          spentAmount: "0",
          date: "15.01.2021",
          status: "Yangi",
        },
        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },


        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },

        {
          name: "Saimov Rustam Saimjonovich",
          phone: "+99899 973-72-60",
          sponsorshipAmount: "1 000 000",
          spentAmount: "0",
          date: "02.02.2021",
          status: "Moderatsiyada",
        },
        // Add more items as needed
      ],
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Yangi":
          return "text-blue-500 font-semibold";
        case "Moderatsiyada":
          return "text-yellow-500 font-semibold";
        case "Tasdiqlangan":
          return "text-green-500 font-semibold";
        case "Bekor qilingan":
          return "text-red-500 font-semibold";
        default:
          return "";
      }
    },
    viewDetails(item) {
      alert(`Viewing details for ${item.name}`);
    },
  },
};
</script>
