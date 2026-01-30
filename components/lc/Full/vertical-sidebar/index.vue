<script setup lang="ts">
import { onMounted, ref, shallowRef, computed } from 'vue';
import { useCustomizerStore } from '@/stores/customizer';
import sidebarItems from './sidebarItem';
import NavGroup from './NavGroup/index.vue';
import NavItem from './NavItem/index.vue';
import NavCollapse from './NavCollapse/index.vue';
import Logo from '../logo/LogoIcon.vue';
import { Icon } from '@iconify/vue';
import SidebarProfile from './sidebar-profile/index.vue';
import { useRoute, useRouter } from 'vue-router';
// MiniSidebar Icons
import MiniSideIcons from './MinIconItems';

const route = useRoute();

const findTitleByPath = (items: any, path: any) => {
    let title = '';

    for (const item of items) {
        if (item.to === path) {
            title = item.id;
            break;
        } else if (item.children) {
            for (const child of item.children) {
                if (child.to === path) {
                    title = item.id;
                    break;
                }
            }
        }
    }

    return title;
};
const foundId = findTitleByPath(sidebarItems, route.path);
const getCurrent = foundId ? foundId : 1;
const currentMenu = ref<any>(getCurrent);
function showData(data: any) {
    currentMenu.value = data;
}

// MiniSidebar Icons End
const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
    <!-- Minisidebar Icons -->
    <v-navigation-drawer class="border-e" v-model="customizer.Sidebar_drawer"  top="0" rail rail-width="80">
        <div class="pb-6 pt-7 px-4 text-center">
            <Logo />
        </div>
        <perfect-scrollbar class="miniscrollnavbar">
            <v-list-item class="px-0">
                <!-- Toggle Sidebar Button -->

                <div class="miniicons mt-lg-0 mt-4">
                    <!-- MiniSidebar Icons -->
                    <div class="d-flex flex-column gap-2">
                        <div class="miniicons-list px-4" v-for="menu in MiniSideIcons" :key="menu.icon">
                            <v-btn
                                rounded="pill"
                                flat
                                icon
                                variant="plain"
                                @click="showData(menu.id)"
                                :class="{ 'bg-lightprimary opacity-1 text-primary': currentMenu === menu.id }"
                            >
                                <Icon :icon="'solar:' + menu.icon" width="25" />
                                <!-- Tooltip on Hover -->
                                <v-tooltip activator="parent" location="end" class="custom-tooltip">{{ menu.tooltip }}</v-tooltip>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-list-item>

            <div class="userbottom px-4 bg-surface py-6">
                <SidebarProfile/>
            </div>
            
        </perfect-scrollbar>
    </v-navigation-drawer>

    <!-- LeftSidebar Items -->
    <v-navigation-drawer
        v-model="customizer.Sidebar_drawer"
        rail-width="1"
        app
        top="0"
        class="leftSidebar border-0"
        :rail="customizer.mini_sidebar"
        width="240"
    >
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar">
            <div class="px-4 py-0 sidebar-menus mt-3">
                <v-list class="py-1">
                    <template v-for="(item, i) in sidebarMenu">
                        <template v-if="currentMenu == item.id">
                            <!---Item Sub Header -->
                            <NavGroup :item="item" v-if="item.header" :key="item.title" />
                            <!---If Has Child -->
                            <template v-for="sItem in item.children">
                                <NavCollapse class="leftPadding" :item="sItem" :level="0" v-if="sItem.children" />
                                <NavItem :item="sItem" class="leftPadding" v-else />
                            </template>
                        </template>
                        <!---Single Item-->
                    </template>
                </v-list>
            </div>
        </perfect-scrollbar>
    </v-navigation-drawer>
</template>
