<template>
  <main class="bg-white h-screen">
    <div
      class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 pl-2 bg-checkout-bg"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                v-model="password"
                type="password"
                id="password"
                name="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 pl-2 bg-checkout-bg"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="py-2 px-4 bg-button-blue rounded-md text-white cursor-pointer w-full"
              @click="login"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-button-blue"
            >Register</a
          >
        </p>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/AuthStore';
  import { useRoute, useRouter } from 'vue-router';

  export default {
    setup() {
      const authStore = useAuthStore();
      const route = useRoute();
      const router = useRouter();
      const email = ref('');
      const password = ref('');

      const login = () => {
        if (isValidEmail(email.value) && isValidPassword(password.value)) {
          authStore.login();
          router.push({ name: 'home' });
        } else {
          console.error('Invalid email or password format');
        }
      };

      const isValidEmail = (value) => {
        return /\S+@\S+\.\S+/.test(value);
      };

      const isValidPassword = (value) => {
        return value.length >= 8;
      };

      return { email, password, login };
    },
  };
</script>
