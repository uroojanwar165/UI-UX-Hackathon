import React from "react";
import Image from "next/image";

export default function CustomersReview() {
  return (
       <div>
           <div className = "flex flex-col">
              <div className = "flex flex-row">
                  <h1 className = "w-[286px] h-[72px] mt-[47px] ml-[16px] font-extrabold text-[32px] leading-[36px] text-[#000000]">OUR HAPPY CUSTOMERS</h1>
                  <div className = "flex flex-row ml-[20px] mt-[95px] gap-2">
                       <div className="w-[24px] h-[24px]" >
                          <Image src={'/images/Left_Arrow.svg'} alt="Left_Arrow" width={15.76} height={18.75}/>
                      </div>
                       <div className="w-[24px] h-[24px]" >
                          <Image src={'/images/Right_Arrow.svg'} alt="Right_Arrow" width={15.76} height={18.75}/>
                      </div>
                  </div>
              </div>

               <div className="w-[358px] h-[186.19px] mt-[30px] ml-[16px] rounded-[20px] border-[1px] p-[24px] gap-[342px] border-[#000000] border-opacity-[10%]">
                  <div className="w-[310px] h-[138.19px] gap-[22px] flex flex-col">
                     <div className="w-[310px] h-[138.19px] gap-[12px] flex flex-col">
                        <Image src={'/images/stars (5).svg'} alt="Stars" width={118} height={19.19}/>
                        <div className="w-[310px] h-[107px] gap-[8px] flex flex-col">
                            <div className="w-[89px] h-[19px] gap-[4px] flex flex-row">
                                <h1 className = "w-[70px] h-[12px] font-bold text-[16px] leading-[22px] text-[#000000]">Sarah M.</h1>
                                <div className="w-[19px] h-[19px]">
                                    <Image src={'/images/Green tick.svg'} alt="Green tick" width={15.44} height={15.44} className="mt-[1.78px] ml-[1.78px]"/>
                                </div>
                            </div>
                            <p className = "w-[310px] h-[80px] text-[14px] leading-[20px] text-[#000000] opacity-[60%]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  );
};