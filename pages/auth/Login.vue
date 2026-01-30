<script setup lang="ts">
import LogoIcon from "@/components/lc/Full/logo/LogoIcon.vue";
/* Login form */
import LoginForm from "@/components/auth/LoginForm.vue";
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
              <h2 class="text-24 my-3 font-weight-bold heading">Sign in</h2>
              <div class="mb-6 textSecondary">Your Admin Dashboard</div>
              <LoginForm />
              <p
                class="d-flex align-center justify-center text-textSecondary mt-6 font-weight-medium"
              >
                New to MaterialM?
                <RouterLink
                  class="pl-0 text-primary opacity-1 pl-2 font-weight-medium text-decoration-none"
                  height="auto"
                  to="/auth/register"
                  variant="plain"
                  >Create an account</RouterLink
                >
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </ClientOnly>
</template>
