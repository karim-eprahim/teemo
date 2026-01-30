<script setup lang="ts">
import LogoIcon from "~/components/lc/Full/logo/LogoIcon.vue";
/*form component*/
import TwoStepForm from "@/components/auth/TwoStepForm.vue";
definePageMeta({
  layout: "blank",
});
</script>
<template>
  <ClientOnly>
    <div class="pa-3">
      <v-row class="h-100vh mh-100">
        <v-col
          cols="12"
          md="6"
          class="d-md-flex d-none align-center justify-center authentication bg-textPrimary position-relative"
        >
          <div class="circle-top"></div>
          <div>
            <LogoIcon class="circle-bottom" />
          </div>
          <div class="d-flex justify-center align-center w-100 h-n80">
            <v-row class="justify-center z-index-2">
              <v-col cols="7">
                <h1 class="display-2 text-white">
                  Welcome to
                  <br />
                  MaterialM
                </h1>
                <p
                  class="text-h6 text-white opacity-80 font-weight-regular mt-4"
                >
                  MaterialM helps developers to build organized and well
                  coded<br />
                  dashboards full of beautiful and rich modules.
                </p>
                <v-btn to="/" size="large" color="primary" class="mt-5">
                  Learn More
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="bg-surface auth">
          <div
            class="d-flex justify-lg-start justify-center align-center h-100 ps-lg-12 auth-card"
          >
            <div class="mt-xl-0 mt-5 auth-card">
              <LogoIcon />
              <h3 class="text-h3 my-3 heading">Two Step Verification</h3>
              <p class="text-body-1 textSecondary mt-2 text-13">
                We sent a verification code to your mobile. Enter the code from
                the mobile in the field below.
              </p>
              <h6 class="text-subtitle-1 mt-3 font-weight-bold">******1234</h6>
              <!---Form---->
              <TwoStepForm />
              <!------->
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </ClientOnly>
</template>
