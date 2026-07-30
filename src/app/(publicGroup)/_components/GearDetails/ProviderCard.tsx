import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Mail, ShieldCheck } from "lucide-react";
import { TGearDetails } from "@/types/type";
import Link from "next/link";

const ProviderCard = ({gear}: TGearDetails) => {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Provider Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Avatar className="size-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold">{gear.provider.name}</h3>

              <Badge className="gap-1">
                <ShieldCheck className="size-3.5" />
                Verified
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4" />
              {gear.provider.email}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4" />
              Member since Jan 2025
            </div>
          </div>

          <Button variant="outline">
            <Link href={`/gear`}>View More Gears</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
