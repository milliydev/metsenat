<script setup></script>

<template>
    <main>
        <div class="h-[88px] bg-[#F9F9F9]">
            <div class="px-32 flex justify-between container mx-auto  pt-6">
                <div class="flex border border-gray-200 rounded-lg overflow-hidden h-10">
                    <button class="px-6 py-2 text-[#3366FF99] font-semibold hover:bg-[#3366FF] hover:text-white">
                        DASHBOARD
                    </button>
                    <button class="px-6 py-2 text-gray-900 font-semibold border-l border-gray-200 hover:bg-[#3366FF] hover:text-white">
                        HOMIYLAR
                    </button>
                    <button class="px-6 py-2 text-[#3366FF99] border-l border-gray-200 hover:bg-[#3366FF] hover:text-white">
                        TALABALAR
                    </button>

                </div>
                <input type="text" id="search" placeholder="Izlash"
                    class="w-72 h-10 relative left-48 px-10 outline-none bg-[#E8E8E8]">
                <button class="bg-[#EDF1FD] w-32 rounded-lg h-10 my-3">filter</button>

            </div>
        </div>
    </main>
</template>
