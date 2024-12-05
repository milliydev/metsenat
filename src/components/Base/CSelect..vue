<template>
  <div class="relative" @click="isOpen = !isOpen">
    <div
      class="flex justify-between border border-white100 rounded-md bg-white100/20 py-2.5 pl-3 pr-2.5 cursor-pointer select-none"
    >
      <span>Barchasi</span>
      <i
        ><svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8518 7.60184C16.2098 7.24386 16.7902 7.24386 17.1482 7.60184C17.5062 7.95982 17.5062 8.54022 17.1482 8.8982L11.6482 14.3982C11.3012 14.7452 10.7424 14.7574 10.3806 14.4257L4.88059 9.38408C4.5074 9.04198 4.48219 8.46213 4.82428 8.08894C5.16637 7.71575 5.74623 7.69053 6.11942 8.03263L10.9724 12.4812L15.8518 7.60184Z"
            fill="#B5B5C3"
          />
        </svg>
      </i>
    </div>

    <Transition name="dropdown">
      <ul
        v-if="isOpen"
        class="absolute top-[calc(100%+4px)] border border-white100 rounded-md bg-white w-full z-10"
      >
        <li
          v-for="option of 5"
          :key="i"
          class="px-4 py-3 border border-white100 last:border-none cursor-pointer"
        >
          Option
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);

defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
