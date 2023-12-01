<template>
  <header class="fixed w-screen top-0 bg-white z-10">
    <nav
      class="mx-36 flex flex-col font-sans md:flex-row items-center justify-between text-black py-3.5"
    >
      <RouterLink :to="{ name: 'home' }">
        <img class="h-6" src="/images/logo-min.png" alt="logo" />
      </RouterLink>
      <ul class="flex gap-8">
        <li>Home</li>
        <li>Discover</li>
        <li>Activities</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <!-- <a
        class="py-2 px-4 bg-button-blue rounded-md text-white cursor-pointer"
        @click="toggleModal"
        >Modal</a
      > -->

      <ProfileDropdown />
    </nav>

    <!-- <WelcomeModal :modalActive="modalActive" @close-modal="toggleModal">
      <div class="flex flex-col justify-center items-center">
        <div class="relative m-6">
          <img src="/images/modal-bg-img.png" alt="" />
          <img
            class="absolute top-3 left-10"
            src="/images/modal-img-2.png"
            alt=""
          />
          <img
            class="absolute top-2 right-8"
            src="/images/modal-img-1.png"
            alt=""
          />
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold text-center">
            Welcome to My Dream Place
          </h3>
          <p class="text-center">
            You can now enjoy your travel experience with easy access to
            resources and more
          </p>
        </div>
      </div>
    </WelcomeModal> -->
  </header>
</template>

<script setup>
  // import { useAuthStore } from '../stores/AuthStore';
  import { RouterLink } from 'vue-router';
  // import WelcomeModal from './WelcomeModal.vue';
  import HomeView from '../views/HomeView.vue';

  import ProfileDropdown from './ProfileDropdown.vue';
  import { ref } from 'vue';

  // const modalActive = ref(null);
  // const toggleModal = () => {
  //   modalActive.value = !modalActive.value;
  // };

  // const authStore = useAuthStore();

  // const logout = () => {
  //   authStore.logout();
  //   // Redirect to the login page or perform other actions
  //   // Example: router.push('/login');
  // };
</script>
