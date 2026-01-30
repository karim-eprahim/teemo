<script setup lang="ts">
import { listFeature } from '@/_mockApis/landingpage/lpPage';
</script>
<template>
    <div class="py-sm-12 py-10 bg-light">
        <v-container>
            <div class="maxWidth">
                <v-row class="justify-center">
                    <v-col cols="12" sm="7">
                        <p
                            class="text-body-1 textSecondary text-center font-weight-medium"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            ALMOST COVERED EVERYTHING
                        </p>
                        <h2 class="sectionTitle text-center mt-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                            Other Amazing Features & Flexibility Provided
                        </h2>
                    </v-col>
                </v-row>
                <v-row class="mt-10">
                    <v-col cols="12" lg="3" md="4" sm="6" class="pl-sm-3 pr-sm-2 d-flex" v-for="list in listFeature" :key="list.title">
                        <v-card elevation="10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <v-card-item class="pa-6">
                                <div :class="'rounded-pill  px-5 d-inline-flex justify-center align-center py-2 bg-light' + list.bgcolor">
                                    <component :is="list.icon" stroke-width="1.5" size="30" :class="'text-' + list.bgcolor" />
                                </div>
                                <h4 class="text-h4 mt-6">{{ list.title }}</h4>
                                <p class="text-h6 textSecondary font-weight-medium lh-md mt-2">{{ list.subtitle }}</p>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

