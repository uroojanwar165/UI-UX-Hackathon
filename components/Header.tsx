import React from "react";
import Image from "next/image";

export default function Header() {
  return (
   <div className = "flex flex-row">
        <div className = "w-[24px] h-[24px] mt-[54px] ml-[16px]">
            <Image src={'/images/MenuBar.svg'} alt="MenuBar" width={18.75} height={14.25} className = "mt-[4.88px] ml-[2.63px]"/>
        </div>
        <h1 className = "w-[126px] h-[18px] mt-[50px] ml-[36px] font-extrabold text-[25.5px] leading-[30.2px]">SHOP.CO</h1>
        <div className = "w-[96px] h-[24px] gap-[12px] mt-[54px] ml-[78px] flex">
           <div className = "w-[24px] h-[24px]">
               <Image src={'/images/SearchIcon.svg'} alt="SearchIcon" width={20.27} height={20.27} className = "mt-[1.86px] ml-[1.86px]"/>
           </div>
           <div className = "w-[24px] h-[24px]">
              <Image src={'/images/Cart.svg'} alt="Cart" width={22.13} height={20.25} className = "mt-[1.88px]"/>
           </div>
           <div className = "w-[24px] h-[24px]">
              <Image src={'/images/User.svg'} alt="User" width={20.25} height={20.25} className = "mt-[1.88px] ml-[1.88px]"/>
           </div>
       </div> 
   </div>
  );
};