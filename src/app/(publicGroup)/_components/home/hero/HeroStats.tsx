import { getHomeStats } from "@/app/(publicGroup)/_actions/home/getHomeStats";


const HeroStats = async() => {
  const statsData = await getHomeStats();

  const stats = [
    {
      value: `${statsData.totalGear}+`,
      label: "Gear Items",
    },
    {
      value: `${statsData.totalProviders}+`,
      label: "Providers",
    },
    {
      value: `${statsData.happyRenters}+`,
      label: "Happy Renters",
    },
    {
      value: `${statsData.averageRating}★`,
      label: "Average Rating",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
