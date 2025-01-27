import AppSettings from "@/components/providers/app-settings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Home, Package2 } from "lucide-react";
import Link from "next/link";

export default async function SidebarSection({activePage} : {activePage: string}) {
    const routes = [
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "Products",
          url: "/products",
          icon: Package2,
        }
    ]
    
    return (
        <Sidebar className="absolute left-0 top-0 flex flex-row">
        <SidebarHeader className="flex flex-row justify-around items-center my-2 ">
            <Avatar>
                <AvatarImage src="https://cdn2.iconfinder.com/data/icons/happy-objects/512/map_marker_smile_smile_smiley_emotion_happy-512.png" />
                <AvatarFallback>Map Icon</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center items-center">
                <h1 className="pb-0 h-fit"> 
                    Hello Mohammed !
                </h1>

                <SidebarGroupLabel className="pt-0 h-fit">
                    I&apos;m Your Turuq App Navigator
                </SidebarGroupLabel>
            </div>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {routes.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                        <Link href={item.url} className={activePage == item.url ? "bg-gray-950/50 hover:bg-gray-950/50 text-white hover:text-white" : ""}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
            <AppSettings />
        </SidebarFooter>
        </Sidebar>
    );
}