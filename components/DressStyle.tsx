import React from "react";
import Image from "next/image";

export default function DressStyle() {
  return (
      <div>
          <div className = "w-[358px] h-[975px] mt-[47px] ml-[16px] rounded-[20px] bg-[#F0F0F0] flex flex-col">
              <h1 className = "w-[246px] h-[72px] mt-[40px] ml-[56px] font-extrabold text-[32px] leading-[36px] text-[#000000] text-center">BROWSE BY DRESS STYLE</h1>
              <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] relative">
                 <h1  className="w-[76px] h-[32px] mt-[16px] ml-[24px] text-[#000000] font-bold text-[24px] leading-[32.4px] absolute">Casual</h1>
                 <Image src={'/images/image 11.svg'} alt="Dress1" width={572} height={383} className="rounded-[20px]"/>
              </div>

              <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] relative">
                 <h1  className="w-[77px] h-[32px] mt-[16px] ml-[24px] text-[#000000] font-bold text-[24px] leading-[32.4px] absolute">Formal</h1>
                 <Image src={'/images/image 13.svg'} alt="Dress2" width={709} height={472} className="rounded-[20px]"/>
              </div>

              <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] relative">
                 <h1  className="w-[59px] h-[32px] mt-[16px] ml-[24px] text-[#000000] font-bold text-[24px] leading-[32.4px] absolute">Party</h1>
                 <Image src={'/images/image 12.svg'} alt="Dress3" width={389} height={311} className="rounded-[20px]"/>
              </div>

              <div className="w-[310px] h-[190px] mt-[20px] ml-[24px] rounded-[20px] bg-[#FFFFFF] relative">
                 <h1  className="w-[53px] h-[32px] mt-[16px] ml-[24px] text-[#000000] font-bold text-[24px] leading-[32.4px] absolute">Gym</h1>
                 <Image src={'/images/image 14.svg'} alt="Dress4" width={240} height={425} className="rounded-[20px] ml-[70px]"/>
              </div>
          </div>
      </div>
  );
};