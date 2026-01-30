<script setup lang="ts">
import { MailIcon } from 'vue-tabler-icons';
import { profileDD } from '@/_mockApis/headerData';
import { Icon } from '@iconify/vue';
</script>

<template>
    <v-menu open-on-click>
        <template v-slot:activator="{ props }">
            <v-btn variant="text" class="custom-hover-primary hover-border" color="primary" v-bind="props" icon>
                <v-avatar size="35">
                    <img src="/images/profile/user-1.jpg" width="35" alt="Julia" />
                </v-avatar>
            </v-btn>
        </template>

        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-8 pt-6">
                <h6 class="text-h5 font-weight-semibold">User Profile</h6>

                <div class="d-flex align-center mt-5 pb-6">
                    <v-avatar size="90">
                        <img src="/images/profile/user-1.jpg" width="90" />
                    </v-avatar>
                    <div class="ml-5">
                        <h6 class="text-h6">Jonathan Deo</h6>
                        <span class="text-subtitle-2 text-textSecondary">Admin</span>
                        <div class="d-flex align-center mt-1">
                            <MailIcon size="18" class="text-textSecondary" stroke-width="1.5" />
                            <span class="text-textSecondary ml-2">info@MaterialM.com</span>
                        </div>
                    </div>
                </div>
                <v-divider></v-divider>
            </div>
            <perfect-scrollbar style="height: calc(100vh - 240px); max-height: 240px">
                <v-list class="py-0 theme-list mt-3" lines="two">
                    <v-list-item v-for="item in profileDD" :key="item.title" class="py-3 px-8 custom-text-primary" :to="item.href">
                        <template v-slot:prepend>
                            <v-avatar size="45" class="rounded-md" :class="'bg-light' + item.bgcolor">
                                <Icon :icon="'solar:' + item.avatar" width="25" height="25" :class="'text-' + item.bgcolor" />
                            </v-avatar>
                        </template>
                        <div>
                            <h6 class="text-body-1 heading mb-1 custom-title">{{ item.title }}</h6>
                        </div>
                        <p class="text-body-2 font-weight-regular text-textSecondary">{{ item.subtitle }}</p>
                    </v-list-item>
                </v-list>
            </perfect-scrollbar>
            <div class="pb-6 px-8 text-center">
                <v-btn color="primary" size="large" rounded="pill" block to="/auth/login">Logout</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
