'use client';

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ThemeType } from "@/lib/types";

export default function AppSettings() {

    const [theme, setTheme] = useState<ThemeType>("LIGHT");

    const initializeApp = () => {
        const savedTheme = (localStorage.getItem("theme") ?? "LIGHT") as ThemeType;
        setTheme(savedTheme);
    }

    const changeTheme = () => {
        const nextTheme : ThemeType =  theme == "DARK" ? "LIGHT" : "DARK";
        document.body.classList.remove("light", "dark");
        document.body.classList.add(nextTheme.toLocaleLowerCase());
        setTheme(nextTheme);
    }

    useEffect( () => { initializeApp() }, [])

    return (
        <Button onClick={changeTheme} className="rounded-full aspect-square w-fit bg-sidebar-accent text-sidebar-accent-foreground border-2 border-sidebar-accent-foreground hover:bg-sidebar-accent">
            { theme == "DARK" ? <Sun/> : <Moon/> }
        </Button>
    );
}