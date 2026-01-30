<script setup lang="ts">
import { ref, computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        color: '#adb5bd',
        series: [70, 18, 12],
        labels: ['2024', '2023', '2022'],
        chart: {
            height: 175,
            type: 'donut',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
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
            show: true,
            colors: 'rgba(var(--v-theme-surface))',
            width: 3
        },
        dataLabels: {
            enabled: false
        },

        legend: {
            show: false
        },
        colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-success))', 'rgba(var(--v-theme-error))'],


        tooltip: {
            theme: 'dark',
            fillSeriesColor: false
        }
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between">
                <div>
                    <v-card-title class="text-h5 mb-1">Products</v-card-title>
                    <v-card-subtitle class="text-body-1">Last 7 days</v-card-subtitle>
                </div>
                <div class="text-end">
                    <h6 class="text-h6 mb-1">432</h6>
                    <v-chip color="success" size="x-small">+26.5%</v-chip>
                </div>
            </div>
            <div class="text-center">
                <ClientOnly><apexchart type="donut" height="175" :options="chartOptions" :series="chartOptions.series" class="my-4"> </apexchart></ClientOnly>
                <p class="text-12 textSecondary">Profit more than last month</p>
            </div>
        </v-card-item>
    </v-card>
</template>
