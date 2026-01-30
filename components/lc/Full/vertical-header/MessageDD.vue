<script setup lang="ts">
import { inboxData } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
</script>
<template>
    <!-- ---------------------------------------------- -->
    <!-- Message DD -->
    <!-- ---------------------------------------------- -->
    <v-menu open-on-hover open-on-click>
        <template v-slot:activator="{ props }">
            <v-btn icon class="custom-hover-primary" size="small" variant="text" color="primary" v-bind="props">
                <v-badge color="primary" dot>
                    <Icon icon="solar:inbox-line-line-duotone" height="22" />
                </v-badge>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-6 pt-6 pb-4">
                <div class="d-flex align-center justify-space-between">
                    <h6 class="text-h5">Inbox</h6>
                    <v-chip color="warning" variant="flat" size="small" class="text-white">3 New</v-chip>
                </div>
            </div>
            <perfect-scrollbar style="height: 350px">
                <v-list class="py-0 theme-list inbox" lines="two">
                    <v-list-item
                        v-for="item in inboxData"
                        :key="item.title"
                        :value="item"
                        color="primary" 
                        class="py-3 px-6 custom-text-primary"
                    >
                        <template v-slot:prepend>
                            <v-badge :color="item.color" dot >
                                <v-avatar size="45">
                                    <v-img :src="item.avatar" width="45" :alt="item.avatar" />
                                </v-avatar>
                            </v-badge>
                        </template>

                        <div class="d-flex justify-space-between">
                            <h6 class="text-body-1 heading mb-1 custom-title">{{ item.title }}</h6>
                            <p class="text-subtitle-2 textSecondary text-no-wrap">{{ item.time }}</p>
                        </div>
                        <p class="text-subtitle-2 font-weight-regular textSecondary truncate">{{ item.subtitle }}</p>
                    </v-list-item>
                </v-list>
            </perfect-scrollbar>
            <div class="py-4 px-6 text-center">
                <v-btn color="primary" variant="outlined" size="large" block>See all Messages</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
