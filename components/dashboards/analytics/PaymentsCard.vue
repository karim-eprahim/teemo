<script setup lang="ts">
import { ref, computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
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
            height: 140,
            stacked: true,
            offsetX: -18,
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
        colors: [getPrimary.value, '#D9D9D955'],
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
            <div class="d-flex justify-space-between">
                <div>
                    <v-card-title class="text-h5 mb-1">Payments</v-card-title>
                    <v-card-subtitle class="text-body-1">Last 7 days</v-card-subtitle>
                </div>
                <div class="text-end">
                    <h6 class="text-h6 mb-1">12,389</h6>
                    <v-chip color="error" size="x-small">-3.8%</v-chip>
                </div>
            </div>
            <div class="rounded-bars me-n6">
                <ClientOnly><apexchart type="bar" height="140" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
            </div>
            <div class="d-flex justify-space-between align-center mt-1">
                <div class="d-flex align-center gap-2">
                    <span class="bg-primary circle-shape rounded-pill"></span>
                    <p class="textSecondary">Paypal</p>
                </div>
                <p class="textSecondary">52%</p>
            </div>
            <div class="d-flex justify-space-between align-center mt-2">
                <div class="d-flex align-center gap-2">
                    <span class="bg-grey100 circle-shape rounded-pill"></span>
                    <p class="textSecondary">Credit Card</p>
                </div>
                <p class="textSecondary">48%</p>
            </div>
        </v-card-item>
    </v-card>
</template>
