import type {
    Congratulation,
    userCard,
    ProductTable,
    tableAction,
    UpcommingSchedule,
    LatestReview,
    SalesFromLocation
} from '@/types/components/dashboards/Analytics';

import user1 from '/images/profile/user-2.jpg';
import user2 from '/images/profile/user-3.jpg';
import user3 from '/images/profile/user-4.jpg';
import user4 from '/images/profile/user-5.jpg';


const CongratulationCard: Congratulation[] = [
    {
        icon: 'cart-4-line-duotone',
        title: '64 new orders',
        subtitle: 'Processing',
        color: 'primary'
    },
    {
        icon: 'checklist-minimalistic-line-duotone',
        title: '4 orders',
        subtitle: 'On hold',
        color: 'error'
    },
    {
        icon: 'banknote-line-duotone',
        title: '12 orders',
        subtitle: 'Delivered',
        color: 'success'
    }
];

const userCardData: userCard[] = [{ img: user4 }, { img: user3 }, { img: user2 }, { img: user1 }];

//Products Table
import product1 from '/images/products/s1.jpg';
import product2 from '/images/products/s2.jpg';
import product3 from '/images/products/s3.jpg';
import product4 from '/images/products/s4.jpg';
import product5 from '/images/products/s5.jpg';
import { EditIcon, PlusIcon, TrashIcon } from 'vue-tabler-icons';

const ProductTableData: ProductTable[] = [
    {
        img: product1,
        name: 'iPhone 13 pro max-Pacific Blue-128GB storage',
        payment: '$180',
        paymentstatus: 'Partially paid',
        process: 45,
        processcolor: 'warning',
        statuscolor: 'secondary',
        statustext: 'Confirmed'
    },
    {
        img: product2,
        name: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
        payment: '$120',
        paymentstatus: 'Full paid',
        process: 100,
        processcolor: 'success',
        statuscolor: 'success',
        statustext: 'Confirmed'
    },
    {
        img: product3,
        name: 'PlayStation 5 DualSense Wireless Controller',
        payment: '$120',
        paymentstatus: 'Cancelled',
        process: 100,
        processcolor: 'error',
        statuscolor: 'error',
        statustext: 'Cancelled'
    },
    {
        img: product5,
        name: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
        payment: '$120',
        paymentstatus: 'Partially paid',
        process: 45,
        processcolor: 'warning',
        statuscolor: 'secondary',
        statustext: 'Confirmed'
    },
    {
        img: product4,
        name: 'Sony X85J 75 Inch Sony 4K Ultra HD LED Smart',
        payment: '$120',
        paymentstatus: 'Full paid',
        process: 100,
        processcolor: 'success',
        statuscolor: 'success',
        statustext: 'Confirmed'
    }
];

/*Table Action*/
const tableActionData: tableAction[] = [
    {
        icon: PlusIcon,
        listtitle: 'Add'
    },
    {
        icon: EditIcon,
        listtitle: 'Edit'
    },
    {
        icon: TrashIcon,
        listtitle: 'Delete'
    }
];

/*--Upcomming Schedule Data --*/
const UpcommingScheduleData: UpcommingSchedule[] = [
    {
        icon: 'scooter-line-duotone',
        iconBg: 'warning',
        title: 'Scooter Freight',
        code: '#1245-456201',
        statustext: 'Delivered',
        statuscolor: 'success',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'Drainage',
                country: 'United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'The lowland zone',
                country: 'United Kingdom'
            }
        ]
    },
    {
        icon: 'bus-line-duotone',
        iconBg: 'primary',
        title: 'Bus Freight',
        code: '#9002-125423',
        statustext: 'Delivered',
        statuscolor: 'success',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'primary',
                title: 'Messina Harbor',
                country: 'Sicily, Italy'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'primary',
                title: 'Hektor Container Hotel',
                country: 'Tallin, EST'
            }
        ]
    },
    {
        icon: 'tram-linear',
        iconBg: 'secondary',
        title: 'Train Freight',
        code: '#1245-780652',
        statustext: 'Delivered',
        statuscolor: 'success',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'secondary',
                title: 'Messina Harbor',
                country: 'Lester, United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'secondary',
                title: 'Laxmi Empire Hotel',
                country: 'Mumbai, India'
            }
        ]
    }
];

const UpcommingScheduleShipData: UpcommingSchedule[] = [
    {
        icon: 'tram-linear',
        iconBg: 'secondary',
        title: 'Train Freight',
        code: '#1245-780652',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'secondary',
                title: 'Messina Harbor',
                country: 'Lester, United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'secondary',
                title: 'Laxmi Empire Hotel',
                country: 'Mumbai, India'
            }
        ]
    },
    {
        icon: 'scooter-line-duotone',
        iconBg: 'warning',
        title: 'Scooter Freight',
        code: '#1245-456201',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'Drainage',
                country: 'United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'The lowland zone',
                country: 'United Kingdom'
            }
        ]
    },
    {
        icon: 'bus-line-duotone',
        iconBg: 'primary',
        title: 'Bus Freight',
        code: '#9002-125423',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'primary',
                title: 'Messina Harbor',
                country: 'Sicily, Italy'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'primary',
                title: 'Hektor Container Hotel',
                country: 'Tallin, EST'
            }
        ]
    }
];

const LatestReviewData: LatestReview[] = [
    {
        profile: user1,
        customername: 'Arlene McCoy',
        customeremail: 'macoy@arlene.com',
        review: 3.5,
        reviewtext: 'This theme is great. Clean and easy to understand. Perfect for those who don t havetime to',
        time: 'Nov 8'
    },
    {
        profile: user2,
        customername: 'Jerome Bell',
        customeremail: 'belljerome@yahoo.com',
        review: 4,
        reviewtext: 'It is a Mac, after all. Once you have gone Mac,there s no going back. My first Maclastedover nine years',
        time: 'Nov 8'
    },
    {
        profile: user3,
        customername: 'Jacob Jones',
        customeremail: 'jones009@hotmail.com',
        review: 3.5,
        reviewtext: ' The best experience we could hope for.Customer service team is amazing and thequality of their products',
        time: 'Nov 8'
    },
    {
        profile: user4,
        customername: 'Annette Black',
        customeremail: 'blackanne@yahoo.com',
        review: 3.5,
        reviewtext: ' The controller is quite comfy for me. Despiteits increased size, the controller still fits well',
        time: 'Nov 8'
    }
];

const SalesFromLocationData: SalesFromLocation[] = [
    {
        name: 'LA',
        percentage: '28%',
        color: 'primary'
    },
    {
        name: 'NY',
        percentage: '21%',
        color: 'secondary'
    },
    {
        name: 'KA',
        percentage: '18%',
        color: 'warning'
    },
    {
        name: 'AZ',
        percentage: '12%',
        color: 'error'
    }
];

export {
    CongratulationCard,
    userCardData,
    ProductTableData,
    tableActionData,
    UpcommingScheduleData,
    UpcommingScheduleShipData,
    LatestReviewData,
    SalesFromLocationData
};
