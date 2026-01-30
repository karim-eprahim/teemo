<script setup lang="ts">
import { RecentTransactionData } from '@/_mockApis/components/dashboards/eCommerce';
import { ref } from 'vue';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Recent Transactions</v-card-title>
                <v-menu bottom left>
                    <template v-slot:activator="{ props }">
                        <v-btn icon color="inherit" v-bind="props" flat size="small">
                            <DotsVerticalIcon stroke-width="1.5" size="23" class="textSecondary" />
                        </v-btn>
                    </template>
                    <v-list density="compact" elevation="10">
                        <v-list-item v-for="(item, i) in items" :key="i" :value="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="mt-sm-10  mt-5">
                <div class="d-flex gap-3 align-center mt-7" v-for="list in RecentTransactionData" :key="list.title">
                    <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
                        <img :src="list.img" :alt="list.img" width="25" />
                    </v-avatar>
                    <div>
                        <h5 class="text-h6">{{ list.title }}</h5>
                        <p class="text-body-1 textSecondary">{{ list.subtitle }}</p>
                    </div>
                    <div :class="'ml-auto font-weight-regular text-subtitle-1 text-medium-' + list.disable">{{ list.rank }}</div>
                </div>
                <v-divider class="my-7"></v-divider>
                <v-btn class="" size="large" block flat color="primary">View all transactions</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
