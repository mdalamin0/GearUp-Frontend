import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TGearDetails } from "@/types/type";


const Specifications = ({gear}: TGearDetails) => {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Specifications</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(gear.specifications).map(([key, value]) => (
            <div key={key} className="rounded-2xl border bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">{key}</p>

              <p className="mt-1 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Specifications;
