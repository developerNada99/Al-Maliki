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
      {/* ✅ الهيدر – لوجوهات فوق الصفحة */}
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

      {/* ✅ الخلفية والمحتوى */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* الخلفيات المتغيرة */}
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
          <h1 className="text-4xl md:text-6xl font-bold mb-7 max-md:text-4xl text-center">
            مرحبًا بك في مكتب عبدالكريم المالكي للخدمات العامه
          </h1>
          <p className="text-lg md:text-2xl mb-40 text-gray-400 text-center">
            نحن نقدم مجموعة متكاملة من الخدمات العامة التي تلبي احتياجات الأفراد والشركات، ونسعى دائمًا لتقديم حلول فعالة ومبتكرة تضمن رضا عملائنا وتعزز من جودة تجربتهم معنا
          </p>

          {/* خدمة متحركة */}
          <motion.div
  className="service flex text-3xl gap-8 whitespace-nowrap"
  animate={{ x: ["100%", "-100%"] }}
  transition={{
    duration: 60, // Increased duration for slower speed
    repeat: Infinity,
    ease: "linear",
  }}
>
  <div>خدمات الجوازات</div>
  <div>نقل معلومات جوازين</div>
  <div>تمديد بقرض التجديد</div>
  <div>تمديد بختم السفارة</div>
  <div>تمديد صلاحية 3شهور</div>
  <div>نقل مهني مربوط</div>
  <div>نقل وتعديل</div>
  <div>خدمات بلدي</div>
  <div>شهادة سلامة</div>
  <div>عقد نظافه</div>
  <div>تقرير فني</div>
  <div>شهادة صحية</div>
  <div>خدمات قوى</div>
  <div>اصدار تأشيرات</div>
  <div>نقل عمال</div>
  <div>تعديل مهنة</div>
  <div>تدبيل كرت العمل</div>
  <div>حل ملاحظة حماية الاجور</div>
</motion.div>

         <button className="bg-white text-black mt-16 py-2 px-6 rounded-full hover:bg-[#0f635c] hover:text-white transition-all duration-500 ease-in-out">
  تواصل معنا
</button>


        </div>
      </div>
    </div>
  );
}
