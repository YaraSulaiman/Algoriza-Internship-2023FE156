// AuthStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    // other state properties
  }),
  actions: {
    login() {
      // your login logic
      this.isAuthenticated = true;
    },
    logout() {
      // your logout logic
      this.isAuthenticated = false;
    },
  },
});
