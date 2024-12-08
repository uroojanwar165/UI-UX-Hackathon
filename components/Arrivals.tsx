import React from "react";
import Image from "next/image";

export default function NewArrivals() {
  return (
       <div>
           <div className="overflow-x-hidden overflow-y-hidden flex flex-col">
               <h1 className = "w-[269px] h-[38px] mt-[47px] ml-[61px] font-extrabold text-[30px] leading-[38.4px] text-center">NEW ARRIVALS</h1>
               <div className="flex flex-row">
                   {/* box 1 */}
                   <div className="flex flex-col">
                      <div className="w-[198px] h-[200.01px] mt-[35px] ml-[16px] rounded-[13.42px] bg-[#F0EEED]">
                          <Image src={'/images/Frame 32.svg'} alt="Arrival1" width={198} height={200.01} className=" -ml-[-0.67px]"/>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="w-[198px] h-[22px] text-[14px] leading-[21.6px] font-semibold ml-[16px] mt-1">T-SHIRT WITH TAPE DETAILS</h1>
                        <div className = "w-[127px] h-[16px] ml-[16px] gap-[11px] mt-1 flex flex-row">
                              <Image src={'/images/Stars (4.5).svg'} alt="Stars" width={87} height={15.47}/>
                              <p className = "w-[29px] h-[16px] text-[12px] leading-[16.2px]">4.5/<span className="opacity-[60%]">5</span></p>
                        </div>
                        <h1 className="w-[46px] h-[27px] text-[20px] leading-[27px] font-bold ml-[16px] mt-1">$120</h1>
                      </div>
                   </div>

                    {/* box 2 */}
                    <div>
                       <div className="w-[198px] h-[200.01px] mt-[35px] ml-[16px] rounded-[13.42px] bg-[#F0EEED]">
                          <Image src={'/images/Frame 58.svg'} alt="Arrival2" width={161} height={200.01} className=" -ml-[-0.67px]"/>
                       </div>
                       <div className="flex flex-col">
                           <h1 className="w-[198px] h-[22px] text-[14px] leading-[21.6px] font-semibold ml-[16px] mt-1">SKINNY FIT JEANS</h1>
                           <div className = "w-[106.09px] h-[16px] ml-[16px] gap-[11px] mt-1 flex flex-row">
                              <Image src={'/images/Stars (3.5).svg'} alt="Stars" width={87} height={15.47}/>
                              <p className = "w-[29px] h-[16px] text-[12px] leading-[16.2px]">3.5/<span className="opacity-[60%]">5</span></p>
                           </div>
                           <div className = "flex flex-row">
                               <h1 className="w-[51px] h-[27px] text-[20px] leading-[27px] font-bold ml-[16px] mt-1">$240</h1>
                               <h1 className="w-[51px] h-[27px] text-[20px] leading-[27px] font-bold mt-1 line-through opacity-[40%]">$260</h1>
                               <button className = "w-[47px] h-[20px] px-[10px] py-[4px] gap-[12px] rounded-[62px] bg-[#FF3333] bg-opacity-[10%] mt-2">
                                  <h1 className="w-[26px] h-[14px] font-medium text-[#FF3333] text-[10px] leading-[13.5px]">-20%</h1>
                               </button>
                           </div>
                       </div>  
                   </div>
              </div>

               <button className = "w-[358px] h-[46px] mt-[40px] ml-[16px] rounded-[62px] px-[160px] py-[16px] gap-[12px] bg-[#FFFFFF] border-[1px] border-[#000000] border-opacity-[20%] ">
                  <h1 className = "w-[51px] h-[19px] font-medium text-[14px] leading-[18.9px] text-[#000000]">View All</h1>
              </button>

              <div className="w-[358px] ml-[16px] mt-[60px] border-[1px] border-[#000000] opacity-[20%] justify-center items-center"></div>
           </div>
       </div>
  );
};