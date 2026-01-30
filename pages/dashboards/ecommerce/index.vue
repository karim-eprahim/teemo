<script setup lang="ts">
import SnackBar from '@/components/dashboards/SnackBar.vue';
import WelcomCard from '@/components/dashboards/eCommerce/WelcomeCard.vue';
import SmallCards from '@/components/dashboards/eCommerce/SmallCards.vue';
import SalesProfit from '@/components/dashboards/eCommerce/SalesProfit.vue';
import ProductSales from '@/components/dashboards/eCommerce/ProductSales.vue';
import MarketingReport from '@/components/dashboards/eCommerce/MarketingReport.vue';
import Payments from '@/components/dashboards/eCommerce/Payments.vue';
import AnnualProfit from '@/components/dashboards/eCommerce/AnnualProfit.vue';
import TopPerformance from '@/components/dashboards/eCommerce/TopPerformance.vue';
import RecentTransaction  from '@/components/dashboards/eCommerce/RecentTransaction.vue';
</script>
<template>
    <!-- Loader -->
    <SnackBar />
    <!-- Loader -->
    <v-row>
        <v-col cols="12" lg="6">
            <WelcomCard />
        </v-col>
        <v-col cols="12" lg="6">
            <SmallCards />
        </v-col>
        <v-col cols="12" md="8">
            <SalesProfit />
        </v-col>
        <v-col cols="12" md="4">
            <ProductSales />
        </v-col>
        <v-col cols="12" md="5">
            <MarketingReport />
        </v-col>
        <v-col cols="12" md="3">
            <Payments />
        </v-col>
        <v-col cols="12" md="4">
            <AnnualProfit />
        </v-col>
        <v-col cols="12" md="8">
            <TopPerformance/>
        </v-col>
        <v-col cols="12" md="4">
            <RecentTransaction/>
        </v-col>
    </v-row>
</template>
