<template>
  <header class="fixed w-screen top-0 bg-white z-10">
    <nav
      class="mx-36 flex flex-col font-sans md:flex-row items-center justify-between text-black py-3.5"
    >
      <RouterLink :to="{ name: 'home' }">
        <img class="h-6" src="/images/logo-min.png" alt="logo" />
      </RouterLink>
      <ul class="flex gap-8">
        <RouterLink :to="{ name: 'home' }">
          <li>Home</li>
        </RouterLink>
        <li>Discover</li>
        <li>Activities</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <ProfileDropdown />
    </nav>
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import HomeView from '../views/HomeView.vue';

  import ProfileDropdown from './ProfileDropdown.vue';
  import { ref } from 'vue';
</script>
