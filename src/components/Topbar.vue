<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <main>
        <div class="h-[88px] bg-[#F9F9F9]">
            <div class="px-32 flex justify-between container mx-auto  pt-6">
                <div class="flex border border-[#E0E7FF]-2 rounded-lg overflow-hidden h-10">
                    <router-link to="/dashboardpage">
                        <button class="px-6 py-2 text-blue100 font-semibold hover:bg-blue100 hover:text-white">
                            DASHBOARD
                        </button>
                    </router-link>
                    <Router-link to="/sponsors">
                        <button
                            class="px-6 py-2 text-gray-900 font-semibold border-l border-gray-200 hover:bg-blue100 hover:text-white">
                            HOMIYLAR
                        </button>
                    </Router-link>
                    <router-link to="/students">
                        <button
                            class="px-6 py-2 text-blue100 border-l border-gray-200 hover:bg-blue100 hover:text-white">
                            TALABALAR
                        </button>
                    </router-link>
                </div>

                <input type="text" id="search" placeholder="Izlash"
                    class="w-72 h-10 relative -top-1 left-64 px-10 outline-none bg-[#E8E8E8]">
                <span class="icon-SearchIcon relative -left-40 top-5 text-[#B1B1B8]"></span>

                <button class="bg-[#EDF1FD]  w-32 rounded-lg h-10 my-2 -pl-4 text-blue100"><span
                        class="icon-FilterIcon"></span> filter</button>
            </div>
        </div>
    </main>
</template>
