<script setup lang="ts">
import { userCardData } from '@/_mockApis/components/dashboards/Analytics';
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between">
                <div>
                    <v-card-title class="text-h5 mb-1">Latest Deal</v-card-title>
                    <v-card-subtitle class="text-body-1">Last 7 days</v-card-subtitle>
                </div>
                <v-chip color="info" size="x-small">86.5%</v-chip>
            </div>
            <div class="my-9 ">
                <div class="d-flex align-center justify-space-between mb-2">
                    <h6 class="text-h6">$98,500</h6>
                    <h6 class="text-h6">$1,22,900</h6>
                </div>
                <v-progress-linear model-value="80" height="4" color="success" bg-color="light" rounded></v-progress-linear>
                <p class="textSecondary mt-2">Coupons used: 18/22</p>
            </div>
            <h5 class="text-body-1">Recent Purchasers</h5>
            <div class="d-flex justify-content-start mt-4">
                <div class="ml-2 d-flex">
                    <v-avatar v-for="card in userCardData" :key="card.img" size="40" class="ml-n2 avtar-border">
                        <img :src="card.img" alt="usericon" height="40" />
                    </v-avatar>
                    <v-avatar size="40" class="ml-n2 avtar-border text-secondary" color="lightsecondary">
                        +8
                    </v-avatar>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
