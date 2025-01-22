'use client';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
  } from "@/components/ui/sidebar"
import { Home, Package2 } from "lucide-react";
import AppSettings from "../providers/app-settings";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
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

function SidebarComponent() {
    return ( 
    <Sidebar>
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
                I'm Your Turuq App Navigator
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
                    <Link href={item.url}>
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


export default function SidebarNavigator({children} : {children : ReactNode}) {
    return (
        <SidebarProvider defaultOpen={false}>
            <div className="absolute left-0 top-0 flex flex-row">
                {SidebarComponent()}
            </div>

            <SidebarTrigger 
            size="icon"
            className="
            w-14 h-14 aspect-square rounded-full
            fixed bottom-5 right-5
            bg-accent text-background hover:text-background
            border-2 border-l-0 border-sidebar-border border-l-sidebar-accent"/> 

          {children}
        </SidebarProvider>
    )
}