"use client";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';

export default function Collections() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
     dragFree: true,
     containScroll: "trimSnaps"
   });
  const collections = [
    {
      id: 1,
      name: "Fashion",
      image: "/collections/fashion.jpg",
      items: [
        "Dresses",
        "Tops",
        "Jeans & Trousers",
        "Skirts",
        "Two-Piece Sets",
        "Jackets",
      ],
    },
    {
      id: 2,
      name: "Bags & Accessories",
      image: "/collections/bags.jpg",
      items: [
        "Handbags",
        "Crossbody Bags",
        "Wallets",
        "Belts",
        "Jewelry",
        "Sunglasses",
      ],
    },
    {
      id: 3,
      name: "Footwear",
      image: "/collections/footwares.jpg",
      items: [
        "Heels",
        "Sneakers",
        "Sandals",
        "Flats",
        "Boots",
      ],
    },
    {
      id: 4,
      name: "Home Appliances",
      image: "/collections/appliance.jpg",
      items: [
        "Blenders",
        "Electric Kettles",
        "Rice Cookers",
        "Irons",
        "Fans",
      ],
    },
  ];
  return (
    <div id="collections" className="scroll-mt-20 bg-gray-50 py-10 gap-10 min-h-150 w-full p-5 lg:p-10 flex flex-col">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-gray-700 capitalize font-bold text-2xl">{"Discover Our Collections"}</p>
        <p className="capitalize text-gray-500 max-w-150 font-semibold text-md">{"Whether you're refreshing your wardrobe, upgrading your accessories, or shopping for practical home appliances, our collections are designed to suit your lifestyle."}</p>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
      {collections.map((data, key) => {
        return (
          <div key={key}
          className="embla__slide flex-none w-[85%] md:w-[320px]">
          <div className="flex flex-row gap-5 m-auto">
            <div className="w-70 h-100 rounded-3xl overflow-hidden border border-gray-300 relative">
              <Image src={data.image} alt="image" width={700} height={1000} className="w-full h-full z-0 object-cover pointer-events-none select-none" draggable={false}></Image>
              <div className="absolute bottom-0 p-3 z-10 bg-linear-to-t from-black to-transparent w-full min-h-20 items-center justify-center pt-10">
                  <p className="text-gray-100 capitalize font-bold text-xl">{data.name}</p>
                  {data.items.map((text, key) => {
                    return <p key={key} className="text-gray-50 capitalize font-bold text-sm">{text}</p>
                  })}
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
            }} className="rounded-full border border-slate-500 w-10 h-10 text-slate-950 cursor-pointer">←</button>
            <button onClick={() => {
              emblaApi?.scrollNext();
            }} className="rounded-full border border-slate-500 w-10 h-10 text-slate-950 cursor-pointer">→</button>
          </div>
        </div>
      </div>

      {/* <div className="h-full w-fit m-auto lg:m-0 flex items-center justify-center lg:pr-10">
        <Image src={"/about.jpg"} alt="image" width={250} height={700} className="rounded-4xl rotate-10 hover:rotate-0 transition-duration-1000"></Image>
      </div>*/}
    </div>
  )
}
