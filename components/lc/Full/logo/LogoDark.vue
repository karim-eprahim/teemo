<script setup lang="ts">
import DarkLogo from '/images/logos/dark-logo.svg';
</script>
<template>
    <div class="logo lh-normal">
        <NuxtLink to="/">
            <img :src="DarkLogo" alt="home" />
        </NuxtLink>
    </div>
</template>