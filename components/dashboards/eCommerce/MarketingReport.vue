<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { PerformanceData } from '@/_mockApis/components/dashboards/eCommerce';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);

/* Chart */
const chartOptions = computed(() => {
    return {
        color: '#adb5bd',
        series: [70, 18, 12],
        labels: ['24.3k', '1.22', '+2.9k'],
        chart: {
            height: 175,
            type: 'donut',
            color: '#adb5bd',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '85%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: '600',
                            label: '24.3k'
                        }
                    }
                }
            }
        },
        stroke: {
            show: true,
            colors: 'rgba(var(--v-theme-surface))',
            width: 3
        },
        dataLabels: {
            enabled: false,
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
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-0">Marketing Report</v-card-title>
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
            <v-row class="mt-3 align-center">
                <v-col cols="12" sm="6" class="d-flex flex-column gap-4">
                    <div class="d-flex gap-3 align-center" v-for="item in PerformanceData" :key="item.title">
                        <div height="30" :class="'rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-light' + item.color">
                            <Icon :icon="'solar:' + item.icon" width="25" height="25" :class="'text-' + item.color" />
                        </div>
                        <div>
                            <p class="textSecondary">{{ item.subtitle }}</p>
                            <h4 class="heading text-h4">{{ item.title }}</h4>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6">
                    <div class="text-center">
                        <ClientOnly><apexchart type="donut" height="175" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
                    </div>
                </v-col>
            </v-row>
            <div class="bg-hoverColor rounded-md py-3 px-4 d-flex justify-space-between align-center mt-8">
                <p class="textSecondary">Learn insigs how to manage</p>
                <RouterLink to="/">
                    <v-avatar size="40" color="primary">
                        <Icon icon="solar:play-linear" height="18"></Icon>
                    </v-avatar>
                </RouterLink>
            </div>
        </v-card-item>
    </v-card>
</template>
