import React, { useEffect } from "react";
import Image from "next/image";
import sent from "../public/Sent.svg";

const Success = () => {
  return (
    <div className="flex calc-h justify-center flex-col items-center text-center overflow-x-hidden space-x-2">
      <Image
        src={sent}
        quality={100}
        priority={true}
        objectFit="contain"
        height={350}
      />
      <span className="text-2xl">Your Form Has Been Submitted!</span>
      <span className="">Our Team Will Reach Back To You Soon!!</span>
      <span className="">Redirecting You...</span>
    </div>
  );
};

export default Success;
