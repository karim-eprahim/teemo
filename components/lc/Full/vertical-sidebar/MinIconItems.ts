
export interface minisidebar {
    icon?: string;
    id?:number;
    tooltip?:string
}
const MiniSideIcons: minisidebar[] = [
    {
        icon: 'layers-line-duotone',
        tooltip:'Dashboards',
        id: 1
    },
    {
        icon: 'users-group-rounded-broken',
        tooltip:'Accounts',
        id: 2,
    },
    {
        icon: 'notes-line-duotone',
        tooltip:'Pages',
        id: 3,
    },
    {
        icon: 'palette-round-line-duotone',
        tooltip:'Forms',
        id: 4
    },
    {
        icon:'align-vertical-spacing-broken',
        tooltip:'Tables',
        id: 5
    },
    {
        icon:'chart-line-duotone',
        tooltip:'Charts',
        id: 6
    },
    {
        icon:'widget-6-line-duotone',
        tooltip:'UI Components',
        id: 7
    },
    {
        icon:'lock-keyhole-line-duotone',
        tooltip:'Authentication Pages',
        id: 8
    },
    {
        icon:'mirror-left-line-duotone',
        tooltip:'Others',
        id: 9
    },
    {
        icon:'menu-dots-bold-duotone',
        tooltip:'More Options',
        id: 10
    },
    {
        icon:'settings-line-duotone',
        tooltip:'Settings',
        id: 11
    }
]

export default MiniSideIcons;
