<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-center pt-32 px-8 p-11">
        <router-link to="/dashboard">
          <img src="/images/logo.svg" alt="login logosi" />
        </router-link>
      </div>
      <div class="flex justify-center min-h-screen bg-gray-100">
    <form class="bg-white rounded-xl p-8 max-w-[379px] w-full h-[456px] flex flex-col">
      <h4 class="text-2xl font-bold mb-6">Kirish</h4>
      <div class="space-y-6 flex-grow">
        <div class="space-y-2">
          <label for="login" class="block text-sm font-medium text-gray-700">
            Login
          </label>
          <input
            type="email"
            id="login"
            placeholder="adm8904"
            class="w-full px-4 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Parol
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••••"
            class="w-full px-4 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-full bg-[#2E5BFF] text-white rounded-md py-3 hover:bg-blue-600 transition-colors"
      >
        Kirish
      </button>
    </form>
  </div>
    </div>


  </section>

</template>
