<script setup lang="ts">
import { ref } from 'vue';
import QuickLinks from './QuickLinks.vue';
import { Icon } from '@iconify/vue';
import AppsLink from './AppsLink.vue';
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- mega menu DD -->
    <!-- ---------------------------------------------- -->
    <v-menu open-on-hover open-on-click >
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down custom-hover-primary"  size="small" variant="text" icon color="primary" v-bind="props">  <Icon icon="solar:widget-3-line-duotone"  height="20"   /> </v-btn>
        </template>
        <v-sheet width="900" height="382" elevation="10" rounded="md" class="pa-4 pb-0">
            <div>
                <v-row>
                    <v-col cols="12" md="8" class="d-flex py-0">
                        <div class="pa-4 pb-0 pr-0">
                            <AppsLink />
                            <v-divider class="mt-6"></v-divider>
                            <div class="pa-5 pl-0">
                                <div class="d-flex align-center justify-space-between">
                                   <NuxtLink to="/theme-pages/faq" class="text-decoration-none d-flex align-center">
                                        <HelpIcon size="20" stroke-width="1.5" class="text-hover-primary" />
                                        <h6 class="text-subtitle-1 font-weight-bold text-hover-primary ml-2">Frequently Asked Questions</h6>
                                    </NuxtLink>
                                    <v-btn color="primary" variant="flat">Check</v-btn>
                                </div>
                            </div>
                        </div>

                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12" md="4" class="py-0">
                        <div class="pa-4">
                            <h5 class="text-h5">Quick Links</h5>
                            <QuickLinks />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-sheet>
    </v-menu>
</template>
s