import type { Congratulation } from '@/types/components/dashboards/Analytics';
import type { Performance } from '@/types/components/dashboards/eCommerce';
import type { Transactions,RecentProjects,EarningReports } from '@/types/components/dashboards/Crm';

import icon1 from '/images/svgs/icon-netflix.svg';
import icon2 from '/images/svgs/icon-upwork.svg';

import user1 from '/images/profile/user-2.jpg';
import user2 from '/images/profile/user-3.jpg';
import user3 from '/images/profile/user-4.jpg';
import user4 from '/images/profile/user-5.jpg';
import user5 from '/images/profile/user-6.jpg';

import logo1 from '/images/svgs/icon-diamond.svg';
import logo2 from '/images/svgs/icon-figma.svg';
import logo3 from '/images/svgs/icon-react.svg';

const OverallBalance: Congratulation[] = [
    {
        icon: 'course-up-line-duotone',
        title: '$14,673',
        subtitle: 'Total Sales',
        color: 'warning'
    },
    {
        icon: 'dollar-minimalistic-line-duotone',
        title: '$9,281',
        subtitle: 'Total Profit',
        color: 'error'
    },
    {
        icon: 'flag-2-line-duotone',
        title: '45.1k',
        subtitle: 'Total Users',
        color: 'success'
    },
    {
        icon: 'pie-chart-line-duotone',
        title: '$4,673',
        subtitle: 'Total Expense',
        color: 'primary'
    }
];


/*--MarketingReport--*/
const MarketingReport: Performance[] = [
    {
        icon: 'course-up-line-duotone',
        title: '+2.9k',
        subtitle: 'Google Ads',
        color: 'hoverColor'
    },
    {
        icon: 'pie-chart-3-line-duotone',
        title: '1.22',
        subtitle: 'Return Ratio',
        color: 'hoverColor'
    },
    {
        icon: 'cursor-line-duotone',
        title: '0.83',
        subtitle: 'Clicks / search',
        color: 'hoverColor'
    },
    {
        icon: 'pie-chart-3-line-duotone',
        title: '41.2',
        subtitle: 'Return Ratio',
        color: 'hoverColor'
    }
];

const TransactionsData: Transactions[] = [
    {
        img: icon1,
        title: 'Netflix Subscription',        
        subtitle: 'Today, 09:23am',
        statuscolor: 'success',
        statustext: 'Approved',
        price:'- $4.58', 
        rank: '+5 Bonus',
        rankcolor:'error'
    },
    {
        img: icon2,
        title: 'Upwork',        
        subtitle: 'August 15, 10:35pm',
        statuscolor: 'warning',
        statustext: 'Pending',
        price:'+ $15.60', 
        rank: '+30 Bonus',
        rankcolor:'success'
    },
];


const RecentProjectsData: RecentProjects[] = [
    {
        logotext: 'PS',
        logotextcolor: 'primary',        
        logoimg:'',
        name: 'Photoshop',
        budgets: '$29,374.60',
        leader:'Erin', 
        chart:'success',
        teams: [
            {
                id: 1,
                user:user1,
                count:''
            },
            {
                id: 2,
                user:user2,
                count:''
            },
            {
                id: 3,
                user:user3,
                count:''
            },
            {
                id: 4,
                user:'',
                count:'+3'
            }
        ]
    },
    {
        logotext: '',
        logotextcolor: 'warning',        
        logoimg:logo1,
        name: 'Website SEO',
        budgets: '$1,843.73',
        leader:'Timothy', 
        chart:'error',
        teams: [
            {
                id: 1,
                user:user4,
                count:''
            },
            {
                id: 2,
                user:user5,
                count:''
            },
            {
                id: 3,
                user:user3,
                count:''
            },
            {
                id: 4,
                user:'',
                count:'+3'
            }
        ]
    },
    {
        logotext: 'WS',
        logotextcolor: 'success',        
        logoimg:'',
        name: 'iOS Mobile App Design',
        budgets: '$0.9989',
        leader:'Tyler', 
        chart:'primary',
        teams: [
            {
                id: 1,
                user:user1,
                count:''
            },
            {
                id: 2,
                user:user2,
                count:''
            },
            {
                id: 3,
                user:user3,
                count:''
            },
            {
                id: 4,
                user:'',
                count:'+3'
            }
        ]
    },
    {
        logotext: '',
        logotextcolor: 'secondary',        
        logoimg:logo2,
        name: 'Figma Components',
        budgets: '$238.61',
        leader:'Kristen', 
        chart:'warning',
        teams: [
            {
                id: 1,
                user:user5,
                count:''
            },
            {
                id: 2,
                user:user2,
                count:''
            },
            {
                id: 3,
                user:user1,
                count:''
            },
            {
                id: 4,
                user:'',
                count:'+3'
            }
        ]
    },
    {
        logotext: '',
        logotextcolor: 'primary',        
        logoimg:logo3,
        name: 'Web App Design',
        budgets: '$0.629',
        leader:'Isabelle', 
        chart:'success',
        teams: [
            {
                id: 1,
                user:user2,
                count:''
            },
            {
                id: 2,
                user:user1,
                count:''
            },
            {
                id: 3,
                user:user4,
                count:''
            },
            {
                id: 4,
                user:'',
                count:'+3'
            }
        ]
    },
];


/*--EarningReports--*/
const EarningReportsData: EarningReports[] = [
    {
        icon: 'card-line-duotone',
        title: 'Bank Transfer',
        subtitle: 'and +1 more',
        color: 'primary',
        statuscolor: 'success',
        statustext: '16.3%',
    },
    {
        icon: 'wallet-2-line-duotone',
        title: 'Net Profit',
        subtitle: 'and +4 more',
        color: 'error',
        statuscolor: 'success',
        statustext: '12.55%',
    },
    {
        icon: 'course-up-line-duotone',
        title: 'Total Income',
        subtitle: 'and +4 more',
        color: 'secondary',
        statuscolor: 'success',
        statustext: '12.55%',
    },
    {
        icon: 'waterdrops-line-duotone',
        title: 'Total Expenses',
        subtitle: 'and +2 more',
        color: 'info',
        statuscolor: 'success',
        statustext: '8.28%',
    },
   
];


export { OverallBalance,MarketingReport,TransactionsData,RecentProjectsData,EarningReportsData };
