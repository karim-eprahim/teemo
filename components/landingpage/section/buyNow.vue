<script setup lang="ts">
</script>
<template>
    <div class="pt-8 bg-background overflow-hidden">
        <v-container class="maxWidth">
            <v-card elevation="0" class="bg-textPrimary buynow build-app position-realtive overflow-visible">
                <v-card-item class="px-md-11 py-15">
                    <v-row class="justify-space-between">
                        <v-col cols="12" md="6" class="text-md-left text-center">
                            <h2 class="text-h1 text-white lh-normal">Haven't found an answer to your question?</h2>
                            <div class="d-flex justify-md-start justify-center mt-4">
                                <span class="text-h5 text-white font-weight-regular opacity-80 pt-2">Connect with us either on discord or email us</span>
                            </div>

                            <div class="mt-6 d-sm-flex justify-md-start justify-center gap-3">
                                <v-btn
                                    href="https://discord.com/invite/eMzE8F6Wqs"
                                    target="_blank"
                                    color="primary"
                                    size="large"
                                    class="m-btn-full px-6"
                                    rounded="pill"
                                    >Ask on Discord</v-btn
                                >
                                <v-btn
                                    href="https://support.wrappixel.com/"
                                    target="_blank"
                                    variant="outlined"
                                    rounded="pill"
                                    color="surface"
                                    class="m-btn-full px-6 mt-sm-0 mt-4"
                                    size="large"
                                    >Submit ticket</v-btn
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-container>
    </div>
</template>
