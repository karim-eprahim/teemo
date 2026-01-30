<script setup lang="ts">
import BoxedLoginForm from "@/components/auth/BoxedLoginForm.vue";
import Logo from "@/components/lc/Full/logo/LogoIcon.vue";
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
                <div class="d-flex justify-center mb-8"><Logo /></div>
                <BoxedLoginForm />
                <h6
                  class="text-h6 textSecondary d-flex align-center justify-center font-weight-regular mt-6"
                >
                  New to MaterialM?
                  <v-btn
                    class="pl-0 text-primary text-16 opacity-1 pl-2 font-weight-regular"
                    height="auto"
                    to="/auth/register2"
                    variant="plain"
                    >Create an account</v-btn
                  >
                </h6>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </ClientOnly>
</template>
