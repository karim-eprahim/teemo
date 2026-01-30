<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: 'Paypal',
                data: [29, 52, 38, 47, 56, 41, 46]
            },
            {
                name: 'Credit Card',
                data: [71, 71, 71, 71, 71, 71, 71]
            }
        ],

        chart: {
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            type: 'bar',
            height: 150,
            stacked: true,
            offsetX: -5,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 1,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        colors: ['rgba(var(--v-theme-primary))', '#D9D9D955'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '26%',
                borderRadius: [3],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [['M'], ['T'], ['W'], ['T'], ['F'], ['S'], ['S']],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark'
        },
        legend: {
            show: false
        }
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Payments</v-card-title>
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
            <h4 class="text-h4 mt-6">12,389 <v-chip color="error" size="x-small" class="font-weight-medium">-3.8%</v-chip></h4>
            <v-card-subtitle class="text-body-1 textSecondary">Last 7 days</v-card-subtitle>
            <div class="rounded-bars ms-n3">
                <ClientOnly><apexchart type="bar" height="150" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
            </div>
            <div class="d-flex justify-space-between align-center mt-5">
                <div class="d-flex align-center gap-2">
                    <span class="bg-primary circle-shape rounded-pill"></span>
                    <p class="text-body-1 lh-normal">Paypal</p>
                </div>
                <p class="text-body-1">52%</p>
            </div>
            <div class="d-flex justify-space-between mt-2 align-center">
                <div class="d-flex align-center gap-2">
                    <span class="bg-grey100 circle-shape rounded-pill"></span>
                    <p class="text-body-1 lh-normal">Credit Card</p>
                </div>
                <p class="text-body-1">48%</p>
            </div>
        </v-card-item>
    </v-card>
</template>
