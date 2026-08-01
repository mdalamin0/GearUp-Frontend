import GearGallery from '../../_components/GearDetails/GearGallery';
import GearInfo from '../../_components/GearDetails/GearInfo';
import RentCard from '../../_components/GearDetails/RentCard';
import Specifications from '../../_components/GearDetails/Specifications';
import ProviderCard from '../../_components/GearDetails/ProviderCard';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa6';
import { getGearDetails } from '../../_actions/gear/getGearDetails';
import Link from 'next/link';

const GearDetails = async({ params }: { params: Promise<{ id: string }> }) => {
   const { id } = await params;
   const gear = await getGearDetails(id);
  
  return (
    <section className="container py-12 space-y-12">
      <Button variant={"ghost"}>
        {" "}
        <Link href={"/gear"} className="flex items-center gap-2">
          <FaArrowLeft /> Back to Gears
        </Link>
      </Button>

      <div className="grid gap-12 md:grid-cols-12 ">
        <div className="md:col-span-7 space-y-16">
          <GearGallery gear={gear} />
            <Specifications gear={gear} />
        </div>

        <div className=" md:col-span-5">
          <GearInfo gear={gear} />
          <RentCard gear={gear} />
            {/* <Specifications gear={gear} /> */}
          
        </div>
      </div>

      <ProviderCard gear={gear} />
    </section>
  );
};

export default GearDetails;