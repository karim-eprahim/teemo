<script setup lang="ts">
import Congratultion from '@/components/dashboards/analytics/Congratulation.vue';
import LatestDeal from '@/components/dashboards/analytics/LatestDeal.vue';
import Customers from '@/components/dashboards/analytics/Customers.vue';
import PaymentCard from '@/components/dashboards/analytics/PaymentsCard.vue';
import ProductCard from '@/components/dashboards/analytics/ProductCard.vue';
import PopularProducts from '@/components/dashboards/analytics/PopularProducts.vue';
import UpcommingSchedule from '@/components/dashboards/analytics/UpcommingSchedule.vue';
import LatestReviews from '@/components/dashboards/analytics/LatestReviews.vue';
import SalesFromLocation from '@/components/dashboards/analytics/SalesFromLocation.vue';

</script>
<template>
    <v-row>
        <v-col cols="12">
            <Congratultion/>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
            <LatestDeal/>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
            <Customers/>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
            <PaymentCard/>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
            <ProductCard/>
        </v-col>
        <v-col cols="12" lg="8">
            <PopularProducts/>
        </v-col>
        <v-col cols="12" lg="4">
            <UpcommingSchedule/>
        </v-col>
        <v-col cols="12" md="8" >
            <LatestReviews/>
        </v-col>
        <v-col cols="12" md="4" >
            <SalesFromLocation/>
        </v-col>
    </v-row>
</template>
