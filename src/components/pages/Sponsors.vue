<script setup>
import Header from "../Header.vue";
import ToolBar from "../ToolBar.vue"

</script>
<template>
  <main>
    <Header />
    <ToolBar/>
  </main>

  <div class="overflow-x-auto">
    <table class="w-5/6 mx-auto border-separate border-spacing-y-4">
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
      <tbody class="text-gray-700 text-sm">
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="bg-white shadow-md">
          <td class="py-3 px-6">{{ index + 1 }}</td>
          <td class="py-3 px-6">{{ item.name }}</td>
          <td class="py-3 px-6">{{ item.phone }}</td>
          <td class="py-3 px-6">{{ item.sponsorshipAmount }} UZS</td>
          <td class="py-3 px-6">{{ item.spentAmount }} UZS</td>
          <td class="py-3 px-6">{{ item.date }}</td>
          <td :class="getStatusClass(item.status)" class="py-3 px-6">
            {{ item.status }}
          </td>
          <td class="py-3 px-6 text-blue-500 cursor-pointer">
            <button @click="viewDetails(item)">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M23.855 11.3917C21.5954 6.98292 17.1221 4 12 4C6.87789 4 2.40331 6.985 0.144977 11.3921C0.0496613 11.5806 0 11.7889 0 12.0002C0 12.2115 0.0496613 12.4198 0.144977 12.6083C2.40456 17.0171 6.87789 20 12 20C17.1221 20 21.5966 17.015 23.855 12.6079C23.9503 12.4194 24 12.2111 24 11.9998C24 11.7885 23.9503 11.5802 23.855 11.3917ZM12.0058 18H12C10.4097 17.9992 8.88485 17.3669 7.76077 16.2419C6.63669 15.117 6.00542 13.5917 6.00581 12.0015C6.0062 10.4112 6.6382 8.88618 7.76283 7.76182C8.88746 6.63747 10.4126 6.00583 12.0029 6.00583C13.5932 6.00583 15.1183 6.63747 16.243 7.76182C17.3676 8.88618 17.9996 10.4112 18 12.0015C18.0004 13.5917 17.3691 15.117 16.245 16.2419C15.1209 17.3669 13.5961 17.9992 12.0058 18Z"
                  fill="#3366FF"
                />
                <path
                  d="M15.8608 13.0362C15.7247 13.5433 15.4899 14.0185 15.1698 14.4347C14.8497 14.8508 14.4506 15.1997 13.9955 15.4614C13.5403 15.7231 13.038 15.8923 12.5173 15.9595C11.9966 16.0267 11.4677 15.9905 10.961 15.853C10.4544 15.7155 9.97979 15.4793 9.56452 15.1581C9.14926 14.8368 8.80147 14.4368 8.54107 13.9809C8.28068 13.525 8.11279 13.0222 8.04704 12.5013C7.98129 11.9804 8.01897 11.4517 8.15791 10.9454C8.54194 11.228 9.01453 11.3636 9.48997 11.3276C9.96541 11.2917 10.4122 11.0865 10.7494 10.7493C11.0865 10.4122 11.2917 9.96539 11.3276 9.48995C11.3636 9.01451 11.228 8.54192 10.9454 8.15789C11.6237 7.96428 12.3412 7.95483 13.0243 8.13051C13.7075 8.30618 14.3314 8.66064 14.8321 9.15744C15.3328 9.65423 15.6922 10.2754 15.8732 10.9571C16.0542 11.6389 16.0504 12.3565 15.8621 13.0362H15.8608Z"
                  fill="#3366FF"
                />
              </svg>
            </button>
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
