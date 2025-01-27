import { cn } from "@/lib/utils";
import { Card } from "./card";

export default function StatisticsCard({title, value, className}: {title: string, value: string, className?: string}) {
    return (
      <Card className={cn("p-4 flex flex-col gap-5 justify-between items-center", className)}>
        <h1 className="text-xl text-accent font-bold">{title}</h1>
        <h2 className="text-md text-foreground font-bold">{value}</h2>
      </Card>
    )
  }
  