import React from "react";
import Image from "next/image";
// import {Satoshi} from "next/font/google";

// const satoshi = Satoshi ({
//     subsets: ["latin"] ,
//     weight : ["500"]
// })

export default function TopHeader() {
  return (
   <div className = "w-[390px] h-[34px] px-[40px] py-[9px] gap-[10px] text-[#FFFFFF] bg-[#000000]">
        <p className = "w-[301px] h-[16px] text-[12px] leading-[16.2px] text-center">Sign up and get 20% off to your first. <span className = "font-medium underline">Sign Up Now</span> </p>
   </div>
  );
};