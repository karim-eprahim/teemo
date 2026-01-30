<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { PerformanceTableData } from '@/_mockApis/components/dashboards/eCommerce';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Top Performing Products</v-card-title>
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

            <v-table class="revenue-table">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-body-1 font-weight-semibold">Product Name</th>
                            <th class="text-body-1">Category</th>
                            <th class="text-body-1">Sales</th>
                            <th class="text-body-1">Earnings</th>
                            <th class="text-body-1 pe-0">Technology</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in PerformanceTableData" :key="item.leadname" class="month-item">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="56" rounded="md" :color="item.imgBg">
                                        <img :src="item.img" :alt="item.img" width="30"
                                    /></v-avatar>
                                    <div class="mx-3">
                                        <p class="text-subtitle-1 text-no-wrap">{{ item.leadname }}</p>
                                        <span class="text-subtitle-1 text-no-wrap">{{ item.subtext }}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <v-chip rounded="pill" class="font-weight-medium" :color="item.statuscolor" size="small" label>{{
                                    item.statustext
                                }}</v-chip>
                            </td>
                            <td>
                                <p class="text-body-1 textSecondary">{{ item.sales }}</p>
                            </td>
                            <td>
                                <p class="text-body-1 textSecondary">{{ item.earnings }}</p>
                            </td>
                            <td>
                                <div class="ml-2 d-flex gap-2 justify-end">
                                    <div v-for="icon in item.techicon" :key="icon.id">
                                        <img :src="icon.icon" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-table>
        </v-card-item>
    </v-card>
</template>
