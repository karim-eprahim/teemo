<script setup lang="ts">
import {appsLink} from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- apps link -->
    <!-- ---------------------------------------------- -->
    <v-row>
        <v-col cols="12" md="6" v-for="(item, i) in appsLink" :key="i">
            <NuxtLink :to="item.href" class="text-decoration-none custom-text-primary">
                <div class="d-flex align-center">
                    <v-avatar size="45" color="light">
                        <img :src="item.avatar" width="20" height="20" :alt="item.avatar" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-body-1 mb-1 textPrimary font-weight-semibold custom-title">{{ item.title }}</h6>
                        <p class="text-subtitle-2 textSecondary">{{ item.subtext }}</p>
                    </div>
                </div>
            </NuxtLink>
        </v-col>
    </v-row>
</template>
