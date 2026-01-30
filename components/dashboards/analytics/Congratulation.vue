<script setup lang="ts">
import { CongratulationCard } from '@/_mockApis/components/dashboards/Analytics';
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
const select = ref('This Week');
const items = ref(['April 2024', 'May 2024', 'June 2024']);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: '',
                data: [0, 20, 15, 19, 14, 25, 30]
            },
            {
                name: '',
                data: [0, 8, 19, 13, 26, 16, 25]
            }
        ],

        chart: {
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 250,
            width: '100%',
            type: 'line',
            offsetX: -15,
            toolbar: {
                show: false
            },
            stacked: false
        },
        legend: {
            show: false
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        grid: {
            borderColor: 'rgba(var(--v-theme-borderColor))',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: 0,
                bottom: 0,
                left: 10,
                right: 0
            }
        },
        colors: [getPrimary.value, getSecondary.value],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#6993ff'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            labels: {
                show: true
            },
            type: 'category',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: true,
                formatter: function (value: string) {
                    return value + 'k';
                }
            }
        },
        tooltip: {
            theme: 'dark'
        }
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-0">
            <v-row>
                <v-col cols="12" md="6">
                    <v-card-title class="text-h5 mb-1">Congratulations Jonathan</v-card-title>
                    <v-card-subtitle class="text-body-1">You have done 38% more sales</v-card-subtitle>
                    <v-row>
                        <v-col cols="12" sm="5">
                            <div class="d-flex flex-column ga-5 mt-8">
                                <div class="d-flex gap-3 align-center" v-for="item in CongratulationCard" :key="item.title">
                                    <div
                                        height="30"
                                        :class="'rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-light' + item.color"
                                    >
                                        <Icon :icon="'solar:' + item.icon" width="25" height="25" :class="'text-' + item.color" />
                                    </div>
                                    <div>
                                        <h6 class="heading text-h6">{{ item.title }}</h6>
                                        <p class="textSecondary">{{ item.subtitle }}</p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="7">
                            <div class="text-end">
                                <img src="/images/backgrounds/teamwork.png" alt="materialM" class="w-100" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                        <div>
                            <v-card-title class="text-h5 mb-1">Total Orders</v-card-title>
                            <v-card-subtitle class="text-body-1">Weekly order updates</v-card-subtitle>
                        </div>
                        <div>
                            <v-select
                                v-model="select"
                                :items="items"
                                variant="solo"
                                density="compact"
                                rounded="pill"
                                bg-color="light"
                                elevation="0"
                                class="text-body-1"
                                hide-details
                            ></v-select>
                        </div>
                    </div>
                    <div class="me-n3">
                        <ClientOnly><apexchart type="line" height="250" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
