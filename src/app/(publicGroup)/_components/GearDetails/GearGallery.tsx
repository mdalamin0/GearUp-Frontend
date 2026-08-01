import { TGearDetails } from "@/types/type";
import Image from "next/image";

const GearGallery = ({gear}: TGearDetails) => {
 
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-muted">
        <Image
          src={gear.image}
          alt={gear.title}
          fill
          priority
          unoptimized
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnail Images */}
      {/* <div className="grid grid-cols-4 gap-3">
        {[
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
          "https://images.unsplash.com/photo-1522163182402-834f871fd851",
          "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        ].map((image, index) => (
          <button
            key={index}
            className="relative aspect-square overflow-hidden rounded-2xl border transition hover:ring-2 hover:ring-primary"
          >
            <Image
              src={image}
              alt={`Gear ${index + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default GearGallery;
