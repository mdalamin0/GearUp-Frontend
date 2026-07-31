import Image from "next/image";

const RegisterBanner = () => {
  return (
    <div className=" hidden lg:block overflow-hidden ">
      <Image
        src="/images/auth/auth-banner.png"
        alt="GearUp"
        width={700}
        height={700}
        loading="eager"
        className="w-full h-full object-cover object-left"
      />
    </div>
  );
};

export default RegisterBanner;
