"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 })
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [])
  return (
    <div ref={ref} id="home" className={`scroll-mt-20 bg-amber-50 lg:min-h-150 h-120 w-full p-5 lg:p-10 flex flex-row justify-between items-center border-b border-b-gray-800 mt-15 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-3xl capitalize font-bold text-amber-800">Fashion That Defines Your Confidence.</h1>
          <p className="capitalize text-amber-600 max-w-150 font-semibold text-md">{"Discover timeless pieces and trending styles designed to help you express yourself every day. From casual essentials to statement outfits, TrendzBySarah brings fashion you'll love to wear."}</p>
        <div className="mt-5 flex gap-3">
          <Link href={"#about"} className="text-amber-700 capitalize border border-gray-800 rounded-xl p-3 cursor-pointer hover:bg-amber-300  transition-all duration-500 font-bold">learn more</Link>

          <Link href={"https://wa.me/2349016109729"} className="text-gray-100 capitalize border border-gray-600 rounded-xl p-3 cursor-pointer bg-amber-600 hover:bg-amber-700 font-bold  transition-all duration-500">shop now!</Link>
        </div>
      </div>
      <div className="lg:h-full w-0 lg:w-fit flex items-center lg:justify-center lg:pr-10">
        <Image src={"/header.jpg"} alt="image" width={250} height={700} className="rounded-4xl rotate-10 hover:rotate-0  transition-all duration-500"></Image>
      </div>
    </div>
  )
}
