type textCards = {
    icon: string,
    num: string,
    percent: string,
    title: string,
    shape:string,
    bgcolor:string
}


/*Performance*/
type Performance={
    icon: string;
    subtitle: string;
    title: string;
    color: string;
};


/*performaance Table*/
type PerformanceTable={
    techicon: any;
    imgBg:string;
    img: string;
    leadname: string;
    subtext: string;
    statuscolor: string;
    statustext: string;
    sales: string;
    earnings: string;
    technology:techGroupType[];
};
type techGroupType={
    id: string;
    icon: string;
};

/*RecentTransaction */
type RecentTransaction = {
    img: string;
    title: string;
    subtitle: string;
    rank: string;
    disable: string;
    bgcolor: string;
};


export type {textCards,Performance,PerformanceTable,RecentTransaction}