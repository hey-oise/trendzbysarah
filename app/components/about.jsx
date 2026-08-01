"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.4 })
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [])
  return (
    <div ref={ref} id="about" className={`scroll-mt-20 bg-amber-100 lg:py-0 py-10 gap-10 min-h-150 w-full p-5 lg:p-10 flex flex-row lg:justify-between justify-center items-center border-b border-b-amber-800 flex-wrap transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-gray-700 capitalize font-bold text-2xl">{"More Than Fashion, It's Your Style."}</h2>
        <p className="capitalize text-amber-600 max-w-150 font-semibold text-md">{"At TrendzBySarah, we believe every outfit tells a story. That's why we carefully curate stylish, high-quality fashion that helps you feel confident wherever you go. Whether you're dressing for work, a celebration, or everyday life, we're here to make looking your best effortless."}</p>
      </div>
      <div className="h-full w-fit m-auto lg:m-0 flex items-center justify-center lg:pr-10">
        <Image src={"/about.jpg"} alt="image" width={250} height={700} className="rounded-4xl rotate-10 hover:rotate-0 transition-all duration-500"></Image>
      </div>
    </div>
  )
}
