<script setup lang="ts">
import { ref } from 'vue';
import { LatestReviewData, tableActionData } from '@/_mockApis/components/dashboards/Analytics';
import { Icon } from '@iconify/vue';
const items = ref([{ title: 'Action' }, { title: 'Another action' }, { title: 'Something else here' }]);
const page = ref(1);
</script>
<template>
    <VCard elevation="10">
        <v-card-item class="px-0">
           
            <div class="d-sm-flex d-block justify-space-between d-block align-center mb-4 px-6">
                <div>
                    <v-card-title class="text-h5 mb-1">Latest reviews</v-card-title>
                    <v-card-subtitle class="text-body-1">Reviewed received across all channels</v-card-subtitle>
                </div>
                <div class="text-right my-sm-0 my-3">
                    <div class="d-flex align-center">
                        <div class="mr-3 v-field-rounded-pill">
                            <v-text-field
                                placeholder="Search"
                                color="primary"
                                density="compact"
                                variant="outlined"
                                hide-details
                                style="min-width: 230px"
                            >
                                <Icon icon="solar:magnifer-line-duotone" height="20" class="mr-3"></Icon>
                            </v-text-field>
                        </div>
                        <v-btn size="40" variant="outlined" rounded="md" color="borderColor" class="px-7">
                            <v-avatar size="22">
                                <DotsVerticalIcon size="20" color="grey100" />
                            </v-avatar>
                            <v-menu activator="parent">
                                <v-list elevation="10">
                                    <v-list-item
                                        value="action"
                                        v-for="list in tableActionData"
                                        :key="list.listtitle"
                                        hide-details
                                        min-height="38"
                                    >
                                        <v-list-item-title>
                                            <v-avatar size="20" class="mr-2">
                                                <component :is="list.icon" stroke-width="2" size="20" />
                                            </v-avatar>
                                            {{ list.listtitle }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </div>
                </div>
            </div>

                <v-table class="revenue-table border-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-h6 font-weight-semibold">
                                   #
                                </th>
                                <th class="text-h6 font-weight-semibold">Customer</th>
                                <th class="text-h6 font-weight-semibold">Reviews</th>
                                <th class="text-h6 font-weight-semibold">Time</th>
                                <th class="text-h6 font-weight-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in LatestReviewData" :key="item.customername" class="month-item">
                                <td class="pl-0 ">
                                    <v-checkbox color="primary" class="ms-n2" density="compact" hide-details></v-checkbox>
                                </td>
                                <td>
                                    <div class="d-flex align-center">
                                        <v-avatar size="32" class="mr-3">
                                            <img :src="item.profile" alt="profile" height="32" width="32" />
                                        </v-avatar>
                                        <div>
                                            <h6 class="text-h6 font-weight-semibold">{{ item.customername }}</h6>
                                            <div class="text-body-1 textSecondary">{{ item.customeremail }}</div>
                                            <div class="ml-n1">
                                                <ClientOnly><v-rating
                                                    v-model="item.review"
                                                    hover
                                                    density="compact"
                                                    half-increments
                                                    readonly
                                                    size="small"
                                                    color="warning"
                                                ></v-rating></ClientOnly>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-body-1 textSecondary truncate-2">{{ item.reviewtext }}</p>
                                </td>
                                <td>
                                    <p class="text-body-1 textSecondary">{{ item.time }}</p>
                                </td>
                                <td class="text-right">
                                    <v-btn size="30" icon variant="flat" class="grey100">
                                        <v-avatar size="22">
                                            <DotsVerticalIcon size="20" color="grey100" />
                                        </v-avatar>
                                        <v-menu activator="parent">
                                            <v-list elevation="10">
                                                <v-list-item
                                                    value="action"
                                                    v-for="list in tableActionData"
                                                    :key="list.listtitle"
                                                    hide-details
                                                    min-height="38"
                                                >
                                                    <v-list-item-title>
                                                        <v-avatar size="20" class="mr-2">
                                                            <component :is="list.icon" stroke-width="2" size="20" />
                                                        </v-avatar>
                                                        {{ list.listtitle }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
          
            <v-divider></v-divider>
            <div class="d-flex align-center justify-space-between pt-5 px-6">
                <div class="text-body-1 textSecondary text-sm-left text-center mb-sm-0 mb-2">1-6 of 32</div>
                <v-btn flat color="primary" size="large">View All Reviews</v-btn>
            </div>
        </v-card-item>
    </VCard>
</template>
