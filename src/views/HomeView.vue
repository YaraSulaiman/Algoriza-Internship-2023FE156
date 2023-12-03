<template>
  <main class="bg-white">
    <SiteNavigation />
    <section class="bg-white font-sans h-full pt-72 w-10/12 m-auto">
      <div class="relative mb-24">
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

        <SearchBar />
      </div>
      <WarningCard />

      <div class="mt-24 mb-16 w-2/3">
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
            <RouterLink :to="{ name: 'Checkout' }">
              <button
                class="font-medium bg-button-blue px-4 py-3 rounded-md mt-8 text-white"
                @click=""
              >
                Download mobile app
              </button>
            </RouterLink>
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

      <SiteFooter />
    </section>
    <div
      class="w-full h-10 flex justify-end px-72 items-center bg-copyright-bg"
    >
      <img class="h-5" src="/images/copyright-min.png" alt="" />
    </div>
  </main>
</template>

<script setup>
  import SiteNavigation from '../components/SiteNavigation.vue';
  import SiteFooter from '../components/SiteFooter.vue';
  import Results from './Results.vue';
  import SearchBar from '../components/SearchBar.vue';
  import WarningCard from '../components/WarningCard.vue';

  import { RouterLink } from 'vue-router';
</script>
