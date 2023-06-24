import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="absolute z-10 top-5 left-5 w-12 h-12">
        <Image src={"/Assets/logo.png"} alt="logo" width={60} height={60} />
      </div>
    </>
  );
};

export default Logo;
