<script setup lang="ts">
import LogoIcon from "@/components/lc/Full/logo/LogoIcon.vue";
/* Reset form */
import ResetPassword from "@/components/auth/ResetForm.vue";
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
                <p class="text-body-1 text-white textSecondary mt-2 text-13">
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
              <h2 class="text-h3 my-3 heading">Forgot your password?</h2>
              <p class="text-subtitle-1 textSecondary">
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </p>
              <ResetPassword />
              <v-btn
                size="large"
                color="lightprimary"
                to="/auth/login"
                block
                class="mt-5 text-primary"
                rounded="md"
                flat
                >Back to Login</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </ClientOnly>
</template>
