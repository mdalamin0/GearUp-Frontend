import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Camping Enthusiast",
    review:
      "The booking process was incredibly smooth, and the camping gear was in excellent condition. Highly recommended!",
  },
  {
    name: "Sarah Wilson",
    role: "Mountain Hiker",
    review:
      "Great selection of hiking equipment with affordable rental prices. The provider was friendly and professional.",
  },
  {
    name: "David Miller",
    role: "Adventure Traveler",
    review:
      "GearUp saved me from buying expensive equipment for a weekend trip. Everything was clean and ready to use.",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Testimonials
          </span>

          <h2 className="heading mt-4">What Our Customers Say</h2>

          <p className="sub-heading mt-4">
            Thousands of outdoor enthusiasts trust GearUp for reliable equipment
            rentals and exceptional service.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-7">
                &apos;{item.review}&apos;
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
