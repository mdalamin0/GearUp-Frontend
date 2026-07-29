import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
};

export default PublicGroupLayout;
