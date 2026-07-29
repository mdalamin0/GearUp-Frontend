import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Footer from "./_components/home/Footer";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default PublicGroupLayout;
