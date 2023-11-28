<template>
  <main class="bg-white">
    <SiteNavigation />
    <section class="bg-white font-sans h-full pt-72 w-10/12 m-auto">
      <div class="relative">
        <img
          class="m-auto -mt-52 rounded-xl w-full"
          src="/images/header-min.jpg"
          alt=""
        />
        <div class="flex justify-center">
          <div class="absolute top-48 text-center w-2/3">
            <h2 class="text-4xl text-white font-bold leading-10">
              Enjoy Your Dream Vacation
            </h2>
            <p class="text-xl text-white font-xl font-normal">
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration from us
            </p>
          </div>
        </div>

        <div class="absolute -bottom-6 left-0 flex justify-center w-full">
          <div
            class="p-2 flex gap-3 w-fit bg-white shadow-lg rounded-md text-xs"
          >
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
                <img
                  src="/images/chevron-down-min.png"
                  class="w-3 h-3 mr-1"
                  alt=""
                />
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

            <div class="">
              <img src="/images/" alt="" />
              <input
                type="number"
                placeholder="Guests"
                class="py-2 px-3 bg-input-bg"
              />
            </div>

            <input
              type="number"
              placeholder="Rooms"
              class="py-2 px-3 bg-input-bg"
            />

            <button class="py-2 px-3 bg-button-blue text-white rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex items-center pl-6 mt-24 rounded-md bg-light-yellow w-full h-16 text-base mb-24"
      >
        <img class="pr-4" src="/images/danger-min.png" alt="" />
        Check the latest COVID-19 restrictions before you travel.
        <span class="text-button-blue"> &zwnj; Learn more</span>
      </div>

      <div class="mb-16 w-2/3">
        <h2 class="text-3xl font-semibold">Enjoy your dream vacation</h2>
        <p class="text-base w-10/12">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>

      <div class="grid grid-cols-4 w-full gap-x-4 mb-32">
        <div class="">
          <img
            class="w-full rounded-xl"
            src="/images/1st-grid-1st-img-min.jpg"
            alt=""
          />
          <div class="p-1">
            <h3 class="text-xl font-semibold">Australia</h3>
            <p class="text-sm">2246 properties</p>
          </div>
        </div>
        <div class="">
          <img
            class="w-full rounded-xl"
            src="/images/1st-grid-2nd-img-min.jpg"
            alt=""
          />
          <div class="p-1">
            <h3 class="text-xl font-semibold">Japan</h3>
            <p class="text-sm">1278 properties</p>
          </div>
        </div>
        <div class="">
          <img
            class="w-full rounded-xl"
            src="/images/1st-grid-3rd-img-min.jpg"
            alt=""
          />
          <div class="p-1">
            <h3 class="text-xl font-semibold">New Zealand</h3>
            <p class="text-sm">480 properties</p>
          </div>
        </div>
        <div class="">
          <img
            class="w-full rounded-xl"
            src="/images/1st-grid-4th-img-min.jpg"
            alt=""
          />
          <div class="p-1">
            <h3 class="text-xl font-semibold">Greece</h3>
            <p class="text-sm">320 properties</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-semibold mb-4">
          Get inspiration for your next trip
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="relative">
            <img
              class="w-full rounded-xl"
              src="/images/2nd-grid-1st-img-min.jpg"
              alt=""
            />
            <div class="absolute bottom-5 left-0 w-full">
              <div class="m-auto w-11/12 text-white">
                <h3 class="text-xl font-semibold mb-2">
                  Sydeny’s 10 most fashionable 5 star hotels
                </h3>
                <p>
                  Browse the fastest growing tourism sector in the heart of
                  Australia tourism capital ....
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <img
              class="w-full rounded-xl"
              src="/images/2nd-grid-2nd-img-min.jpg"
              alt=""
            />
            <div class="absolute bottom-5 left-0 w-full">
              <div class="m-auto w-11/12 text-white">
                <h3 class="text-xl font-semibold mb-2">
                  Top cities for Vegan Travellers
                </h3>
                <p>
                  Top sites where you do not have to worry about being a vegan.
                  Our tourist guide is here...
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <img
              class="w-full rounded-xl"
              src="/images/2nd-grid-3rd-img-min.jpg"
              alt=""
            />
            <div class="absolute bottom-5 left-0 w-full">
              <div class="m-auto w-11/12 text-white">
                <h3 class="text-xl font-semibold mb-2">
                  World’s top destinations during and post covid timeline
                </h3>
                <p>
                  Pandemic is still intact and will be here for a longer time.
                  Here’s where your next destination...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-32">
        <h2 class="text-3xl font-semibold mb-4">
          Get inspiration for your next trip
        </h2>
        <div class="grid grid-cols-4 w-full gap-x-4 mb-32">
          <div class="">
            <img
              class="w-full rounded-xl"
              src="/images/3rd-grid-1st-img-min.jpg"
              alt=""
            />
            <div class="p-1">
              <h3 class="text-xl font-semibold">Lakeside Motel Warefront</h3>
              <p class="text-sm">2246 properties</p>
            </div>
          </div>
          <div class="">
            <img
              class="w-full rounded-xl"
              src="/images/3rd-grid-2nd-img-min.jpg"
              alt=""
            />
            <div class="p-1">
              <h3 class="text-xl font-semibold">Recce Graham resort</h3>
              <p class="text-sm">1278 properties</p>
            </div>
          </div>
          <div class="">
            <img
              class="w-full rounded-xl"
              src="/images/3rd-grid-3rd-img-min.jpg"
              alt=""
            />
            <div class="p-1">
              <h3 class="text-xl font-semibold">Fireside Dinners</h3>
              <p class="text-sm">480 properties</p>
            </div>
          </div>
          <div class="">
            <img
              class="w-full rounded-xl"
              src="/images/3rd-grid-4th-img-min.jpg"
              alt=""
            />
            <div class="p-1">
              <h3 class="text-xl font-semibold">Oculous Inn Stay</h3>
              <p class="text-sm">320 properties</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mb-32">
        <img
          class="w-full rounded-xl"
          src="/images/mobile-in-hand-bg-min.jpg"
          alt=""
        />
        <div class="absolute top-0 flex justify-end w-full h-full">
          <img class="" src="/images/mobile-in-hand-min.png" alt="" />
        </div>
        <div
          class="absolute top-0 flex h-full w-1/2 justify-center items-center pl-16"
        >
          <div>
            <h2 class="text-3xl font-semibold text-white">
              Download the mobile application for bonus coupons and travel codes
            </h2>
            <button
              class="font-medium bg-button-blue px-4 py-3 rounded-md mt-8 text-white"
            >
              Download mobile app
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-center text-3xl font-semibold">
          Explore the world with My Dream Place
        </h2>
        <p class="text-center mb-32 mt-3 text-button-blue">
          Discover new places and experiences
        </p>
      </div>

      <footer class="flex justify-between text-sm font-normal text-footer-text">
        <div>
          <img class="h-5 mb-1" src="/images/logo-min.png" alt="" />
          <p class="w-10/12 pl-6">Your next goto companion for travel</p>
        </div>
        <div>
          <h4 class="text-base font-medium text-black mb-1">Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>Newsroom</p>
          <p>Advertising</p>
          <p>Contact us</p>
        </div>

        <div>
          <h4 class="text-base font-medium text-black mb-1">Explore</h4>
          <p>Australia</p>
          <p>New Zealand</p>
          <p>United States America (USA)</p>
          <p>Greece</p>
          <p>Maldives</p>
          <p>Singapore</p>
          <p class="text-button-blue">See more</p>
        </div>
        <div>
          <h4 class="text-base font-medium text-black mb-1">
            Terms and Policies
          </h4>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Acessibility</p>
          <p>Reward system policy</p>
        </div>
        <div>
          <h4 class="text-base font-medium text-black mb-1">Help</h4>
          <p>Support</p>
          <p>Cancel your bookings</p>
          <p>Use Coupon</p>
          <p>Refund Policies</p>
          <p>International Travel Documents</p>
        </div>
      </footer>
    </section>
    <div
      class="w-full h-10 flex justify-end px-72 items-center bg-copyright-bg"
    >
      <img class="h-5" src="/images/copyright-min.png" alt="" />
    </div>
  </main>
</template>

<script setup>
  import SiteNavigation from "../components/SiteNavigation.vue";

  import { ref } from "vue";
  import axios from "axios";

  const rapidAPIKey = "bfa637e03bmsh656be124dd9ed0dp10e6fdjsna98b71379263";

  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const rapidApiSearchResults = ref(null);

  const getRapidApiSearchResults = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
        params: { query: searchQuery.value },
        headers: {
          "X-RapidAPI-Key": rapidAPIKey,
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      rapidApiSearchResults.value = response.data;

      console.log(rapidApiSearchResults.value);
    } catch (error) {
      console.error("Error fetching RapidAPI results:", error);
    }
  };

  const getSearchResults = () => {
    clearInterval(queryTimeout.value);
    queryTimeout.value = setTimeout(() => {
      if (searchQuery.value !== "") {
        // Call the new function for RapidAPI
        getRapidApiSearchResults();
        return;
      }
      rapidApiSearchResults.value = null;
    }, 300);
  };
</script>
