<template>
    <div
      class="relative bg-white-400 rounded-lg flex items-center border border-transparent border-solid focus:within-border-black-500"
      :class="{ 'border-red-400': error }"
    >
      <slot name="prefix" />
      <input
        v-model="model"
        autocomplete="off"
        class="w-full h-full text-base font-normal rounded-lg bg-white-400 py-3 pl-3 outline-none text-black-500 placeholder-gray-100"
      />
  
      <span>{{ model }}</span>
      <slot name="suffix" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: Boolean,
      default: false,
    },
  });
  
  const model = defineModel();
  
  // const formattedValue = ref('');
  
  // const computedClass = computed(() => {
  //   const baseClass =
  //     'py-2.5 pl-3 rounded-lg bg-white-400 text-sm  font-medium transition-all duration-300 flex items-center outline-none';
  
  //   const variantClass = {
  //     primary:
  //       'w-full h-full text-base font-normal bg-white-400 py-2.5 pl-3  outline-none text-black-500',
  //     phoneNumber:
  //       'w-full h-full font-normal text-sm bg-white-400 py-2.5 pl-3 text-black-500 outline-none',
  //   }[props.variant];
  
  //   const disabledClass = props.disabled
  //     ? ' bg-white-400 cursor-not-allowed'
  //     : '';
  
  //   return [baseClass, variantClass, disabledClass].join(' ');
  // });
  
  // const formatCardInput = () => {
  //   let value = formattedValue.value.replace(/\D/g, '');
  //   value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  //   formattedValue.value = value;
  // };
  </script>
  