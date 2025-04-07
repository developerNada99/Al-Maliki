"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/photos/home_1.jpg",
  "/photos/home_2.jpg",
  "/photos/home_3.jpg",
  "/photos/home_4.jpg",
];
const logos = [
  "/photos/logo_2.svg",
  "/photos/logo_4.jpg",
  "/photos/logo_5.jpg",
  "/photos/logo_3.jpg",
  "/photos/logo_1.jpg",
  "/photos/logo_6.svg"
];

const services = [
  "خدمات الجوازات",
  "نقل معلومات جوازين",
  "تمديد بقرض التجديد",
  "تمديد بختم السفارة",
  "تمديد صلاحية 3شهور",
  "نقل مهني مربوط",
  "نقل وتعديل",
  "خدمات بلدي",
  "شهادة سلامة",
  "عقد نظافه",
  "تقرير فني",
  "شهادة صحية",
  "خدمات قوى",
  "اصدار تأشيرات",
  "نقل عمال",
  "تعديل مهنة",
  "تدبيل كرت العمل",
  "حل ملاحظة حماية الاجور",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      
      <div className="w-full z-20 bg-white">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48"
            >
              <Image
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="relative w-screen h-screen overflow-hidden">
        
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
          </div>
        ))}

        {/* محتوى الصفحة */}
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center w-full text-white">
          
          <button className="bg-white text-black mb-11 py-4 px-10 text-xl rounded-full hover:bg-[#0f635c] hover:text-white transition-all duration-500 ease-in-out">
  تواصل معنا
</button>

          
          <h1 className="text-4xl md:text-6xl font-bold mb-7 max-md:text-4xl text-center">
            مرحبًا بك في مكتب عبدالكريم المالكي للخدمات العامه
          </h1>
          <p className="text-lg md:text-2xl mb-40 text-gray-400 text-center">
            نحن نقدم مجموعة متكاملة من الخدمات العامة التي تلبي احتياجات الأفراد والشركات، ونسعى دائمًا لتقديم حلول فعالة ومبتكرة تضمن رضا عملائنا وتعزز من جودة تجربتهم معنا
          </p>

         <div className="overflow-hidden w-full bg-transparent mt-10">
      <motion.div
        className="flex text-3xl gap-16 whitespace-nowrap min-w-fit"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50, 
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...services, ...services].map((service, index) => (
          <div key={index} className="text-white">
            {service}
          </div>
        ))}
      </motion.div>
    </div>
        


        </div>
      </div>
    </div>
  );
}
