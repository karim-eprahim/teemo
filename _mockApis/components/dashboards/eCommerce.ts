import type { textCards, Performance, PerformanceTable,RecentTransaction } from '@/types/components/dashboards/eCommerce';
import shape1 from '/images/shapes/danger-card-shape.png';
import shape2 from '/images/shapes/secondary-card-shape.png';
import shape3 from '/images//shapes/success-card-shape.png';

import product1 from '/images/svgs/icon-materialM.svg';
import product2 from '/images/svgs/icon-matdash.svg';
import product3 from '/images/svgs/icon-spike.svg';
import product4 from '/images/svgs/icon-modernize.svg';
import product5 from '/images/svgs/icon-materialpro.svg';

import techicon1 from '/images/svgs/icon-photoshop.svg';
import techicon2 from '/images/svgs/icon-figma.svg';
import techicon3 from '/images/svgs/icon-vue.svg';
import techicon4 from '/images/svgs/icon-xd.svg';
import techicon5 from '/images/svgs/icon-bootstrap.svg';
import techicon6 from '/images/svgs/icon-angular.svg';
import techicon7 from '/images/svgs/icon-nextjs.svg';
import techicon8 from '/images/svgs/icon-javascript.svg';

// Recent Transaction
import icon1 from "/images/svgs/icon-paypal.svg";
import icon2 from "/images/svgs/icon-office-bag.svg";
import icon3 from "/images/svgs/icon-master-card.svg";
import icon4 from "/images/svgs/icon-money.svg";
import icon5 from "/images/svgs/icon-pie.svg";

const textCardsData: textCards[] = [
    {
        icon: 'pie-chart-2-broken',
        num: '2358',
        percent: '+23%',
        title: 'Sales',
        shape: shape1,
        bgcolor: 'error'
    },
    {
        icon: 'refresh-circle-line-duotone',
        num: '434',
        percent: '-12%',
        title: 'Refunds',
        shape: shape2,
        bgcolor: 'secondary'
    },
    {
        icon: 'dollar-minimalistic-linear',
        num: '$245k',
        percent: '+8%',
        title: 'Earnings',
        shape: shape3,
        bgcolor: 'success'
    }
];

/*--Performance--*/
const PerformanceData: Performance[] = [
    {
        icon: 'course-up-line-duotone',
        title: '+2.9k',
        subtitle: 'Google Ads',
        color: 'error'
    },
    {
        icon: 'cursor-line-duotone',
        title: '1.22',
        subtitle: 'Referral',
        color: 'success'
    },
    {
        icon: 'pie-chart-3-line-duotone',
        title: '24.3K',
        subtitle: 'Oraganic',
        color: 'primary'
    }
];

/*--Revenue Projects --*/
const PerformanceTableData: PerformanceTable[] = [
    {
        imgBg: 'lightprimary',
        img: product1,
        leadname: 'MaterialM - Admin',
        subtext: 'Dashboard Template',
        statustext: 'Mobile',
        statuscolor: 'primary',
        sales: '2,350',
        earnings: '$24,235',
        techicon: [
            {
                id: 1,
                icon: techicon1
            }
        ],
        technology: []
    },
    {
        imgBg: 'lightsecondary',
        img: product2,
        leadname: 'MatDash - Admin',
        subtext: 'Dashboard Template',
        statustext: 'Web App',
        statuscolor: 'success',
        sales: '1,630',
        earnings: '$13,699',
        techicon: [
            {
                id: 1,
                icon: techicon2
            },
            {
                id: 2,
                icon: techicon3
            }
        ],
        technology: []
    },
    {
        imgBg: 'lightsuccess',
        img: product3,
        leadname: 'Spike - Admin',
        subtext: 'Dashboard Template',
        statustext: 'Website',
        statuscolor: 'info',
        sales: '480',
        earnings: '$13,699',
        techicon: [
            {
                id: 1,
                icon: techicon4
            },
            {
                id: 2,
                icon: techicon5
            }
        ],
        technology: []
    },
    {
        imgBg: 'lightwarning',
        img: product4,
        leadname: 'Modernize - Admin',
        subtext: 'Dashboard Template',
        statustext: 'Marketing',
        statuscolor: 'success',
        sales: '874',
        earnings: '$10,250',
        techicon: [
            {
                id: 1,
                icon: techicon6
            },
        ],
        technology: []
    },
    {
        imgBg: 'lighterror',
        img: product5,
        leadname: 'MaterialPro - Admin',
        subtext: 'Dashboard Template',
        statustext: 'SSM',
        statuscolor: 'warning',
        sales: '3715',
        earnings: '$36,400',
        techicon: [
            {
                id: 1,
                icon: techicon7
            },
            {
                id: 2,
                icon: techicon8
            },
        ],
        technology: []
    }
];




/*--Payment gateways--*/
const RecentTransactionData : RecentTransaction[] = [
  {
      img: icon1,
      title:'PayPal Transfer',
      subtitle:'Money added',
      rank:'+$6,235',
      disable:'',
      bgcolor:"secondary",
    },
    {
      img: icon2,
      title:'Wallet',
      subtitle:'Bill payment',
      rank:'+$345',
      disable:'emphasis',
      bgcolor:"success",
    },
    {
      img: icon3,
      title:'Credit Card',
      subtitle:'Money reversed',
      rank:'+$2,235',
      disable:'',
      bgcolor:"warning",
    },
    {
      img: icon4,
      title:'Bank Transfer',
      subtitle:'Money added',
      rank:'+$320',
      disable:'emphasis',
      bgcolor:"primary",
    },
    {
      img: icon5,
      title:'Refund',
      subtitle:'Bill Payment',
      rank:'-$32',
      disable:'emphasis',
      bgcolor:"error",
    },
    
];


export { textCardsData, PerformanceData, PerformanceTableData,RecentTransactionData };
