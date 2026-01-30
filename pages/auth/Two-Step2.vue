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
    <div class="authentication auth-bg">
      <v-container class="pa-3 auth-login">
        <v-row class="h-100vh d-flex justify-center align-center">
          <v-col cols="12" lg="5" sm="10">
            <v-card elevation="10" class="mx-auto">
              <v-card-item>
                <div class="d-flex justify-center mb-8 mt-5"><LogoIcon /></div>
                <p class="text-body-1 text-textSecondary text-center">
                  We sent a verification code to your mobile. Enter the code
                  from the mobile in the field below.
                </p>
                <h6 class="text-subtitle-1 mt-3 font-weight-bold text-center">
                  ******1234
                </h6>
                <!---Form---->
                <TwoStepForm />
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </ClientOnly>
</template>
