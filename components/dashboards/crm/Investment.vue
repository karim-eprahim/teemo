<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { getPrimary } from '@/utils/UpdateColors';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [
            {
                name: '',
                data: [128, 193, 150, 120, 174, 150]
            }
        ],
        chart: {
            toolbar: {
                show: false
            },
            height: 230,
            type: 'bar',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        colors: ['rgba(0,0,0,0.07)', getPrimary.value, 'rgba(0,0,0,0.07)', 'rgba(0,0,0,0.07)', 'rgba(0,0,0,0.07)', 'rgba(0,0,0,0.07)'],
        plotOptions: {
            bar: {
                borderRadius: 12,
                columnWidth: '59%',
                distributed: true,
                endingShape: 'rounded'
            }
        },

        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            categories: [['JAN'], ['FEB'], ['MAR'], ['APR'], ['MAY'], ['JUN']],
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
        }
    };
});
</script>
<template>
    <v-card elevation="10" class="bg-lightprimary">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Return On Investment</v-card-title>
                <v-menu bottom left>
                    <template v-slot:activator="{ props }">
                        <v-btn icon color="transparent" v-bind="props" flat size="small">
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
            <div class="d-flex ga-2 align-center mt-5">
                <div>
                    <div height="30" class="rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-surface">
                        <Icon icon="solar:course-up-line-duotone" width="25" height="25" class="text-muted" />
                    </div>
                </div>
                <div class="d-flex align-center">
                    <div class="px-6">
                        <h4 class="text-h4">283%</h4>
                        <p class="text-body-1 textSecondary font-weight-medium">ROI</p>
                    </div>
                    <div class="px-6 border-s">
                        <h4 class="text-body-1 text-primary">+24%</h4>
                        <p class="text-body-1 textSecondary font-weight-medium">January</p>
                    </div>
                </div>
            </div>
            <div class="ms-n3">
                <ClientOnly><apexchart type="bar" height="230" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
            </div>
        </v-card-item>
    </v-card>
</template>
