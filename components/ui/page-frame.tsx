import { cn } from "@/lib/utils";
import HomeNavbar from "../navigators/home-navbar";

// This Component Is Used To Specify A Sckeleton For All Pages (Global Margin)
export default function PageFrame({title, className, children} : {title: string, className?: string, children : React.ReactNode}) {
    return (
        <main className={cn("px-10 lg:px-48 py-14 w-full min-h-screen", className)}>
            <HomeNavbar />
            <h1 className="text-accent text-2xl font-bold mt-10 mb-5">{title}</h1>
            {children}
        </main>
    );
}