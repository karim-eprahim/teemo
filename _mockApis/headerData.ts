// project imports
import mock from './mockAdapter';

import type { notificationType, profileType, languageType, appsLinkType,searchType,inboxType, quickLinksType } from '@/types/HeaderTypes'
// 
// inbox
// 
import user1 from '/images/profile/user-6.jpg';
import user2 from '/images/profile/user-2.jpg';
import user3 from '/images/profile/user-3.jpg';
import user4 from '/images/profile/user-4.jpg';
import user5 from '/images/profile/user-5.jpg';
const notifications:notificationType[] = [
    {
        avatar: 'widget-3-line-duotone',
        color:'error',
        title: 'Launch Admin',
        subtitle: 'Just see the my new admin!',
        time:'9:30 AM'
    },
    {
        avatar: 'calendar-line-duotone',
        color:'primary',
        title: 'Event Today',
        subtitle: 'Just a reminder that you have event',
        time:'9:15 AM'
    },
    {
        avatar: 'settings-line-duotone',
        color:'secondary',
        title: 'Settings',
        subtitle: 'You can customize this template as you want',
        time:'4:36 PM'
    },
    {
        avatar: 'widget-4-line-duotone',
        color:'warning',
        title: 'Launch Admin',
        subtitle: 'Just see the my new admin!',
        time:'9:30 AM'
    },
    {
        avatar: 'calendar-line-duotone',
        color:'primary',
        title: 'Event Today',
        subtitle: 'Just a reminder that you have event',
        time:'9:15 AM'
    },
    {
        avatar: 'settings-line-duotone',
        color:'secondary',
        title: 'Settings',
        subtitle: 'You can customize this template as you want',
        time:'4:36 PM'
    },
];

const inboxData:inboxType[] = [
    {
        avatar: user1,
        color:'error',
        title: 'Michell Flintoff',
        subtitle: 'You: Yesterdy was great...',
        time:'just now'
    },
    {
        avatar: user2,
        color:'primary',
        title: 'Bianca Anderson',
        subtitle: 'Nice looking dress you...',
        time:'5 mins ago'
    },
    {
        avatar: user3,
        color:'success',
        title: 'Andrew Johnson',
        subtitle: 'Sent a photo',
        time:'10 mins ago'
    },
    {
        avatar: user4,
        color:'warning',
        title: 'Jolly Cummins',
        subtitle: 'If I don’t like something, I’ll stay away from it.',
        time:'days ago'
    },
    {
        avatar: user5,
        color:'success',
        title: 'Josh Macklow',
        subtitle: '$230 deducted from account',
        time:'year ago'
    }
];

// 
// Profile 
// 

const profileDD: profileType[] = [
    {
        avatar: 'wallet-2-line-duotone',
        bgcolor:'info',
        title: 'My Profile',
        subtitle: 'Account settings',
        href: '/apps/user/profile'
    },
    {
        avatar: 'shield-minimalistic-line-duotone',
        bgcolor:'success',
        title: 'My Notes',
        subtitle: 'My Daily Notes',
        href: '/apps/notes'
    },
    {
        avatar: 'card-2-line-duotone',
        bgcolor:'error',
        title: 'My Tasks',
        subtitle: 'To-do and Daily tasks',
        href: '/apps/kanban'
    }
];

// 
// Language
// 
import flag1 from '/images/flag/icon-flag-en.svg';
import flag2 from '/images/flag/icon-flag-fr.svg';
import flag3 from '/images/flag/icon-flag-ro.svg';
import flag4 from '/images/flag/icon-flag-zh.svg';
const languageDD: languageType[] = [
    { title: 'English', subtext: 'UK', value: 'en', avatar: flag1 },
    { title: 'français', subtext: 'French', value: 'fr', avatar: flag2 },
    { title: 'عربي', subtext: 'Arbic', value: 'ro', avatar: flag3 },
    { title: '中国人', subtext: 'Chinese', value: 'zh', avatar: flag4 }
];

import img1 from '/images/svgs/icon-dd-chat.svg';
import img2 from '/images/svgs/icon-dd-cart.svg';
import img3 from '/images/svgs/icon-dd-invoice.svg';
import img4 from '/images/svgs/icon-dd-date.svg';
import img5 from '/images/svgs/icon-dd-mobile.svg';
import img6 from '/images/svgs/icon-dd-lifebuoy.svg';
import img7 from '/images/svgs/icon-dd-message-box.svg';
import img8 from '/images/svgs/icon-dd-application.svg';
const appsLink: appsLinkType[] = [
    {
        avatar: img1,
        title: 'Chat Application',
        subtext: 'New messages arrived',
        href: '/apps/chats'
    },
    {
        avatar: img2,
        title: 'eCommerce App',
        subtext: 'learn more information',
        href: '/apps/ecommerce/products'
    },
    {
        avatar: img3,
        title: 'User Profile App',
        subtext: 'Get profile details',
        href: '/apps/user/profile'
    },
    {
        avatar: img4,
        title: 'Calendar App',
        subtext: 'Get dates',
        href: '/apps/calendar'
    },
    {
        avatar: img5,
        title: 'Contact Application',
        subtext: '2 Unsaved Contacts',
        href: '/apps/contacts'
    },
    {
        avatar: img6,
        title: 'Account Setting App',
        subtext: 'Account settings',
        href: '/theme-pages/account-settings'
    },
    {
        avatar: img7,
        title: 'Kanban App',
        subtext: 'Add the task',
        href: '/apps/kanban'
    },
    {
        avatar: img8,
        title: 'Notes Application',
        subtext: 'To-do and Daily tasks',
        href: '/apps/notes'
    }
];

// 
// Quick Links
// 
const quickLink: quickLinksType[] = [
    {
        title: 'Pricing Page',
        href: '/theme-pages/pricing'
    },
    {
        title: 'Authentication Design',
        href: '/auth/login'
    },
    {
        title: 'Register Now',
        href: '/auth/register'
    },
    {
        title: '404 Error Page',
        href: '/auth/error'
    },
    {
        title: 'Notes App',
        href: '/apps/notes'
    },
    {
        title: 'User Application',
        href: '/apps/user/profile'
    },
    {
        title: 'Blog Design',
        href: '/apps/blog/posts'
    },
    {
        title: 'Shopping Cart',
        href: '/apps/ecommerce/checkout'
    }
];


// 
// Search Data
// 
const searchSugg: searchType[] = [
    {
        title: 'Modern',
        href: '/dashboards/modern'
    },
    {
        title: 'eCommerce',
        href: '/dashboards/ecommerce'
    },
    {
        title: 'Contacts',
        href: '/apps/contacts'
    },
    {
        title: 'Shop',
        href: '/apps/ecommerce/shop'
    },
    {
        title: 'Checkout',
        href: '/apps/ecommerce/checkout'
    },
    {
        title: 'Chats',
        href: '/apps/chats'
    },
    {
        title: 'Notes',
        href: '/apps/notes'
    },
    {
        title: 'Pricing',
        href: '/theme-pages/pricing'
    },
    {
        title: 'Account Setting',
        href: '/theme-pages/account-settings'
    },
];

export { notifications, profileDD, languageDD, appsLink, searchSugg,inboxData, quickLink };

