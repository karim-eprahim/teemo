<script setup lang="ts">
import LightLogo from '/images/logos/light-logo.svg';
</script>
<template>
    <div class="logo lh-normal">
        <NuxtLink to="/">
            <img :src="LightLogo" alt="home" />
        </NuxtLink>
    </div>
</template>