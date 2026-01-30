<script setup lang="ts">
import Logo from "@/components/lc/Full/logo/LogoIcon.vue";
/* Register form */
import BoxedRegisterForm from "@/components/auth/BoxedRegisterForm.vue";

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
                <BoxedRegisterForm />
                <h6
                  class="text-h6 d-flex align-center font-weight-regular mt-6"
                >
                  Already have an Account?
                  <v-btn
                    variant="plain"
                    to="/auth/login2"
                    class="pl-0 text-primary text-16 opacity-1 pl-2 font-weight-regular"
                    >Sign in</v-btn
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
