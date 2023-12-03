<template>
  <div class="bg-checkout-bg">
    <SiteNavigation />
    <section class="bg-checkout-bg font-sans h-full pt-32 w-10/12 m-auto">
      <h2 class="text-3xl font-semibold mb-6">Secure your reservation</h2>
      <WarningCard />

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="col-span-2">
          <!-- //////////////////////////////////////////////////////////// -->

          <div class="bg-white mt-6 rounded-md">
            <div class="flex bg-button-blue p-3 rounded-tl-md rounded-tr-md">
              <img src="/images/security-user-min.png" alt="" />
              <span class="text-white text-lg pl-4">Room 1</span>
              <span class="text-white pl-4"
                >2 adults, 1 double bed and 1 twin bed, Non-smoking</span
              >
            </div>
            <div class="w-2/3">
              <div class="border-b border-gray-900/10 pb-12 p-5 mb-6">
                <div
                  class="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                  <!-- /////////////////////////////////////////////////////////////// -->

                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium leading-6 text-checkout-text"
                      >First name</label
                    >

                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                    />
                  </div>

                  <!-- /////////////////////////////////////////////////////////////// -->

                  <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-checkout-text"
                      >Last name</label
                    >

                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                    />
                  </div>

                  <!-- /////////////////////////////////////////////////////////////// -->

                  <div class="sm:col-span-6">
                    <label
                      for="phoneNumber"
                      class="block text-sm font-medium leading-6 text-checkout-text"
                    >
                      Mobile Number
                    </label>

                    <div class="flex items-center space-x-2 mt-2">
                      <select
                        id="countryCode"
                        name="countryCode"
                        autocomplete="country-code"
                        aria-label="Country Code"
                        class="block w-20 rounded-sm border-0 px-2 py-2 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 focus:ring-button-blue"
                      >
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                      </select>

                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6"
                      />
                    </div>

                    <!-- /////////////////////////////////////////////////////////////// -->

                    <div class="flex items-center mt-4">
                      <input
                        id="checkbox"
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-button-blue transition duration-150 ease-in-out"
                      />
                      <label for="checkbox" class="ml-2 text-gray-700 text-sm"
                        >Receive text alerts about this trip.</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

          <div class="bg-white mt-6 rounded-md">
            <div class="flex bg-button-blue p-3 rounded-tl-md rounded-tr-md">
              <img src="/images/card-tick-min.png" alt="" />
              <span class="text-white text-lg pl-4">Payment options</span>
            </div>
            <div class="w-2/3">
              <div class="border-b border-gray-900/10 pb-12 p-5 mt-4">
                <div class="mb-4">
                  <label
                    for="last-name"
                    class="block text-sm font-medium leading-6 text-checkout-text"
                    >Name on card</label
                  >
                  <div class="flex items-center gap-4">
                    <input
                      type="text"
                      name="card-name"
                      id="card-name"
                      class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                    />
                    <img
                      class="bg-white w-5 h-5 mt-1"
                      src="/images/tick-circle-min.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="cardNumber"
                    class="block text-sm font-medium leading-6 text-checkout-text"
                    >Debit/Credit card number</label
                  >
                  <div class="flex items-center gap-4">
                    <input
                      v-model="cardNumber"
                      @input="formatCardNumber"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                      maxlength="19"
                    />
                    <img
                      class="bg-white w-5 h-5 mt-1"
                      src="/images/tick-circle-min.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    for="expiryDate"
                    class="block text-sm font-medium leading-6 text-checkout-text"
                    >Expiry Date</label
                  >
                  <div class="flex items-center gap-4">
                    <input
                      v-model="expiryDate"
                      @input="formatExpiryDate"
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      class="block w-10/12 rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                      maxlength="5"
                    />
                    <img
                      class="bg-white w-5 h-5 mt-1"
                      src="/images/tick-circle-min.png"
                      alt=""
                    />
                  </div>
                </div>

                <!-- CVV and Postal code-->
                <div class="grid grid-cols-2 gap-4">
                  <div class="mb-4">
                    <label
                      for="cvv"
                      class="block text-sm font-medium leading-6 text-checkout-text"
                      >Security Code</label
                    >

                    <input
                      v-model="cvv"
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                      maxlength="3"
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      for="billingZip"
                      class="block text-sm font-medium leading-6 text-checkout-text"
                      >Billing Zip Code</label
                    >
                    <div class="flex items-center gap-4">
                      <input
                        v-model="billingZip"
                        type="text"
                        id="billingZip"
                        name="billingZip"
                        placeholder="123456"
                        class="block w-full rounded-sm border-0 pl-2 py-1.5 text-checkout-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6 mt-2"
                        maxlength="6"
                      />
                      <img
                        class="bg-white w-5 h-5 mt-1"
                        src="/images/tick-circle-min.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

          <div class="bg-white mt-6 rounded-md">
            <div class="flex bg-card-yellow p-3 rounded-tl-md rounded-tr-md">
              <span class="text-black text-lg pl-4"
                >Important information about your booking</span
              >
            </div>

            <div
              class="border-b border-gray-900/10 pb-12 p-5 mb-32 mt-4 leading-7"
            >
              <ol>
                <li>
                  1. This rate is non-refundable. If you change or cancel your
                  booking you will not get a refund or credit to use for a
                  future stay.
                </li>
                <li>2. Stay extensions will require a new reservation.</li>
                <li>3. Front desk staff will greet guests on arrival</li>
                <li>
                  4. No refunds will be issued for late check-in or early
                  check-out.
                </li>
              </ol>
              <p class="text-sm mt-6">
                By clicking the button below, I acknowledge that I have reviewed
                the
                <span class="text-button-blue">Privacy Statement</span> and have
                reviewd and accept the
                <span class="text-button-blue">Rules and Restrictions</span> and
                <span class="button-blue">Terms of Use</span>.
              </p>
              <!-- Payment Button -->
              <button
                @click="validatePayment"
                class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-button-blue focus:outline-none focus:ring focus:border-blue-300 mt-3"
              >
                Continue Booking
              </button>
              <div class="text-sm mt-4 flex gap-1 items-center">
                <img src="/images/lock-circle-min.png" alt="" />
                <p>
                  We use secure transmission and encrypted storage to protect
                  your personal information
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- /////////////////////////////////////////////////////////////////////////// -->
        <div class="col-span-1">
          <div class="bg-white mt-6 rounded-md">
            <img src="/images/checkout-img-1-min.jpg" alt="" />
            <div class="p-4">
              <h4 class="text-lg font-medium">Lakeside Motel Warefront</h4>
              <div class="flex items-center">
                <img src="/images/full-star-min.png" alt="" />
                <img src="/images/full-star-min.png" alt="" />
                <img src="/images/full-star-min.png" alt="" />
                <img src="/images/full-star-min.png" alt="" />
                <img src="/images/half-star-min.png" alt="" />
                <p class="pl-3">4.5 (1200 Reviews)</p>
              </div>
              <div class="text-sm mt-5 leading-8">
                <p class="text-red-400">Non-refundable</p>
                <p>Check in: Sunday, March 18, 2022</p>
                <p>Check out: Tuesday, March 20, 2022</p>
                <p>2 night stay</p>
              </div>
            </div>
          </div>

          <!-- ///////////////////////////////////////////////////////////////////////// -->

          <div class="bg-white mt-6 rounded-md">
            <div class="flex bg-card-green p-3 rounded-tl-md rounded-tr-md">
              <h4>Price Details</h4>
            </div>
            <div class="p-4 text-sm grid grid-cols-2 leading-7">
              <p>1room X 2nights</p>
              <p class="text-end">$ 120.32</p>
              <p>Tax and services fees</p>
              <p class="text-end">$ 9.68</p>
            </div>
            <div class="font-medium p-4 flex justify-between">
              <p>Total</p>
              <p>$ 130</p>
            </div>
          </div>
          <!-- ////////////////////////////////////////////// -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SiteNavigation from '../components/SiteNavigation.vue';
  import WarningCard from '../components/WarningCard.vue';

  export default {
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        billingZip: '',
      };
    },
    components: {
      SiteNavigation,
      WarningCard,
    },
    methods: {
      formatCardNumber() {
        this.cardNumber = this.cardNumber.replace(/\D/g, '');
        this.cardNumber = this.cardNumber.replace(/(.{4})/g, '$1 ').trim();
      },
      formatExpiryDate() {
        this.expiryDate = this.expiryDate.replace(/\D/g, '');
        if (this.expiryDate.length > 2) {
          this.expiryDate = `${this.expiryDate.slice(
            0,
            2,
          )}/${this.expiryDate.slice(2, 4)}`;
        }
      },
      validatePayment() {
        console.log('Card Number:', this.cardNumber);
        console.log('Expiry Date:', this.expiryDate);
        console.log('CVV:', this.cvv);
        console.log('Billing Zip Code:', this.billingZip);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
