<script setup lang="ts">
import { ref, computed } from 'vue';
import { RecentProjectsData } from '@/_mockApis/components/dashboards/Crm';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
const tab = ref(null);

/* Chart */
const chartOptionssuccess = computed(() => {
    return {
        chart: {
            type: 'area',
            width: 143,
            height: 14,
            sparkline: {
                enabled: true
            },
            group: 'table-chart',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        series: [
            {
                color: 'rgba(var(--v-theme-success))',
                data: [25, 66, 20, 40, 12, 58, 20]
            }
        ],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180]
            }
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const chartOptionserror = computed(() => {
    return {
        chart: {
            type: 'area',
            width: 143,
            height: 14,
            sparkline: {
                enabled: true
            },
            group: 'table-chart',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        series: [
            {
                color: 'rgba(var(--v-theme-error))',
                data: [25, 66, 20, 40, 12, 58, 20]
            }
        ],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180]
            }
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const chartOptionsprimary = computed(() => {
    return {
        chart: {
            type: 'area',
            width: 143,
            height: 14,
            sparkline: {
                enabled: true
            },
            group: 'table-chart',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        series: [
            {
                color: 'rgba(var(--v-theme-primary))',
                data: [25, 66, 20, 40, 12, 58, 20]
            }
        ],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180]
            }
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const chartOptionswarning = computed(() => {
    return {
        chart: {
            type: 'area',
            width: 143,
            height: 14,
            sparkline: {
                enabled: true
            },
            group: 'table-chart',
            fontFamily: 'inherit',
            foreColor: '#adb0bb'
        },
        series: [
            {
                color: 'rgba(var(--v-theme-warning))',
                data: [25, 66, 20, 40, 12, 58, 20]
            }
        ],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180]
            }
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-sm-flex justify-space-between align-center mb-mb-0 mb-3">
                <v-card-title class="text-h5 mb-md-0 mb-6">Recent Projects</v-card-title>

                <div class="d-flex gap-3">
                    <v-tabs
                        v-model="tab"
                        bg-color="hoverColor"
                        color="textPrimary"
                        grow
                        height="auto"
                        class="rounded-pill pa-1 sales-profit"
                    >
                        <v-tab value="Sass" class="rounded-pill text-12 textSecondary">Sass</v-tab>
                        <v-tab value="Mobile" class="rounded-pill text-12 textSecondary">Mobile</v-tab>
                        <v-tab value="Others" class="rounded-pill text-12 textSecondary">Others</v-tab>
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
                <v-window-item value="Sass">
                    <v-table class="revenue-table border-table-no-hover">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-h6 font-weight-semibold"><span class="ps-2">#</span></th>
                                    <th class="text-h6 font-weight-semibold">Name</th>
                                    <th class="text-h6 font-weight-semibold">Budget</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Activity Log</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in RecentProjectsData" :key="item.name" class="month-item">
                                    <td class="pl-0">
                                        <v-checkbox color="primary" density="compact" hide-details></v-checkbox>
                                    </td>
                                    <td>
                                        <div class="d-flex ga-7 align-center">
                                            <div>
                                                <div
                                                    :class="
                                                        'rounded-pill rounded-circle-shape d-flex justify-center align-center py-0 bg-light' +
                                                        item.logotextcolor
                                                    "
                                                >
                                                    <p
                                                        v-if="item.logotext"
                                                        :class="'text-body-1 font-weight-bold text-' + item.logotextcolor"
                                                    >
                                                        {{ item.logotext }}
                                                    </p>
                                                    <img v-if="item.logoimg" :src="item.logoimg" alt="profile" height="20" />
                                                </div>
                                            </div>

                                            <div>
                                                <h6 class="text-h6 font-weight-semibold">{{ item.name }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 font-weight-semibold">{{ item.budgets }}</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-center">
                                            <div class="ml-2 d-flex">
                                                <v-avatar
                                                    v-for="team in item.teams"
                                                    :key="team.id"
                                                    size="30"
                                                    class="ml-n2 avtar-border bg-lightprimary"
                                                >
                                                    <img v-if="team.user" :src="team.user" alt="avatar" height="30" />
                                                    <span v-if="team.count" class="text-12 font-weight-semibold">{{ team.count }}</span>
                                                </v-avatar>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 textSecondary">{{ item.leader }}</p>
                                    </td>
                                    <td>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'success'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionssuccess"
                                            :series="chartOptionssuccess.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'primary'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionsprimary"
                                            :series="chartOptionsprimary.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'warning'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionswarning"
                                            :series="chartOptionswarning.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'error'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionserror"
                                            :series="chartOptionserror.series"
                                        >
                                        </apexchart></ClientOnly>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-table>
                </v-window-item>
                <v-window-item value="Mobile">
                    <v-table class="revenue-table border-table-no-hover">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-h6 font-weight-semibold"><span class="ps-2">#</span></th>
                                    <th class="text-h6 font-weight-semibold">Name</th>
                                    <th class="text-h6 font-weight-semibold">Budget</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Activity Log</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in RecentProjectsData.slice(0, 3)" :key="item.name" class="month-item">
                                    <td class="pl-0">
                                        <v-checkbox color="primary" density="compact" hide-details></v-checkbox>
                                    </td>
                                    <td>
                                        <div class="d-flex ga-7 align-center">
                                            <div>
                                                <div
                                                    height="30"
                                                    :class="
                                                        'rounded-pill rounded-circle-shape d-inline-flex justify-center align-center py-0 bg-light' +
                                                        item.logotextcolor
                                                    "
                                                >
                                                    <p
                                                        v-if="item.logotext"
                                                        :class="'text-body-1 font-weight-bold text-' + item.logotextcolor"
                                                    >
                                                        {{ item.logotext }}
                                                    </p>
                                                    <img v-if="item.logoimg" :src="item.logoimg" alt="profile" height="20" />
                                                </div>
                                            </div>

                                            <div>
                                                <h6 class="text-h6 font-weight-semibold">{{ item.name }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 font-weight-semibold">{{ item.budgets }}</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-center">
                                            <div class="ml-2 d-flex">
                                                <v-avatar
                                                    v-for="team in item.teams"
                                                    :key="team.id"
                                                    size="30"
                                                    class="ml-n2 avtar-border bg-lightprimary"
                                                >
                                                    <img v-if="team.user" :src="team.user" alt="avatar" height="30" />
                                                    <span v-if="team.count" class="text-12 font-weight-semibold">{{ team.count }}</span>
                                                </v-avatar>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 textSecondary">{{ item.leader }}</p>
                                    </td>
                                    <td>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'success'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionssuccess"
                                            :series="chartOptionssuccess.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'primary'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionsprimary"
                                            :series="chartOptionsprimary.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'warning'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionswarning"
                                            :series="chartOptionswarning.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'error'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionserror"
                                            :series="chartOptionserror.series"
                                        >
                                        </apexchart></ClientOnly>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-table>
                </v-window-item>
                <v-window-item value="Others">
                    <v-table class="revenue-table border-table-no-hover">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-h6 font-weight-semibold"><span class="ps-2">#</span></th>
                                    <th class="text-h6 font-weight-semibold">Name</th>
                                    <th class="text-h6 font-weight-semibold">Budget</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Team</th>
                                    <th class="text-h6 font-weight-semibold">Activity Log</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in RecentProjectsData.slice(0, 2)" :key="item.name" class="month-item">
                                    <td class="pl-0">
                                        <v-checkbox color="primary" density="compact" hide-details></v-checkbox>
                                    </td>
                                    <td>
                                        <div class="d-flex ga-7 align-center">
                                            <div>
                                                <div
                                                    :class="
                                                        'rounded-pill rounded-circle-shape d-flex justify-center align-center py-0 bg-light' +
                                                        item.logotextcolor
                                                    "
                                                >
                                                    <p
                                                        v-if="item.logotext"
                                                        :class="'text-body-1 font-weight-bold text-' + item.logotextcolor"
                                                    >
                                                        {{ item.logotext }}
                                                    </p>
                                                    <img v-if="item.logoimg" :src="item.logoimg" alt="profile" height="20" />
                                                </div>
                                            </div>

                                            <div>
                                                <h6 class="text-h6 font-weight-semibold">{{ item.name }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 font-weight-semibold">{{ item.budgets }}</p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-center">
                                            <div class="ml-2 d-flex">
                                                <v-avatar
                                                    v-for="team in item.teams"
                                                    :key="team.id"
                                                    size="30"
                                                    class="ml-n2 avtar-border bg-lightprimary"
                                                >
                                                    <img v-if="team.user" :src="team.user" alt="avatar" height="30" />
                                                    <span v-if="team.count" class="text-12 font-weight-semibold">{{ team.count }}</span>
                                                </v-avatar>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-body-1 textSecondary">{{ item.leader }}</p>
                                    </td>
                                    <td>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'success'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionssuccess"
                                            :series="chartOptionssuccess.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'primary'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionsprimary"
                                            :series="chartOptionsprimary.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'warning'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionswarning"
                                            :series="chartOptionswarning.series"
                                        >
                                        </apexchart></ClientOnly>
                                        <ClientOnly><apexchart
                                            v-if="item.chart == 'error'"
                                            type="area"
                                            height="14"
                                            width="143"
                                            :options="chartOptionserror"
                                            :series="chartOptionserror.series"
                                        >
                                        </apexchart></ClientOnly>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-table>
                </v-window-item>
            </v-window>
        </v-card-item>
    </v-card>
</template>
