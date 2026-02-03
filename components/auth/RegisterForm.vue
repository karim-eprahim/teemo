<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/apps/user/auth";
/*Social icons*/
import google from "/images/svgs/google-icon.svg";
import facebook from "/images/svgs/facebook-icon.svg";
import { useRouter } from "vue-router";
const router = useRouter();
const userStore = useUserStore();
const isLoading = ref(false);
const valid = ref(true);
const errorMessage = ref("");
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length <= 10) || "Password must be less than 10 characters",
]);
const emailRules = ref([
  (v: string) => !!v || "E-mail is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
const firstName = ref("");
const lastName = ref("");
const fnameRules = ref([
  (v: string) => !!v || "Name is required",
  (v: string) =>
    (v && v.length <= 10) || "Name must be less than 10 characters",
]);
const register = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const response = await userStore.register(firstName.value, lastName.value, email.value, password.value);

    if (response.status) {
      console.log(response.data)
      localStorage.setItem("token", response.data.data.newUSer.token);
      userStore.setUserData(response.data.data.newUSer)
      router.push({ path: "/dashboards/ecommerce" });
    } else {
      errorMessage.value = "Login failed";
    }
  } catch (error: any) {
    errorMessage.value = error.message || "An error occurred during login";
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <v-row class="d-flex mb-6">
    <v-col cols="6" sm="6" class="pr-2">
      <v-btn
        variant="outlined"
        rounded="md"
        size="large"
        class="border text-subtitle-1 hover-link-primary"
        block
      >
        <img :src="google" height="16" class="me-2" alt="google" />
        Google
      </v-btn>
    </v-col>
    <v-col cols="6" sm="6" class="pl-2">
      <v-btn
        variant="outlined"
        rounded="md"
        size="large"
        class="border text-subtitle-1 hover-link-primary"
        block
      >
        <img :src="facebook" width="20" class="me-2" alt="facebook" />
        Facebook
      </v-btn>
    </v-col>
  </v-row>
  <div class="d-flex align-center text-center mb-6">
    <div
      class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"
    >
      <span class="bg-surface px-5 py-3 position-relative text-textPrimary"
        >or sign up with</span
      >
    </div>
  </div>
  <v-form
    v-model="valid"
    @submit.prevent="register"
    class="mt-5"
  >
    <v-label class="text-textPrimary font-weight-semibold pb-2">First Name</v-label>
    <VTextField v-model="firstName" :rules="fnameRules" required></VTextField>
    <v-label class="text-textPrimary font-weight-semibold pb-2">Last Name</v-label>
    <VTextField v-model="lastName" :rules="fnameRules" required></VTextField>
    <v-label class="text-textPrimary font-weight-semibold pb-2"
      >Email Adddress</v-label
    >
    <VTextField v-model="email" :rules="emailRules" required></VTextField>
    <v-label class="text-textPrimary font-weight-semibold pb-2"
      >Password</v-label
    >
    <VTextField
      v-model="password"
      :counter="10"
      :rules="passwordRules"
      required
      variant="outlined"
      type="password"
      color="primary"
    ></VTextField>
    <v-btn
      size="large"
      class="mt-2"
      rounded="md"
      color="primary"
      block
      type="submit"
      flat
      >Sign Up</v-btn
    >
    <div v-if="errorMessage" class="mt-2">
      <v-alert color="error">{{ errorMessage }}</v-alert>
    </div>
  </v-form>
</template>
