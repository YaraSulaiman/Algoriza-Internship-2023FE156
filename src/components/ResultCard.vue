<template>
  <div class="p-4 border-checkout-bg border-2 mt-6 grid grid-cols-3">
    <img src="/images/Rectangle 25.png" alt="" />
    <div id="info">
      <h4>Julia Dens Resort</h4>

      <div id="ratings">
        <p>4.5 (1200 Reviews)</p>
      </div>
      <p class="text-sm mt-8 mb-6">
        Reats include a glass of French champagne, parking and a late checkout.
        Gym included. Flexible cancellation applies
      </p>
      <button class="bg-button-blue px-3 py-2 text-white rounded-md">
        See availability
      </button>
    </div>
    <div id="extra info" class="text-end text-sm">
      <div class="flex justify-end">
        <p class="bg-red-500 text-white w-fit rounded-md mb-10 p-1">
          Book now and receive 15%off
        </p>
      </div>
      <div class="flex justify-end mb-12">
        <p class="bg-green-700 w-fit rounded-md p-1 text-white">5% off</p>
      </div>
      <p>
        <span class="text-red-500 text-sm"><del>$160</del></span> $130
      </p>
      <p>inlcudes taxes and fees</p>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['hotel']);

  const hotelImage = computed(() => {
    if (
      props.hotel?.property?.photoUrls &&
      props.hotel.property.photoUrls.length > 0
    ) {
      return props.hotel.property.photoUrls[0];
    }

    return '/images/default-hotel-image.jpg';
  });
</script>

<style lang="scss" scoped></style>
