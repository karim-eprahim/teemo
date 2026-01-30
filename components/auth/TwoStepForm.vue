<template>
    <div class="mt-6">
        <v-label class="text-body-1 font-weight-semibold pb-2 text-lightText">Type your 6 digits security code</v-label>
        <div class="d-flex justify-space-between gap-3  verification">
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
            <VTextField></VTextField>
        </div>
        <v-btn color="primary" size="large" rounded="md" block flat>Verify My Account</v-btn>
        <h6 class="text-h6 textSecondary d-flex align-center font-weight-regular    mt-6">
            Didn't get the code?
            <NuxtLink to="/" class="pl-0 text-primary text-16 opacity-1 pl-2 text-decoration-none font-weight-regular"> Resend</NuxtLink>
        </h6>
    </div>
</template>