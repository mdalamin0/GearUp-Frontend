const stats = [
  {
    value: "150+",
    label: "Gear Items",
  },
  {
    value: "45+",
    label: "Providers",
  },
  {
    value: "1.2K+",
    label: "Happy Renters",
  },
  {
    value: "4.9★",
    label: "Average Rating",
  },
];

const HeroStats = () => {
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
