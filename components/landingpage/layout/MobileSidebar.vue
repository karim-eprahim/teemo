<script setup lang="ts">

import { demosMegamenu, appsMegamenu, FrontPageMenu } from '@/_mockApis/landingpage/lpPage';
import { useCustomizerStore } from '@/stores/customizer';
import Logo from '@/components/lc/Full/logo/LogoIcon.vue';
import { RouterLink } from 'vue-router';
import AppsLink from '@/components/lc/Full/vertical-header/AppsLink.vue';
const customizer = useCustomizerStore();
</script>

<template>
    <div class="pt-6">
        <div class="ml-7 mb-3">
            <div>
                <Logo />
            </div>
        </div>
        <div class="px-3 mobile-lp-demos">
            <v-list class="right-sidebar py-0 px-2">
                <v-list-group value="Apps">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" rounded="pill" color="primary">
                            <h5 class="text-subtitle-1">Demos</h5>
                        </v-list-item>
                    </template>
                    <v-list-item class="px-6 pb-6 lp_wrapper" >
                        <div class="mt-4">
                            <h5 class="text-h5">Different Demos</h5>
                            <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
                            <v-row class="mt-3">
                                <v-col cols="12" lg="12" v-for="demo in demosMegamenu" :key="demo.img">
                                    <div class="text-center position-relative">
                                        <div class="overflow-hidden rounded-md">
                                            <div class="megamenu">
                                                <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                                <v-btn
                                                    class="bg-primary text-white position-absolute mx-12 pr-3"
                                                    flat
                                                    target="_blank"
                                                    :href="demo.link"
                                                    >Live Preview</v-btn
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                                </v-col>
                            </v-row>
                            <div class="mt-8">
                                <h5 class="text-h5">Different Apps</h5>
                                <v-row class="mt-3">
                                    <v-col cols="12" v-for="demo in appsMegamenu" :key="demo.img">
                                        <div class="text-center position-relative">
                                            <div class="overflow-hidden rounded-md">
                                                <div class="megamenu">
                                                    <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                                    <v-btn
                                                        class="bg-primary text-white position-absolute mx-12 pr-3"
                                                        flat
                                                        target="_blank"
                                                        :href="demo.link"
                                                        >Live Preview</v-btn
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-list class="right-sidebar py-0 px-2">
                <v-list-group value="Apps">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" rounded="pill" color="primary">
                            <h5 class="text-subtitle-1">Frontend Pages</h5>
                        </v-list-item>
                    </template>
                    <v-list-item class="px-6 pb-6 lp_wrapper">
                        <div class="mt-4">
                            <h5 class="text-h5">Different Front Pages</h5>
                            <h6 class="text-subtitle-1 mt-1">Included with the package</h6>
                            <v-row class="mt-3">
                                <v-col cols="12" lg="12" v-for="demo in FrontPageMenu.slice(0, 5)" :key="demo.img">
                                    <div class="text-center position-relative">
                                        <div class="overflow-hidden rounded-md">
                                            <div class="megamenu">
                                                <img :src="demo.img" :alt="demo.img" class="w-100 rounded-md" />
                                                <v-btn
                                                    class="bg-primary text-white position-absolute mx-12 pr-3"
                                                    flat
                                                    target="_blank"
                                                    :href="demo.link"
                                                    >Live Preview</v-btn
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-body-1 text-center mt-1">{{ demo.name }}</p>
                                </v-col>
                            </v-row>
                        </div>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-list class="right-sidebar py-0 px-2">
                <v-list-group value="Apps">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" rounded="pill" color="primary">
                            <h5 class="text-subtitle-1">Pages</h5>
                        </v-list-item>
                    </template>
                    <v-list-item class="pl-6 pb-6">
                        <div class="mt-4">
                            <AppsLink />
                        </div>
                        <div class="mt-8">
                            <h5 class="text-h5 mb-3">Quick Links</h5>
                            <!-- <QuickLinks /> -->
                        </div>
                    </v-list-item>
                </v-list-group>
            </v-list>
            <v-list class="py-0 px-2">
                <v-list-item rounded="pill" color="primary">
                    <a
                 
                        class="textPrimary px-0 text-left text-decoration-none "
                        flat
                        href=""
                        target="_blank"
                    >
                        <h5 class="text-subtitle-1">Documentation</h5>
                </a>
                </v-list-item>
                <v-list-item class="mt-2" rounded="md">
                    <v-btn class="custom-hover-primary bg-primary" block flat href="/auth/login" target="_blank">Login</v-btn>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
