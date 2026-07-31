"use client";
import { Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {

  return (
    <div id="Testimonial" className="scroll-mt-20 bg-amber-100 py-10 gap-10 min-h-100 w-full p-5 lg:p-10 flex flex-col gap-1 relative">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-amber-700 capitalize font-bold text-2xl">get in touch</p>
        <p className="capitalize text-amber-500 max-w-150 font-semibold text-md">{"Whether you're looking for the latest fashion, stylish accessories, or quality home essentials, we're here to help. Reach out to us anytime—we'd love to hear from you."}</p>
      </div>

      <div className="flex md:flex-row flex-col justify-start flex-wrap mb-10 lg:mb-0 lg:gap-20 gap-10 px-1">
        <div className="flex flex-col gap-2">
          <p className="font-bold capitalize text-amber-900 text-xl">follow us!</p>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://tiktok.com"><FaTiktok size={20} /> tiktok</a>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://tiktok.com"><FaInstagram size={20} /> instergram</a>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://tiktok.com"><FaFacebook size={20} /> facebook</a>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://tiktok.com"><FaXTwitter size={20}/> twitter</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold capitalize text-amber-900 text-xl">contact us!</p>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://w.me/2349016169729"><FaWhatsapp size={20} /> whatsapp</a>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="https://t.me/heyoise"><FaTelegramPlane size={20} /> telegram</a>
          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="mailto:oiseokugbe@gmail.com"><MdEmail size={20} /> email</a>

          <a target="_balnk" className="flex gap-1 font-bold capitalize text-amber-950 hover:underline" href="tel:09016169729"><Phone size={20}/> phone</a>
        </div>
      </div>
      <div className="absolute bottom-2 text-sm">
        <p className="font-bold text-amber-800">© 2026 TrendzBySarah. All rights reserved.</p>
        <a target="blank" href={"https://wa.me/2347026460387"} className="font-bold text-amber-950">Designed & Developed by Oise Okugbe</a>
      </div>
    </div>
  )
}
