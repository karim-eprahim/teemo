<script setup lang="ts">
import { ref, computed } from 'vue';
import { RecentProjectsData } from '@/_mockApis/components/dashboards/Crm';
import { Icon } from '@iconify/vue';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
const tab = ref(null);

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            fontFamily: 'inherit',
            type: 'radar',
            height: 350,
            toolbar: { show: !1 },
            foreColor: '#adb0bb'
        },
        series: [
            { name: 'Sales', data: [32, 27, 27, 30, 25, 25] },
            { name: 'Visits', data: [25, 35, 20, 20, 20, 20] }
        ],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: 'rgba(var(--v-theme-borderColor))',
                    connectorColors: 'rgba(var(--v-theme-borderColor))'
                }
            }
        },
        colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-lighterror)) '],
        legend: {
            show: false
        },
        fill: {
            colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-lighterror))'],
            opacity: [1, 0.4]
        },
        markers: { size: 0 },
        grid: {
            show: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                show: !0,
                style: {
                    fontSize: '13px'
                }
            }
        },
        yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
        responsive: [{ breakpoint: 769, options: { chart: { height: 400 } } }],
        tooltip: {
            theme: 'dark'
        }
    };
});

/* Chart2 */
const chartOptionslastweek = computed(() => {
    return {
        series: [
            {
                name: 'This year ',
                data: [9, 5, 3, 7, 5, 10, 3]
            },
            {
                name: 'Last year ',
                data: [6, 3, 9, 5, 4, 6, 4]
            }
        ],
        chart: {
            fontFamily: 'Inter,sans-serif',
            type: 'bar',
            height: 330,
            offsetY: 10,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: true,
            strokeDashArray: 3,
            borderColor: 'rgba(0,0,0,.1)'
        },
        colors: ['var(--bs-primary)', 'var(--bs-secondary)'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded',
                borderRadius: 6
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
            }
        },
        fill: {
            opacity: 1,
            colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-secondary))']
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
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-sm-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-md-0 mb-6">Delivery Analytics</v-card-title>

                <div class="d-flex gap-3">
                    <v-tabs v-model="tab" bg-color="hoverColor" color="textPrimary" grow height="auto" class="rounded-pill pa-1 sales-profit">
                        <v-tab value="Email" class="rounded-pill text-12 textSecondary">Email</v-tab>
                        <v-tab value="From Last Week" class="rounded-pill text-12 px-5 textSecondary">From Last Week</v-tab>
                    </v-tabs>
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
            </div>

            <v-window v-model="tab">
                <v-window-item value="Email">
                    <v-row class="align-center">
                        <v-col cols="12" md="7">
                            <ClientOnly><apexchart type="radar" height="350" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
                        </v-col>
                        <v-col cols="12" md="5">
                            <div class="rounded-md pa-5 bg-hoverColor">
                                <Icon
                                    icon="material-symbols-light:rocket-launch-outline-rounded"
                                    class="text-primary font-weight-bold"
                                    height="40"
                                ></Icon>
                                <h5 class="text-h5">Welcome Emails!</h5>
                                <p class="font-weight-medium opacity-80">Have great potential!</p>
                            </div>
                            <div class="d-flex flex-column gap-3 mt-7">
                                <div class="d-flex align-center ga-3">
                                    <span class="bg-primary circle-shape rounded-pill"></span>
                                    <h6 class="text-h6">22.3%</h6>
                                    <p class="textSecondary">Open Rate</p>
                                </div>
                                <div class="d-flex align-center ga-3">
                                    <span class="bg-secondary circle-shape rounded-pill"></span>
                                    <h6 class="text-h6">14.2%</h6>
                                    <p class="textSecondary">Click-through Rate</p>
                                </div>
                                <div class="d-flex align-center ga-3">
                                    <span class="bg-error circle-shape rounded-pill"></span>
                                    <h6 class="text-h6">11.6%</h6>
                                    <p class="textSecondary">Conversation Rate</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-window-item>
                <v-window-item value="From Last Week"> 
                    <ClientOnly><apexchart type="bar" height="330" :options="chartOptionslastweek" :series="chartOptionslastweek.series"> </apexchart></ClientOnly>
                </v-window-item>
            </v-window>
        </v-card-item>
    </v-card>
</template>
