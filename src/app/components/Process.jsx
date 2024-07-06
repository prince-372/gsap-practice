
// 'use client'
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import { Carddata, Secondcarddata } from "./comman/Helper";
// import doted from "../../../public/image/svg/doted-line.svg";
// import downdoted from "../../../public/image/svg/down-doted-line.svg";
// import { gsap } from "gsap";

// const Process = () => {
//   const cardRefs = useRef([]);
//   const dotRefs = useRef([]);
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//     cardRefs.current.forEach((card, index) => {
//       tl.fromTo(card,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//         index * 0.3
//       );
//     });

//     dotRefs.current.forEach((dot, index) => {
//       tl.fromTo(dot,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" },
//         index * 0.3
//       );
//     });

//     lineRefs.current.forEach((line, index) => {
//       tl.fromTo(line,
//         { width: 0 },
//         { width: "100%", duration: 0.5, ease: "power2.out" },
//         index * 0.3
//       );
//     });
       
//   }, []);

//   return (
//     <div className="bg-[#0A0F1F]">
//       <div className="max-w-[1194px] mx-auto px-3">
//         <h1 className="sm:text-5xl text-4xl font-bold leading-[56px] text-white font-Inter text-center sm:pt-[130px] pt-5">
//           Our Work Process
//         </h1>
//         <div className="sm:max-w-[700px] max-w-[400px] mx-auto md:max-w-[unset]">
//           <div className="relative">
//             <div className="grid md:grid-cols-3 grid-cols-1 max-w-[1000px] mr-auto sm:pt-[64px] pt-2 lg:gap-[48px] gap-4 justify-center items-center ">
//               {Carddata.map((items, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (cardRefs.current[index] = el)}
//                   className="md:max-w-[300px] sm:max-w-[500px] max-w-[250px] w-full md:h-[190px] rounded-xl md:p-6 p-3 bg-[#101629] ml-auto md:mr-auto border-2 border-transparent"
//                 >
//                   <div>
//                     <Image src={items.image} height={40} width={40} alt="icons" />
//                     <p className="font-Inter sm:text-xl text-base font-medium text-white md:max-w-[252px] pt-6">
//                       {items.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pl-3 absolute flex flex-col top-[0%] md:flex-row justify-between md:relative max-w-[936px]">
//               <div className="border-t border-[#313543] w-full absolute left-3 top-1/2 max-w-[920px] hidden md:block" ref={(el) => (lineRefs.current[0] = el)}></div>
//               {Array(6).fill().map((_, index) => (
//                 <div key={index} ref={(el) => (dotRefs.current[index] = el)} className="max-w-[54px] relative py-[52px]">
//                   <Image className={`mx-auto ${index % 2 === 0 ? 'rotate-90 md:rotate-0 absolute md:top-0 top-1/2 -translate-y-1/2 md:translate-y-0' : '-rotate-90 md:rotate-0 absolute md:bottom-0 bottom-1/2 translate-y-1/2 md:translate-y-0'} max-md:-right-2 md:left-1/2 -translate-x-1/2`} src={index % 2 === 0 ? doted : downdoted} height={52} alt="dottedline" />
//                   <div className="w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]">
//                     <p className="text-2xl leading-[130%] text-white font-semibold">{index + 1}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="grid md:grid-cols-3 grid-cols-1 max-w-[1000px] ml-auto lg:gap-[48px] gap-4 sm:pb-[130px] pb-5 pt-4 md:pt-0">
//               {Secondcarddata.map((items, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (cardRefs.current[index + Carddata.length] = el)}
//                   className="md:max-w-[300px] sm:max-w-[500px] max-w-[250px] w-full md:h-[190px] rounded-xl md:p-6 p-3 bg-[#101629] ml-auto md:mr-auto border-2 border-transparent"
//                 >
//                   <div>
//                     <Image src={items.image} height={40} width={40} alt="icons" />
//                     <p className="font-Inter sm:text-xl text-base font-medium text-white md:max-w-[252px] pt-6">
//                       {items.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;


'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Carddata, Secondcarddata } from "./comman/Helper";
import doted from "../../../public/image/svg/doted-line.svg";
import downdoted from "../../../public/image/svg/down-doted-line.svg";
import { gsap } from "gsap";

const Process = () => {
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    cardRefs.current.forEach((card, index) => {
      tl.fromTo(card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        index * 0.3
      );

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, duration: 0.8, ease: "power2.out" });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.8, ease: "power2.out" });
      });
    });

    dotRefs.current.forEach((dot, index) => {
      tl.fromTo(dot,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" },
        index * 0.3
      );
    });

    lineRefs.current.forEach((line, index) => {
      tl.fromTo(line,
        { width: 0 },
        { width: "100%", duration: 0.5, ease: "power2.out" },
        index * 0.3
      );
    });

  }, []);

  return (
    <div className="bg-[#0A0F1F]">
      <div className="max-w-[1194px] mx-auto px-3">
        <h1 className="sm:text-5xl text-4xl font-bold leading-[56px] text-white font-Inter text-center sm:pt-[130px] pt-5">
          Our Work Process
        </h1>
        <div className="sm:max-w-[700px] max-w-[400px] mx-auto md:max-w-[unset]">
          <div className="relative">
            <div className="grid md:grid-cols-3 grid-cols-1 max-w-[1000px] mr-auto sm:pt-[64px] pt-2 lg:gap-[48px] gap-4 justify-center items-center ">
              {Carddata.map((items, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="md:max-w-[300px] sm:max-w-[500px] max-w-[250px] w-full md:h-[190px] rounded-xl md:p-6 p-3 bg-[#101629] ml-auto md:mr-auto border-2 border-transparent"
                >
                  <div>
                    <Image src={items.image} height={40} width={40} alt="icons" />
                    <p className="font-Inter sm:text-xl text-base font-medium text-white md:max-w-[252px] pt-6">
                      {items.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pl-3 absolute flex flex-col top-[0%] md:flex-row justify-between md:relative max-w-[936px]">
              <div className="border-t border-[#313543] w-full absolute left-3 top-1/2 max-w-[920px] hidden md:block" ref={(el) => (lineRefs.current[0] = el)}></div>
              {Array(6).fill().map((_, index) => (
                <div key={index} ref={(el) => (dotRefs.current[index] = el)} className="max-w-[54px] relative py-[52px]">
                  <Image className={`mx-auto ${index % 2 === 0 ? 'rotate-90 md:rotate-0 absolute md:top-0 top-1/2 -translate-y-1/2 md:translate-y-0' : '-rotate-90 md:rotate-0 absolute md:bottom-0 bottom-1/2 translate-y-1/2 md:translate-y-0'} max-md:-right-2 md:left-1/2 -translate-x-1/2`} src={index % 2 === 0 ? doted : downdoted} height={52} alt="dottedline" />
                  <div className="w-[54px] relative z-10 h-[54px] rounded-full flex items-center justify-center bg-[#112744]">
                    <p className="text-2xl leading-[130%] text-white font-semibold">{index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 max-w-[1000px] ml-auto lg:gap-[48px] gap-4 sm:pb-[130px] pb-5 pt-4 md:pt-0">
              {Secondcarddata.map((items, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index + Carddata.length] = el)}
                  className="md:max-w-[300px] sm:max-w-[500px] max-w-[250px] w-full md:h-[190px] rounded-xl md:p-6 p-3 bg-[#101629] ml-auto md:mr-auto border-2 border-transparent"
                >
                  <div>
                    <Image src={items.image} height={40} width={40} alt="icons" />
                    <p className="font-Inter sm:text-xl text-base font-medium text-white md:max-w-[252px] pt-6">
                      {items.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
