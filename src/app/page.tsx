"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
 
]
export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* الصور */}
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
          {/* طبقة التعتيم */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        </div>
      ))}

      {/* محتوى الصفحة */}
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
  <h1 className="text-4xl md:text-6xl font-bold mb-7">مرحبًا بك في مكتب عبدالكريم المالكي للخدمات العامه</h1>
  <p className="text-lg md:text-2xl mb-20 text-gray-400">نحن نقدم مجموعة متكاملة من الخدمات العامة التي تلبي احتياجات الأفراد والشركات، ونسعى دائمًا لتقديم حلول فعالة ومبتكرة تضمن رضا عملائنا وتعزز من جودة تجربتهم معنا.</p>
</div>

{/* قسم في الأسفل يحتوي على dddd والزرار */}
<div className="absolute bottom-8 left-0 w-screen z-20 text-center pb-6 ">
  <div className="bg-white/55 h-24 flex items-center justify-center gap-5 px-11">
  {logos.map((logo, index) => (
    <div key={index} className="relative w-72 h-72">
      <Image
        src={logo}
        alt={`Logo ${index}`}
        fill
        className="object-contain"
      />
    </div>
  ))}
</div>

  <button className="mt-8 bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition">
    اعرف المزيد
  </button>
</div>

    </div>
  );
}
