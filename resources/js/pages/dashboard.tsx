import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {

    const { props } = usePage();
    const ecommerceToken = props.ecommerce_token;

    const ecommerceTokenUrl = import.meta.env.VITE_ECOMMERCE_URL+`/iframe/auth/login?token=`+ecommerceToken;
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {ecommerceToken ?
            (
                <iframe
                  src={ecommerceTokenUrl}
                  style={{ display: 'none',  width: 0, height: 0, border: 0 }}
                />
              )
               : ''}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <h1 className='p-10'>Food panda stats</h1>
                </div>
            </div>
        </AppLayout>
    );
}
