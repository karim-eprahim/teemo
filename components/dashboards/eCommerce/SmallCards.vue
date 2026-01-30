<script setup lang="ts">
import { textCardsData } from '@/_mockApis/components/dashboards/eCommerce'
import { Icon } from '@iconify/vue';
</script>
<template>
    <v-row class="d-flex">
        <v-col v-for="item in textCardsData.slice(0,3)" :key="item.title" cols="12" sm="4" class="d-flex">
            <v-card elevation="10" :color="'light'+ item.bgcolor"  class="overflow-hidden">
                <v-card-text class="pl-5 pr-7">
                    <img :src="item.shape" alt="shape" class="shape">
                    <div  height="30" :class="'rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-'+ item.bgcolor">
                        <Icon :icon="'solar:' + item.icon" width="25" height="25" />    
                    </div>
                    <h5 class="text-h5 font-weight-semibold mb-2 mt-8">{{ item.num }}
                        <span class="text-12  border rounded-pill px-2 py-1 lh-normal border-muted text-muted">{{ item.percent }}</span></h5>
                    <p  class="opacity-50 font-weight-medium">{{ item.title }}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<style scoped>
.shape {
    position: absolute;
    right: 0;
    top: 0px;
}
.border-muted{
    border-color: rgba(90,106,133, 0.1) !important;
}
</style>