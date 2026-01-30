<script setup lang="ts">
/* Reset form */
import ResetPassword from "@/components/auth/ResetForm.vue";
import LogoIcon from "~/components/lc/Full/logo/LogoIcon.vue";
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <ClientOnly>
    <div class="authentication auth-bg">
      <v-container class="pa-3 auth-login">
        <v-row class="h-100vh d-flex justify-center align-center">
          <v-col cols="12" lg="5" sm="10">
            <v-card elevation="10" class="mx-auto">
              <v-card-item>
                <div class="d-flex justify-center mb-8 mt-5"><LogoIcon /></div>
                <p class="text-body-1 textSecondary text-center mb-8">
                  Please enter the email address associated with your account
                  and We will email you a link to reset your password.
                </p>
                <ResetPassword />
                <v-btn
                  size="large"
                  color="lightprimary"
                  to="/auth/login2"
                  block
                  class="mt-5 text-primary"
                  rounded="md"
                  flat
                  >Back to Login</v-btn
                >
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </ClientOnly>
</template>
