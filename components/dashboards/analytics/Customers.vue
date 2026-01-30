<script setup lang="ts">
import { ref, computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: 'monthly earnings',
                color: getPrimary.value,
                data: [15, 18, 66, 20, 40, 12, 30]
            }
        ],
        chart: {
            id: 'customers',
            type: 'area',
            height: 103,
            sparkline: {
                enabled: true
            },
            group: 'sparklines',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: getPrimary.value,

      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [100],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between">
                <div>
                    <v-card-title class="text-h5 mb-1">Customers</v-card-title>
                    <v-card-subtitle class="text-body-1">Last 7 days</v-card-subtitle>
                </div>
                <div class="text-end">
                    <h6 class="text-h6 mb-1">6,380</h6>
                    <v-chip color="success" size="x-small">+26.5%</v-chip>
                </div>
            </div>
            <ClientOnly><apexchart type="area" class="mt-7" height="103" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
            <div class="d-flex justify-space-between align-center mt-7">
                <div class="d-flex align-center gap-2">
                    <span class="bg-primary circle-shape rounded-pill"></span>
                    <p class=" textSecondary">Apr 07 - Apr 14</p>
                </div>
                <p class=" textSecondary">6,380</p>
            </div>
            <div class="d-flex justify-space-between align-center mt-2">
                <div class="d-flex align-center gap-2">
                    <span class="bg-grey100 circle-shape rounded-pill"></span>
                    <p class=" textSecondary">Last Week</p>
                </div>
                <p class=" textSecondary">4,298</p>
            </div>
        </v-card-item>
    </v-card>
</template>
