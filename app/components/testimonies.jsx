"use client";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from "lucide-react";

export default function Testimonies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
     dragFree: true,
     containScroll: "trimSnaps"
   });
  const testimonials = [
    {
      id: 1,
      name: "Daniel A.",
      image: "/testimonials/daniel.jpg",
      said: "Excellent customer service and beautiful products. I'll definitely be ordering again!",
    },
    {
      id: 2,
      name: "Chioma O.",
      image: "/testimonials/chioma.jpg",
      said: "Fast delivery, affordable prices, and amazing quality. Highly recommended!",
    },
    {
      id: 3,
      name: "Michael E.",
      image: "/testimonials/michael.jpg",
      said: "Everything arrived exactly as described. The quality exceeded my expectations.",
    },
    {
      id: 4,
      name: "Esther K.",
      image: "/testimonials/esther.jpg",
      said: "I love everything about my order. Great quality, beautiful packaging, and amazing service.",
    },
    {
      id: 5,
      name: "David O.",
      image: "/testimonials/david.jpg",
      said: "Shopping with TrendzBySarah was easy and stress-free. I'll definitely recommend it to my friends.",
    },
  ];
  const stars = [];
    for(let i = 0; i < 5; i++) {
      stars.push(<Star key={i} fill="currentColor" className="text-amber-400" size={15} />);
  };
  return (
    <div id="Testimonial" className="scroll-mt-20 bg-amber-50 py-10 gap-10 min-h-150 w-full p-5 lg:p-10 flex flex-col border-b border-amber-200 pb-10">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-gray-700 capitalize font-bold text-2xl">What Our Customers Say</p>
        <p className="capitalize text-gray-500 max-w-150 font-semibold text-md">{"We're proud to serve customers who love quality, style, and exceptional service. Here's what some of them have to say."}</p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
      {testimonials.map((data) => {
        return (
          <div key={data.id}
          className="embla__slide flex-none w-[85%] md:w-[320px]">
          <div className="flex flex-row gap-5 m-auto">
            <div className="w-80 h-100 rounded-3xl overflow-hidden border border-amber-300 relative">
              <Image src={data.image} alt="image" width={700} height={1000} className="w-full h-full z-0 object-cover pointer-events-none select-none" draggable={false}></Image>
                <div className="absolute bottom-0 p-3 z-10 bg-linear-to-t from-amber-800 to-transparent w-full min-h-20 items-center justify-center pt-10">
                  <p className="text-gray-100 capitalize font-bold text-xl">{data.name}</p>

                  <div className="flex flex-row gap-1 mb-2 ">
                    {stars}
                  </div>
                  <p className="text-gray-50 capitalize text-sm italic">{`"${data.said}"`}</p>

              </div>
            </div>
            </div>
          </div>
        )
      })}

          </div>
          <div className="flex flex-row gap-5 mt-5 justify-end">
            <button onClick={() => {
              emblaApi?.scrollPrev();
            }} className="rounded-full border border-amber-500 w-10 h-10 text-amber-950 cursor-pointer">←</button>
            <button onClick={() => {
              emblaApi?.scrollNext();
            }} className="rounded-full border border-amber-500 w-10 h-10 text-amber-950 cursor-pointer">→</button>
          </div>
        </div>
      </div>

      {/* <div className="h-full w-fit m-auto lg:m-0 flex items-center justify-center lg:pr-10">
        <Image src={"/about.jpg"} alt="image" width={250} height={700} className="rounded-4xl rotate-10 hover:rotate-0 transition-duration-1000"></Image>
      </div>*/}
    </div>
  )
}
