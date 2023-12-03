<template>
  <div v-if="!authStore.isAuthenticated">
    <RouterLink :to="{ name: 'Login' }">
      <button
        class="py-2 px-4 bg-button-blue rounded-md text-white cursor-pointer"
      >
        Login
      </button>
    </RouterLink>
  </div>

  <div v-else>
    <WelcomeModal :modalActive="!modalActive" @close-modal="toggleModal">
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
    </WelcomeModal>
    <div class="flex items-center gap-5">
      <div>
        <img src="/images/notifications-min.png" alt="" />
      </div>
      <div class="relative" @click="toggleDropdown">
        <img
          src="/images/profile-photo-min.png"
          alt="Dropdown Button"
          class="cursor-pointer"
        />

        <div
          v-if="isDropdownOpen"
          class="absolute top-0 right-0 mt-8 bg-white shadow-lg rounded-md"
        >
          <ul
            class="absolute flex flex-col gap-2 right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
          >
            <li class="flex items-center gap-2 pl-3 py-2">
              <img
                class="w-4 h-4"
                src="/images/manage-account-min.png"
                alt=""
              />
              <a href="#">Manage account</a>
            </li>
            <li class="flex items-center gap-2 pl-3 py-2">
              <img class="w-4 h-4" src="/images/my-trips-min.png" alt="" />
              <a href="#">My trips</a>
            </li>
            <li class="flex items-center gap-2 pl-3 py-2">
              <img class="w-4 h-4" src="/images/reward-wallet-min.png" alt="" />
              <a href="#">Reward and wallet</a>
            </li>
            <li class="flex items-center gap-2 pl-3 py-2">
              <img class="w-4 h-4" src="/images/sign-out-min.png" alt="" />
              <button @click="logout">Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- ///////////////////////////////////////////// -->
</template>

<script setup>
  import { useAuthStore } from '../stores/AuthStore';
  import WelcomeModal from './WelcomeModal.vue';

  import { ref } from 'vue';

  const isDropdownOpen = ref(false);

  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  const authStore = useAuthStore();

  const logout = () => {
    authStore.logout();
  };
  const modalActive = ref(null);
  const toggleModal = () => {
    modalActive.value = !modalActive.value;
  };
</script>
