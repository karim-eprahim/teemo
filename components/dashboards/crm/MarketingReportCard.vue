<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { MarketingReport } from '@/_mockApis/components/dashboards/Crm';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);

/* Chart */
const chartOptions = computed(() => {
    return {
        series: [20, 20, 20, 20, 20],
        labels: ['245', '45', '14', '78', '95'],
        chart: {
            height: 200,
            fontFamily: 'inherit',
            type: 'donut'
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                donut: {
                    size: '85%'
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
            width: 2,
            colors: 'rgba(var(--v-theme-surface))'
        },
        tooltip: {
            fillSeriesColor: false
        },
        colors: [
            'rgba(var(--v-theme-error))',
            'rgba(var(--v-theme-warning))',
            'rgba(var(--v-theme-lightwarning))',
            'rgba(var(--v-theme-lightsuccess))',
            'rgba(var(--v-theme-success))'
        ]
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
                    <div class="d-flex gap-3 align-center" v-for="item in MarketingReport" :key="item.title">
                        <div height="30" :class="'rounded-pill d-inline-flex px-4 py-2 align-center py-0 bg-' + item.color">
                            <Icon :icon="'solar:' + item.icon" width="25" height="25" class="text-muted" />
                        </div>
                        <div>
                            <p class="textSecondary">{{ item.subtitle }}</p>
                            <h4 class="heading text-h4">{{ item.title }}</h4>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6">
                    <div class="text-center">
                        <ClientOnly><apexchart type="donut" height="200" :options="chartOptions" :series="chartOptions.series"> </apexchart></ClientOnly>
                        <h2 class="text-h2 text-muted">275</h2>
                        <p class="mb-0 mt-3 text-body-2 text-muted">Learn insigs how to manage all aspects of your startup.</p>
                    </div>
                </v-col>
            </v-row>
            <div class="bg-hoverColor rounded-md px-4 py-6 d-flex justify-space-between align-center mt-8">
                <div class="d-flex gap-3 w-75">
                    <Icon icon="solar:plain-2-line-duotone" class="text-primary" height="45"></Icon>
                    <p class="textSecondary">Learn insigs how to manage all aspects of your startup.</p>
                </div>

                <RouterLink to="/">
                    <v-avatar size="40" color="primary">
                        <Icon icon="solar:play-linear" height="18"></Icon>
                    </v-avatar>
                </RouterLink>
            </div>
        </v-card-item>
    </v-card>
</template>
