<script setup lang="ts">
import { ref,onMounted } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';
import PhotosCard from '@/components/apps/user-profile/PhotosCard.vue';
import PostListing from '@/components/apps/user-profile/PostListing.vue';
import AddPost from '@/components/apps/user-profile/posts/AddPost.vue';
import { useUserStore } from "@/stores/apps/user/auth";
const userStore = useUserStore();


const page = ref({ title: 'User Profile' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'User Profile',
        disabled: true,
        href: '#'
    }
]);
const userData = userStore.$state.userData
console.log("userData",userData)
// onMounted(()=>{

// })
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <ProfileBanner :userData="userData" />
    <v-row class="mt-4">
        <v-col cols="12">
            <IntroCard :userData="userData"/>
            <!-- <PhotosCard /> -->
        </v-col>
        <!-- <v-col cols="12" lg="8" md="8">
            <AddPost />
            <PostListing />
        </v-col> -->
    </v-row>
</template>
