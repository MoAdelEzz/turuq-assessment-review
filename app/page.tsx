import { Card } from "@/components/ui/card";
import PageFrame from "@/components/ui/page-frame";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <PageFrame title="Dashboard">
      <div className="grid grid-cols-12 gap-5">
          <StatisticsCard className="col-span-6" title="Total Products" value="0 Items" />
          <StatisticsCard className="col-span-6" title="Out Of Stock" value="20 Items" />
          <StatisticsCard className="col-span-6" title="Low Stock" value="10 Items" />
          <StatisticsCard className="col-span-6" title="Stock Value" value="15000 EGP" />
      </div>
    </PageFrame>
  );
}


function StatisticsCard({title, value, className}: {title: string, value: string, className?: string}) {
  return (
    <Card className={cn("p-4 flex flex-col gap-5 justify-between items-center", className)}>
      <h1 className="text-xl text-accent font-bold">{title}</h1>
      <h2 className="text-md text-foreground font-bold">{value}</h2>
    </Card>
  )
}
