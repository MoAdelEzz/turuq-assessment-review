import StatisticsCard from "@/components/ui/statistics-card";
import PageFrame from "@/components/ui/page-frame";

export default function Home() {
  const cardsData = [
    {
      title: "Name",
      value: "Mohammed Adel Mohammed Ezz Eldin"
    },
    {
      title: "Age",
      value: "22"
    },
    {
      title: "Education",
      value: "Cairo University, Faculty Of Engineering"
    },
    {
      title: "Graduation Year",
      value: "2025"
    },
  ]
  return (
    <PageFrame title="Dashboard">
      <div className="grid grid-cols-12 gap-5">
        {
          cardsData.map(item => <StatisticsCard className="col-span-12 lg:col-span-6" key={item.title} title={item.title} value={item.value} />)
        }
      </div>
    </PageFrame>
  );
}

