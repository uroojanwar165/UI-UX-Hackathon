import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
   <div>
      <div className = "w-[390px] h-[853px] mt-[44px] bg-[#F2F0F1] flex flex-col">
          <h1 className = "w-[315px] h-[93px] mt-[40px] ml-[16px] font-extrabold text-[36px] leading-[34px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1> 
          <p className = "w-[358px] h-[50px] mt-[30px] ml-[16px] text-[14px] leading-[20px] opacity-[60%]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className = "w-[358px] h-[52px] mt-[30px] ml-[16px] rounded-[62px] px-[140px] py-[16px] gap-[12px] bg-[#000000]">
              <h1 className = "w-[75px] h-[22px] font-medium text-[16px] leading-[21.6px] text-[#FFFFFF]">Shop Now</h1>
          </button>
          <div className = "flex flex-col" >
              {/* Row1 */}
             <div className = "[w-278px] h-[52px] mt-[40px] ml-[56px] flex flex-row justify-between mr-12">
                  <div className = "w-[106px] h-[48px] flex flex-col">
                      <h1 className = "w-[64px] h-[32px] font-bold text-[24px] leading-[32.4px]">200+</h1>
                      <p className = "w-[116px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">International Brands</p>
                   </div>
                   <div className = "h-[52px] border-[1px] border-[#000000] opacity-[10%]"></div>
                   <div className = "w-[117px] h-[48px] flex flex-col">
                      <h1 className = "w-[88px] h-[32px] font-bold text-[24px] leading-[32.4px]">2,000+</h1>
                      <p className = "w-[117px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">High-Quality Products</p>
                   </div>
               </div>
               {/* Row2 */}
               <div>
                   <div className = "w-[103px] h-[48px] mt-[24px] ml-[144px] flex flex-col">
                      <h1 className = "w-[103px] h-[32px] font-bold text-[24px] leading-[32.4px]">30,000+</h1>
                      <p className = "w-[100px] h-[22px] text-[12px] leading-[22px] opacity-[60%]">Happy Customers</p>
                   </div>
               </div>
          </div>
            {/* Picture */}
          <div className = "w-[390px] h-[448px] bg-[#F2F0F1] relative">
             <Image src={'/images/Hero_Star.svg'} alt="Hero_star" width={76} height={76} className = "ml-[293px] mt-[50px] absolute" />
             <Image src={'/images/Hero_Star.svg'} alt="Hero_star" width={44} height={44} className = "ml-[27px] mt-[150px] absolute" />
             <Image src={'/images/Hero_Image.png'} alt="Hero_Image" width={390} height={448} className="mt-[20px]"/>
          </div>
      </div>
    
      <div className = "w-[390px] h-[146px] mt-[72px] bg-[#000000]">
        <div className = "flex flex-col">
            <div className = "flex flex-row mt-[20px] gap-4">
                <div className = "w-[116.74px] h-[23.25px] mt-[20px] ml-[16px]">
                    <Image src={'/images/Versace.svg'} alt="Versace" width={116.74} height={23.25}/>
                </div>
                <div className = "w-[63.81px] h-[26.65px] mt-[20px] ml-[16px]">
                    <Image src={'/images/Zara.svg'} alt="Zara" width={63.81} height={26.63}/> 
                </div>
                <div className = "w-[109.39px] h-[25.24px] mt-[20px] ml-[16px]">
                    <Image src={'/images/Gucci.svg'} alt="Gucci" width={109.39} height={22.64}/>
                </div>
            </div>
            <div className = "flex flex-row">
               <div className = "w-[127px] h-[21px] mt-[20px] ml-[50px]">
                    <Image src={'/images/Prada.svg'} alt="Prada" width={127} height={20.47}/>
                </div>
                <div className = "w-[134.84px] h-[21.75px] mt-[20px] ml-[20px]">
                    <Image src={'/images/Calvin Klien.svg'} alt="Calvin Klien" width={134.84} height={21.75}/> 
                </div>
            </div>
        </div>
      </div>
   </div>
  );
};