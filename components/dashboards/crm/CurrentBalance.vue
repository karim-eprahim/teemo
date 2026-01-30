<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { getPrimary } from '@/utils/UpdateColors';
import { tableActionData } from '@/_mockApis/components/dashboards/Analytics';

/* Chart */
const chartOptions = computed(() => {
    return {
        color: '#adb5bd',
        series: [70, 49],
        labels: ['2022', '2021', '2020'],
        chart: {
            height: 145,
            type: 'donut',
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            offsetY: -10
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '85%'
                }
            }
        },
        stroke: {
            show: false,
            colors: 'rgba(var(--v-theme-surface))',
            width: 3
        },
        dataLabels: {
            enabled: false
        },

        legend: {
            show: false
        },
        colors: ['#b2efe8', 'rgba(var(--v-theme-success))'],

        tooltip: {
            theme: 'dark',
            fillSeriesColor: false
        }
    };
});
</script>
<template>
    <v-card elevation="10" class="bg-lightsuccess">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <div class="d-flex ga-3 align-center">
                    <div class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-success">
                        <Icon icon="solar:banknote-line-duotone" width="25" height="25" class="text-white" />
                    </div>
                    <v-card-title class="text-h6 textSecondary font-weight-medium mb-0">Current Balance</v-card-title>
                </div>

                <v-btn flat icon color="transparent" rounded="full" class="">
                    <v-avatar size="22">
                        <DotsVerticalIcon size="20" color="grey100" />
                    </v-avatar>
                    <v-menu activator="parent">
                        <v-list elevation="10">
                            <v-list-item
                                value="action"
                                v-for="list in tableActionData"
                                :key="list.listtitle"
                                hide-details
                                min-height="38"
                                class="pe-6"
                            >
                                <v-list-item-title>
                                    <v-avatar size="20" class="mr-2">
                                        <component :is="list.icon" stroke-width="2" size="20" />
                                    </v-avatar>
                                    {{ list.listtitle }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </div>
            <v-row class="justify-space-between align-end ">
                <v-col cols="6" xl="5" class="mb-1">
                    <h2 class="text-h2 mb-3">$2,529</h2>
                    <span class="text-12 rounded-pill px-2 py-1 lh-normal text-muted light-chip font-weight-medium">+42% last month</span>
                </v-col>
                <v-col cols="6" xl="5" class="pb-0">
                    <ClientOnly><apexchart type="donut" height="145" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
