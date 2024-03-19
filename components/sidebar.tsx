"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-promodel";

interface SidebarProps {
    isPro: boolean;
}

export const Sidebar = ({
    isPro
}: SidebarProps) => {
    const proModal = useProModal();
    const router = useRouter();
    const pathname = usePathname();

    const onNavigate = async (url: string, pro: boolean) => {
        if (pro && !isPro) {
            proModal.onOpen();
        } else {
            console.log("Navigating to:", url);
            try {
                await router.push(url);
                console.log("Navigation successful!");
            } catch (error) {
                console.error("Navigation failed:", error);
            }
        }
    };

    const routes = [
        {
            icon: Home,
            href: '/',
            label: "Home",
            pro: false,
        },
        {
            icon: Plus,
            href: '/companion/new',
            label: "Create",
            pro: false,
        },
        {
            icon: Settings,
            href: '/settings',
            label: "Settings",
            pro: false,
        },
    ];

    return (
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex-1 flex justify-center">
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div
                            onClick={() => onNavigate(route.href, route.pro)}
                            key={route.href}
                            className={cn(
                                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                pathname === route.href && "bg-primary/10 text-primary",
                            )}
                        >
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};