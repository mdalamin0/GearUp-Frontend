import Image from "next/image";

const RegisterBanner = () => {
  return (
    <div className="relative hidden lg:block overflow-hidden ">
      <Image
        src="/images/auth/auth-banner.png"
        alt="GearUp"
        fill
        className="object-cover object-left"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
    </div>
  );
};

export default RegisterBanner;
