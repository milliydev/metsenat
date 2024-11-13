<script setup></script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex justify-center pt-32 px-8">
        <router-link to="/dashboardpage">
          <img src="/img/logo.svg" alt="" />
        </router-link>
      </div>
      <div class="flex justify-center pt-8">
        <form class="w-96 h-[456px] -pt-0 bg-white rounded-xl px-8 pt-8">
          <h4 class="text-2xl font-bold">Kirish</h4>
          <br />
          <label for="login">Login</label>
          <br />
          <input
            type="email"
            id="login"
            name="login"
            placeholder="adm8904"
            class="w-80 h-10 rounded-md px-4 outline-none"
          />

          <br /><br />
          <label for="password">Parol</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••"
            class="w-80 h-10 rounded-md outline-none px-4"
          />
          <br /><br /><br /><br /><br />
          <button
            type="submit"
            class="w-80 h-12 bg-[#2E5BFF] text-white rounded-md"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
