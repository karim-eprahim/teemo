<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary } from '@/utils/UpdateColors';
/* Chart */
const areachartOptions = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 80,
            sparkline: {
                enabled: true
            },
            group: 'sparklines',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        colors: [getPrimary.value],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            color: [getPrimary.value],
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.4,
                opacityTo: 0.8,
                stops: [100]
            }
        },
        markers: {
            size: 0
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        }
    };
});

const areaChart = {
    series: [
        {
            name: 'Users',
            data: [25, 66, 20, 40, 12, 58, 20]
        }
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <v-card-title class="text-h5">Annual Profit</v-card-title>
            <div class="bg-lightprimary rounded-md mt-7 overflow-hidden">
                <div class="d-flex justify-space-between align-center pa-6 pb-0">
                    <span class="textSecondary font-weight-medium">Conversion Rate</span>
                    <h3 class="text-h3 heading">18.4%</h3>
                </div>
                <ClientOnly><apexchart type="area" class="mt-5" height="80" :options="areachartOptions" :series="areaChart.series"> </apexchart></ClientOnly>
            </div>
            <div class="d-flex flex-column gap-3 mt-6 annual-list">
                <div class="list">
                    <div class="d-flex justify-space-between">
                        <div>
                            <p class="font-weight-regular mb-1">Added to Cart</p>
                            <span class="textSecondary text-subtitle-2">5 clicks</span>
                        </div>
                        <div>
                            <h6 class="text-h6 font-weight-regular  mb-1">$21,120.70</h6>
                            <p class="font-weight-medium text-right text-success">+13.2%</p>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between mt-6">
                        <div>
                            <p class="font-weight-regular mb-1">Added to Cart</p>
                            <span class="textSecondary text-subtitle-2">5 clicks</span>
                        </div>
                        <div>
                            <h6 class="text-h6 font-weight-regular  mb-1">$16,100.00</h6>
                            <p class="font-weight-medium text-right text-error">-7.4%</p>
                        </div>
                    </div>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
