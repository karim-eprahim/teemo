<script setup lang="ts">
import OverallBalance from '@/components/dashboards/crm/OverallBalance.vue';
import Investment from '@/components/dashboards/crm/Investment.vue';
import TotalFollowers from '@/components/dashboards/crm/TotalFollowers.vue';
import TotalIncome from '@/components/dashboards/crm/TotalIncome.vue';
import CurrentBalance from '@/components/dashboards/crm/CurrentBalance.vue';
import MarketingReportCard from '@/components/dashboards/crm/MarketingReportCard.vue';
import PaymentMethods from '@/components/dashboards/crm/PaymentMethods.vue';
import RecentProjects from '@/components/dashboards/crm/RecentProjects.vue'
import DeliveryAnalytics from '@/components/dashboards/crm/DeliveryAnalytics.vue';
import EarningReports from '@/components/dashboards/crm/EarningReports.vue';
</script>
<template>
    <v-row>
        <v-col cols="12" md="8">
            <OverallBalance/>        
        </v-col>
        <v-col cols="12" md="4">
            <Investment/>
        </v-col>
        <v-col cols="12" md="4">
            <TotalFollowers/>
        </v-col>
        <v-col cols="12" md="4">
            <TotalIncome/>
        </v-col>
        <v-col cols="12" md="4">
            <CurrentBalance/>
        </v-col>
        <v-col cols="12" lg="5">
           <MarketingReportCard/>
        </v-col>
        <v-col cols="12" lg="7">
            <PaymentMethods/>
        </v-col>
        <v-col cols="12">
            <RecentProjects/>
        </v-col>
        <v-col cols="12" lg="8">
            <DeliveryAnalytics/>
        </v-col>
        <v-col cols="12" lg="4">
           <EarningReports/>
        </v-col>
    </v-row>
</template>
