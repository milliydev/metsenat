<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-center pt-32 px-8">
        <router-link to="/dashboard">
          <img src="/images/logo.svg" alt="login logosi" />
        </router-link>
      </div>
      <div class="flex justify-center pt-8">
        <form class="w-96 h-[456px] -pt-0 bg-white rounded-xl px-8 pt-8 py-4">
          <h4 class="text-2xl font-bold">Kirish</h4>
          <div class="pt-4 leading-10">
            <label for="login">Login</label>
            <input  type="email" id="login" name="login" placeholder="adm8904"
              class="w-80 h-10 rounded-md px-4 outline-none"  />
            <label for="password" class="relative top-1">Parol</label>
            <input type="password" id="password" name="password" placeholder="••••••••••"
              class="w-80 h-10 rounded-md outline-none px-4" />
            <button type="submit" class="w-80 h-12 bg-[#2E5BFF] text-white rounded-md my-28">
              Kirish
            </button>
          </div>
        </form>
      </div>
    </div>
  

  </section>
  
</template>
