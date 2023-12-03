<template>
  <main class="bg-white h-screen">
    <div>
      <header class="fixed w-screen top-0 bg-button-blue z-10 pb-32">
        <nav
          class="mx-36 flex flex-col font-sans md:flex-row items-center justify-between text-black py-3.5"
        >
          <img class="h-6" src="/images/logo-2-min.png" alt="logo" />
          <ul class="flex gap-8 text-white">
            <li>Home</li>
            <li>Discover</li>
            <li>Activities</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div class="flex items-center gap-5">
            <div>
              <img src="/images/notifications-2-min.png" alt="" />
            </div>
            <div class="relative z-10" @click="toggleDropdown">
              <img
                src="/images/profile-photo-min.png"
                alt="Dropdown Button"
                class="cursor-pointer"
              />

              <div
                v-if="isDropdownOpen"
                class="absolute top-0 right-0 mt-8 bg-white shadow-lg rounded-md py-2"
              >
                <ul
                  class="absolute flex flex-col gap-2 right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm py-1"
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
                    <img
                      class="w-4 h-4"
                      src="/images/my-trips-min.png"
                      alt=""
                    />
                    <a href="#">My trips</a>
                  </li>
                  <li class="flex items-center gap-2 pl-3 py-2">
                    <img
                      class="w-4 h-4"
                      src="/images/reward-wallet-min.png"
                      alt=""
                    />
                    <a href="#">Reward and wallet</a>
                  </li>
                  <li class="flex items-center gap-2 pl-3 py-2">
                    <img
                      class="w-4 h-4"
                      src="/images/sign-out-min.png"
                      alt=""
                    />
                    <button @click="logout">Sign out</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- //////////////////////////////////// -->
        </nav>
        <div
          class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent opacity-30 z-0"
        ></div>
        <SearchBar @result-clicked="handleResultClicked" />
      </header>
    </div>
    <section class="bg-white font-sans h-full pt-72 w-10/12 m-auto">
      <div class="grid grid-cols-4 gap-6">
        <div class="bg-white col-span-1 hidden sm:block">
          <div class="bg-checkout-bg rounded-md p-4">
            <label for="search-property" class="rounded-md font-medium">
              Search by property name
            </label>
            <input class="w-full mt-4" type="text" />
          </div>
          <h3 class="p-2 text-lg font-semibold">Filter by</h3>
          <div
            class="text-md bg-checkout-bg rounded-md border-checkout-bg border-2"
          >
            <h4 class="p-4 font-medium">Your budget per day</h4>
            <ul class="bg-white p-4">
              <li>
                <div class="flex items-center mt-4">
                  <input
                    id="budget1"
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                    >$0 - $200</label
                  >
                </div>
              </li>
              <li>
                <div class="flex items-center mt-4">
                  <input
                    id="budget2"
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                    >$200 - $500</label
                  >
                </div>
              </li>
              <li>
                <div class="flex items-center mt-4">
                  <input
                    id="budget3"
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                    >$500 - $1,000</label
                  >
                </div>
              </li>
              <li>
                <div class="flex items-center mt-4">
                  <input
                    id="budget4"
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                    >$1,000 - $2,000</label
                  >
                </div>
              </li>
              <li>
                <div class="flex items-center mt-4">
                  <input
                    id="budget5"
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                    >$2,000 - $5,000</label
                  >
                </div>
              </li>
            </ul>
          </div>
          <div
            class="text-md bg-checkout-bg rounded-md border-checkout-bg border-2 mt-6"
          >
            <h4 class="p-4 font-medium">Rating</h4>
            <div class="bg-white p-4">
              <p class="text-sm">Show only ratings more than</p>
            </div>
          </div>
        </div>
        <div class="bg-white col-span-3">
          <div class="flex justify-between">
            <h2>Melbourne : 2,582 search results found</h2>
            <div class="p-2 border-checkout-bg border-2 text-sm rounded-md">
              <p>sort by</p>
              <p>Recommended</p>
            </div>
          </div>
          <ResultCard
            v-for="hotel in detailedResults"
            :key="hotel.id"
            :hotel="hotel"
          />
          <!-- //////////////// -->
        </div>
      </div>
      <div class="my-20">
        <WarningCard />
      </div>
      <SiteFooter />
    </section>
  </main>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import SearchBar from '../components/SearchBar.vue';
  import ResultCard from '../components/ResultCard.vue';
  import WarningCard from '../components/WarningCard.vue';
  import SiteFooter from '../components/SiteFooter.vue';
  import axios from 'axios';

  const isDropdownOpen = ref(false);

  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };

  const detailedResults = ref([]);

  const handleResultClicked = async (selectedResult) => {
    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params: {
        dest_id: selectedResult.dest_id,
        search_type: selectedResult.search_type,
        arrival_date: '2023-12-05',
        departure_date: '2023-12-12',
        adults: '1',
        room_qty: '1',
      },
      headers: {
        'X-RapidAPI-Key': 'bfa637e03bmsh656be124dd9ed0dp10e6fdjsna98b71379263',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      detailedResults.value = response.data;
    } catch (error) {
      console.error('Error fetching detailed results:', error);
    }
  };
</script>

<style lang="scss" scoped></style>
