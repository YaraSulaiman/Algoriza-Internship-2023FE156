<template>
  <div class="absolute -bottom-6 left-0 flex justify-center w-full">
    <div class="p-2 flex gap-3 w-fit bg-white shadow-lg rounded-md text-xs">
      <div class="relative">
        <div class="bg-input-bg rounded-sm px-2 flex items-center">
          <img src="/images/location 1-min.png" class="w-5 h-5" alt="" />
          <input
            type="text"
            v-model="searchQuery"
            @input="getSearchResults"
            placeholder="Where are you going?"
            class="inline-flex py-2 bg-input-bg text-center focus:outline-none"
          />
          <img src="/images/chevron-down-min.png" class="w-3 h-3 mr-1" alt="" />
        </div>

        <ul
          class="absolute bg-white rounded-md text-black shadow-md py-2 px-1 top-[66px] w-full"
          v-if="
            searchQuery &&
            rapidApiSearchResults &&
            rapidApiSearchResults.data &&
            rapidApiSearchResults.data.length > 0
          "
        >
          <li
            v-for="searchResult in rapidApiSearchResults.data"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="handleResultClick(searchResult)"
          >
            {{ searchResult.name }}
          </li>
        </ul>

        <ul
          v-if="
            searchQuery &&
            rapidApiSearchResults.data &&
            rapidApiSearchResults.data.length === 0
          "
          class="absolute bg-white rounded-md text-black shadow-md py-2 px-1 top-[66px] w-full"
        >
          <li class="py-2">No results found.</li>
        </ul>
      </div>

      <input
        type="date"
        placeholder="Check in date"
        class="py-2 px-3 bg-input-bg"
      />

      <input
        type="date"
        placeholder="Check out date"
        class="py-2 px-3 bg-input-bg"
      />

      <img src="/images/" alt="" />
      <input type="number" placeholder="Guests" class="py-2 px-3 bg-input-bg" />

      <input type="number" placeholder="Rooms" class="py-2 px-3 bg-input-bg" />

      <RouterLink :to="{ name: 'Results' }">
        <button class="py-2 px-3 bg-button-blue text-white rounded-md">
          Search
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, computed, defineEmits } from 'vue';
  import axios from 'axios';

  const rapidAPIKey = 'bfa637e03bmsh656be124dd9ed0dp10e6fdjsna98b71379263';

  const { modalActive } = defineProps(['modalActive']);

  const searchQuery = ref('');
  const queryTimeout = ref(null);
  const rapidApiSearchResults = ref(null);

  const getRapidApiSearchResults = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
        params: { query: searchQuery.value },
        headers: {
          'X-RapidAPI-Key': rapidAPIKey,
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      rapidApiSearchResults.value = response.data;

      console.log(rapidApiSearchResults.value);
    } catch (error) {
      console.error('Error fetching RapidAPI results:', error);
    }
  };

  const getSearchResults = () => {
    clearInterval(queryTimeout.value);
    queryTimeout.value = setTimeout(() => {
      if (searchQuery.value !== '') {
        getRapidApiSearchResults();
        return;
      }
      rapidApiSearchResults.value = null;
    }, 300);
  };

  const shouldShowResults = computed(() => {
    return (
      searchQuery.value &&
      rapidApiSearchResults &&
      rapidApiSearchResults.data &&
      rapidApiSearchResults.data.length > 0
    );
  });

  const emit = defineEmits();

  const handleResultClick = (searchResult) => {
    emit('result-clicked', searchResult);
  };
</script>
