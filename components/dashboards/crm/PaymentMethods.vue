<script setup lang="ts">
import { ref } from 'vue';
import { TransactionsData } from '@/_mockApis/components/dashboards/Crm';
import { ChevronRightIcon } from 'vue-tabler-icons';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Payment Methods</v-card-title>
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

            <v-row>
                <v-col cols="12" md="6">
                    <v-card elevation="0" rounded="md" class="bg-grey200 payment-card">
                        <v-card-item>
                            <div class="d-flex justify-space-between">
                                <h5 class="text-h5">**** 8942</h5>
                                <img src="/images/svgs/icon-visa.svg" alt="materialM" />
                            </div>
                            <div class="pt-12">
                                <p class="text-white font-weight-medium opacity-50 mb-1">Balance</p>
                                <h5 class="text-h5">$26,561.50</h5>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card elevation="0" rounded="md" class="bg-light payment-card-2">
                        <v-card-item>
                            <div class="d-flex justify-space-between">
                                <h5 class="text-h5">**** 8942</h5>
                                <img src="/images/svgs/icon-master-card-1.svg" alt="materialM" />
                            </div>
                            <div class="pt-12">
                                <p class="textSecondary mb-1">Balance</p>
                                <h5 class="text-h5">$26,561.50</h5>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>

            <div class="d-flex justify-space-between align-center py-4 mt-3 border-b">
                <h5 class="text-h5">Transactions</h5>
                <RouterLink to="/" class="text-decoration-none text-primary d-flex align-center ga-1 font-weight-bold"
                    >See all <ChevronRightIcon size="15" />
                </RouterLink>
            </div>

            <v-table class="revenue-table border-table-no-hover">
                <template v-slot:default>
                    <tbody>
                        <tr v-for="item in TransactionsData" :key="item.title">
                            <td class="">
                                <div class="d-flex align-center">
                                    <v-avatar size="48" class="mr-3 bg-hoverColor">
                                        <img :src="item.img" alt="profile" height="25" width="25" />
                                    </v-avatar>
                                    <div>
                                        <h6 class="text-h6 font-weight-semibold">{{ item.title }}</h6>
                                        <div class="text-12 textSecondary">{{ item.subtitle }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <v-chip size="x-small" :color="item.statuscolor">{{ item.statustext }}</v-chip>
                            </td>
                            <td class="text-end">
                                <h6 class="text-h6 font-weight-semibold text-no-wrap mb-1 text-no-wrap">
                                    {{ item.price }}
                                </h6>
                                <p :class="'text-12 font-weight-medium text-'+ item.rankcolor">{{ item.rank }}</p>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-table>
        </v-card-item>
    </v-card>
</template>
