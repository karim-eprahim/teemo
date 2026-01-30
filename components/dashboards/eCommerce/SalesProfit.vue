<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';

import { getSecondary, getPrimary } from '@/utils/UpdateColors';

/* Chart */
const areachartOptions = computed(() => {
    return {
        chart: {
            height: 300,
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            fontSize: '12px',
            offsetX: 0,
            offsetY: 10,
            animations: {
                speed: 500
            },
            toolbar: {
                show: false
            }
        },
        colors: [getPrimary.value, '#adb0bb'],
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.4,
                opacity: 0.3,
                stops: [100]
            }
        },
        grid: {
            show: true,
            strokeDashArray: 3,
            borderColor: '#90A4AE50',
            
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
        yaxis: {
            tickAmount: 3,
            
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark'
        }
    };
});

const areaChart = {
    series: [
        {
            type: 'area',
            name: 'This Year',
            chart: {
                foreColor: '#111c2d99',
                fontSize: 12,
                fontWeight: 500,
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
                    y: 25
                },
                {
                    x: 'Sep',
                    y: 25
                },
                {
                    x: 'Oct',
                    y: 10
                },
                {
                    x: 'Nov',
                    y: 10
                },
                {
                    x: 'Dec',
                    y: 45
                },
                {
                    x: 'Jan',
                    y: 45
                },
                {
                    x: 'Feb',
                    y: 75
                },
                {
                    x: 'Mar',
                    y: 70
                },
                {
                    x: 'Apr',
                    y: 35
                }
            ]
        },
        {
            type: 'line',
            name: 'Last Year',
            chart: {
                foreColor: '#111c2d99'
            },
            data: [
                {
                    x: 'Aug',
                    y: 50
                },
                {
                    x: 'Sep',
                    y: 50
                },
                {
                    x: 'Oct',
                    y: 25
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
                    y: 20
                },
                {
                    x: 'Feb',
                    y: 35
                },
                {
                    x: 'Mar',
                    y: 35
                },
                {
                    x: 'Apr',
                    y: 60
                }
            ]
        }
    ]
};

/* Chart */
const expensechartOptions = computed(() => {
    return {
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: 300,
            offsetY: 10,
            offsetX: -18,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: true,
            strokeDashArray: 3,
            borderColor: 'rgba(0,0,0,.1)',
        },
        colors: [getPrimary.value, getSecondary.value],
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
        },
        xaxis: {
            type: 'category',
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                style: {
                    colors: '#a1aab2'
                }
            }
            
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#a1aab2'
                }
            },
            
        },
        fill: {
            opacity: 1,
            colors: [getPrimary.value, getSecondary.value],
        },
        tooltip: {
            theme: 'dark'
        },
        legend: {
            show: false
        },
        responsive: [
            {
                breakpoint: 767,
                options: {
                    stroke: {
                        show: false,
                        width: 5,
                        colors: ['transparent']
                    }
                }
            }
        ]
    };
});

const expenseChart = {
    series: [
        {
            name: 'This year',
            data: [9, 5, 3, 7, 5, 10, 3]
        },
        {
            name: 'Last year ',
            data: [6, 3, 9, 5, 4, 6, 4]
        }
    ]
};

const tab = ref(null);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-sm-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-sm-0 mb-5">Sales Profit</v-card-title>
                <v-tabs v-model="tab" bg-color="hoverColor" height="auto" class="rounded-pill pa-1 sales-profit">
                    <v-tab value="Profit" class="rounded-pill font-weight-semibold text-12">Profit</v-tab>
                    <v-tab value="Expneses" class="rounded-pill font-weight-semibold text-12">Expneses</v-tab>
                </v-tabs>
            </div>

            <v-window v-model="tab">
                <v-window-item value="Profit">
                    <div class="ms-n4"><ClientOnly><apexchart type="area" height="300" :options="areachartOptions" :series="areaChart.series"> </apexchart></ClientOnly></div>
                    <div class="d-sm-flex gap-3 justify-space-between mt-8">
                        <div class="d-sm-flex ga-7 justify-space-between">
                            <div class="d-flex mb-sm-0 mb-4 gap-3 align-center">
                                <div
                                    height="30"
                                    class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-lightprimary text-primary"
                                >
                                    <Icon icon="solar:checklist-minimalistic-line-duotone" width="25" height="25" />
                                </div>
                                <div>
                                    <h6 class="text-h6">
                                        $63,489.50 <v-chip color="success" size="x-small" class="font-weight-medium">+8%</v-chip>
                                    </h6>
                                    <p class="text-body-1 textSecondary mt-n1">Profit this year</p>
                                </div>
                            </div>
                            <div class="d-flex  mb-sm-0 mb-4 gap-3 align-center">
                                <div height="30" class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-light text-muted">
                                    <Icon icon="solar:dollar-minimalistic-line-duotone" width="25" height="25" />
                                </div>
                                <div>
                                    <h6 class="text-h6">$38,496.00</h6>
                                    <p class="text-body-1 textSecondary ">Profit this year</p>
                                </div>
                            </div>
                        </div>
                        <v-btn class="px-12" color="primary" size="large" flat>View Details</v-btn>
                    </div>
                </v-window-item>
                <v-window-item value="Expneses">
                    <ClientOnly><apexchart type="bar" height="370" :options="expensechartOptions" :series="expenseChart.series"> </apexchart></ClientOnly>
                </v-window-item>
            </v-window>
        </v-card-item>
    </v-card>
</template>
