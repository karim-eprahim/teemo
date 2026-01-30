type Transactions={
    img: string;
    title: string;
    subtitle: string;
    statuscolor: string;
    statustext: string;
    price:string; 
    rank: string;
    rankcolor:string;
};

type RecentProjects={
    logotext:string;
    logotextcolor:string;
    logoimg: string;
    name: string;
    budgets: string;
    leader: string;
    teams: teamGroupType[];
    chart:string;
};

type teamGroupType={
    id: number;
    user: string;
    count:string;
};

/*Performance*/
type EarningReports={
    icon: string;
    subtitle: string;
    title: string;
    color: string;
    statuscolor: string;
    statustext: string;
};
export type {Transactions,RecentProjects,EarningReports}