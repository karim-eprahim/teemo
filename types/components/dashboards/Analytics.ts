import type { TablerIconComponent } from "vue-tabler-icons";

type Congratulation = {
    icon: string;
    subtitle: string;
    title: string;
    color: string;
};

type userCard = {
    img: string;
};

type ProductTable = {
    img: string;
    name: string;
    payment: string;
    paymentstatus: string;
    process: number;
    processcolor: string;
    statuscolor: string;
    statustext: string;
};

/*Table Action*/
type tableAction = {
    icon: TablerIconComponent;
    listtitle: string;
};

type UpcommingSchedule = {
    icon: string;
    iconBg: string;
    title: string;
    code: string;
    statuscolor: string;
    statustext: string;
    timeline: timelineData[];
};
type timelineData = {
    id: number;
    timelineIcon: string;
    iconcolor: string;
    title: string;
    country: string;
};

type LatestReview = {
    profile: string;
    customername: string;
    customeremail: string;
    review: number;
    reviewtext: string;
    time: string;
};

/*Sales from Locations*/
type SalesFromLocation = {
    name: string;
    percentage: string;
    color: string;
};

export type { Congratulation, userCard, ProductTable, tableAction, UpcommingSchedule, LatestReview,SalesFromLocation };
