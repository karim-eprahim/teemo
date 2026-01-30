<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { OverallBalance } from '@/_mockApis/components/dashboards/Crm';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                type: 'area',
                name: 'This Year',
                data: [
                    {
                        x: 'Aug',
                        y: 25
                    },
                    {
                        x: 'Sep',
                        y: 13
                    },
                    {
                        x: 'Oct',
                        y: 20
                    },
                    {
                        x: 'Nov',
                        y: 40
                    },
                    {
                        x: 'Dec',
                        y: 45
                    },
                    {
                        x: 'Jan',
                        y: 50
                    },
                    {
                        x: 'Feb',
                        y: 70
                    },
                    {
                        x: 'Mar',
                        y: 30
                    }
                ]
            },
            {
                type: 'line',
                name: 'Last Year',
                chart: {
                    foreColor: '#adb0bb',
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    }
                },
                data: [
                    {
                        x: 'Aug',
                        y: 50
                    },
                    {
                        x: 'Sep',
                        y: 35
                    },
                    {
                        x: 'Oct',
                        y: 30
                    },
                    {
                        x: 'Nov',
                        y: 20
                    },
                    {
                        x: 'Dec',
                        y: 20
                    },
                    {
                        x: 'Jan',
                        y: 30
                    },
                    {
                        x: 'Feb',
                        y: 35
                    },
                    {
                        x: 'Mar',
                        y: 40
                    }
                ]
            }
        ],
        chart: {
            height: 210,
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            offsetX: 0,
            animations: {
                speed: 500
            },
            toolbar: {
                show: false
            }
        },
        colors: [getPrimary.value, 'rgba(119, 119, 142, 0.05)'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0,
                stops: [100]
            }
        },
        grid: {
            borderColor: 'rgba(var(--v-theme-borderColor))'
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        }
    };
});

// Investment

const InvestchartOptions = computed(() => {
    return {
        series: [
            {
                name: 'BTC',
                data: [3500, 2500, 4000, 2500, 5500, 3500, 2500]
            },
            {
                name: 'ETH',
                data: [3000, 1500, 3100, 5000, 3000, 5500, 3500]
            }
        ],
        chart: {
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 220,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        grid: {
            show: false,
            strokeDashArray: 3,
            borderColor: '#90A4AE50'
        },
        colors: [getPrimary.value, '#DFE5EF'],
        markers: {
            size: 0
        },
        yaxis: {
            show: false
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark'
        }
    };
});

const tab = ref(null);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <v-row>
                <v-col cols="12" md="8">
                    <div class="d-sm-flex justify-space-between mb-md-0 mb-5">
                        <div class="mb-md-0 mb-6">
                            <small class="font-weight-light text-body-1">Overall Balance</small>
                            <h2 class="text-h2 my-1">$2,538,942</h2>
                            <v-chip color="success" size="small"
                                ><icon icon="solar:alt-arrow-down-bold" height="17" class="me-1"></icon> 16.3%</v-chip
                            ><span class="ms-2 textSecondary text-12">last 12 months</span>
                        </div>
                        <div>
                            <v-tabs
                                v-model="tab"
                                bg-color="hoverColor"
                                color="textPrimary"
                                grow
                                height="auto"
                                class="rounded-pill pa-1 sales-profit"
                            >
                                <v-tab value="Orders" class="rounded-pill text-12 textSecondary">Orders</v-tab>
                                <v-tab value="Income" class="rounded-pill text-12 textSecondary">Income</v-tab>
                            </v-tabs>
                        </div>
                    </div>
                    <v-window v-model="tab">
                        <v-window-item value="Orders">
                            <div class="">
                                <ClientOnly><apexchart
                                    type="line"
                                    class="mt-7"
                                    height="220"
                                    :options="InvestchartOptions"
                                    :series="InvestchartOptions.series"
                                >
                                </apexchart></ClientOnly>
                            </div>
                        </v-window-item>
                        <v-window-item value="Income">
                            <div class="me-n5 ms-n3">
                                <ClientOnly><apexchart type="area" class="mt-8" height="210" :options="chartOptions" :series="chartOptions.series">
                                </apexchart></ClientOnly>
                            </div>
                        </v-window-item>
                    </v-window>
                </v-col>
                <v-col cols="12" md="4">
                    <div class="d-flex flex-column ga-2">
                        <div class="d-flex gap-3 align-center bg-hoverColor rounded-md pa-4" v-for="item in OverallBalance" :key="item.title">
                            <div height="30" :class="'rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-light' + item.color">
                                <Icon :icon="'solar:' + item.icon" width="25" height="25" :class="'text-' + item.color" />
                            </div>
                            <div>
                                <p class="textSecondary text-12">{{ item.subtitle }}</p>
                                <h6 class="text-body-1">{{ item.title }}</h6>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
