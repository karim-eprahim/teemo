<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { UpcommingScheduleData,UpcommingScheduleShipData } from '@/_mockApis/components/dashboards/Analytics';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
const tab = ref(null);
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex justify-space-between align-center mb-mb-0 mb-3">
                <div>
                    <v-card-title class="text-h5 mb-1">Upcoming Schedules</v-card-title>
                    <v-card-subtitle class="text-body-1">Our corporate events</v-card-subtitle>
                </div>
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
            <v-tabs v-model="tab" bg-color="light" grow height="auto" class="rounded-pill pa-1 sales-profit">
                <v-tab value="Delivered" class="rounded-pill font-weight-semibold text-12">Delivered</v-tab>
                <v-tab value="Shipping" class="rounded-pill font-weight-semibold text-12">Shipping</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <!-- Delivered Tab -->
                <v-window-item value="Delivered">
                    <perfect-scrollbar style="height: 395px">
                        <div class="timeline-tabs">
                            <div class="mt-6 timeline-list" v-for="item in UpcommingScheduleData" :key="item.title">
                                <div class="d-flex justify-space-between align-center">
                                    <div class="d-flex gap-3 align-center">
                                        <v-avatar size="40" rounded="md" :color="item.iconBg">
                                            <Icon :icon="'solar:' + item.icon" class="text-white" height="25"></Icon>
                                        </v-avatar>
                                        <div>
                                            <p class="font-weight-medium textSecondary">{{ item.title }}</p>
                                            <h6 class="text-body-1">{{ item.code }}</h6>
                                        </div>
                                    </div>
                                    <v-chip rounded="pill" class="font-weight-medium" :color="item.statuscolor" size="small">{{
                                        item.statustext
                                    }}</v-chip>
                                </div>

                                <div class="mt-5 timeline" v-for="list in item.timeline" :key="list.id">
                                    <div class="d-flex gap-3 align-center mb-4">
                                        <div class="timeline-icon">
                                            <v-avatar size="40" rounded="full" class="border">
                                                <Icon
                                                    :icon="'solar:' + list.timelineIcon"
                                                    :class="'text-' + list.iconcolor"
                                                    height="25"
                                                ></Icon>
                                            </v-avatar>
                                        </div>
                                        <div>
                                            <p class="font-weight-medium textSecondary">{{ list.title }}</p>
                                            <h6 class="text-body-1">{{ list.country }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </v-window-item>
                <!-- Shipping Tab -->
                <v-window-item value="Shipping">
                    <perfect-scrollbar style="height: 395px">
                        <div class="timeline-tabs">
                            <div class="mt-6 timeline-list" v-for="item in UpcommingScheduleShipData" :key="item.title">
                                <div class="d-flex justify-space-between align-center">
                                    <div class="d-flex gap-3 align-center">
                                        <v-avatar size="40" rounded="md" :color="item.iconBg">
                                            <Icon :icon="'solar:' + item.icon" class="text-white" height="25"></Icon>
                                        </v-avatar>
                                        <div>
                                            <p class="font-weight-medium textSecondary">{{ item.title }}</p>
                                            <h6 class="text-body-1">{{ item.code }}</h6>
                                        </div>
                                    </div>
                                    <v-chip rounded="pill" class="font-weight-medium" :color="item.statuscolor" size="small">{{
                                        item.statustext
                                    }}</v-chip>
                                </div>

                                <div class="mt-5 timeline" v-for="list in item.timeline" :key="list.id">
                                    <div class="d-flex gap-3 align-center mb-4">
                                        <div class="timeline-icon">
                                            <v-avatar size="40" rounded="full" class="border">
                                                <Icon
                                                    :icon="'solar:' + list.timelineIcon"
                                                    :class="'text-' + list.iconcolor"
                                                    height="25"
                                                ></Icon>
                                            </v-avatar>
                                        </div>
                                        <div>
                                            <p class="font-weight-medium textSecondary">{{ list.title }}</p>
                                            <h6 class="text-body-1">{{ list.country }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </v-window-item>
            </v-window>
        </v-card-item>
    </v-card>
</template>
