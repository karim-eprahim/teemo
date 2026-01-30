<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [30, 10, 16, 16, 16, 10],
        labels: ['36%', '10%', '16%', '16%', '10%', '15%'],
        chart: {
            type: 'donut',
            fontFamily: 'inherit',
            foreColor: '#c6d1e9'
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '15px',
                            offsetY: 5,
                            color: 'rgba(var(--v-theme-textPrimary))'
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            color: 'rgba(var(--v-theme-muted))',
                            fontSize: '20px',
                            fontWeight: '600',
                            label: '8364'
                        }
                    }
                }
            }
        },
        grid: {
            padding: {
                bottom: -80
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false,
            name: {
                show: false
            }
        },
        stroke: {
            width: 0
        },
        tooltip: {
            enabled: false,
            fillSeriesColor: false
        },
        colors: [
            'rgba(var(--v-theme-primary))',
            'rgba(var(--v-theme-secondary))',
            'rgba(var(--v-theme-lighterror))',
            'rgba(var(--v-theme-surface))',
            'rgba(var(--v-theme-light))',
            'rgba(var(--v-theme-success))'
        ]
    };
});

const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Product Sales</v-card-title>
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
            <ClientOnly><apexchart type="donut" height="260" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
            <div class="text-center">
                <v-chip color="success"> <Icon icon="bi:lightning-charge-fill" class="me-1"></Icon> Best Seller </v-chip>
            </div>
            <v-row class="pt-8">
                <v-col cols="6" class="py-0">
                    <div class="d-flex align-center gap-2">
                        <span class="bg-primary circle-shape rounded-pill"></span>
                        <p class="text-body-1">36% Modernize</p>
                    </div>
                </v-col>
                <v-col cols="6"  class="py-0">
                    <div class="d-flex align-center gap-2">
                        <span class="bg-success circle-shape rounded-pill"></span>
                        <p class="text-body-1">17% Spike</p>
                    </div>
                </v-col>
                <v-col cols="6" >
                    <div class="d-flex align-center gap-2">
                        <span class="bg-secondary circle-shape rounded-pill"></span>
                        <p class="text-body-1">10% Ample</p>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div class="d-flex align-center gap-2">
                        <span class="bg-error circle-shape rounded-pill"></span>
                        <p class="text-body-1">16% MaterialM</p>
                    </div>
                </v-col>
            </v-row>
            <v-divider class="my-8"></v-divider>
            <p class="text-center text-12 textSecondary">This is overview of the sales happened this<br> month for the material website</p>
        </v-card-item>
    </v-card>
</template>
