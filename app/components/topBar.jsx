import Image from "next/image";
import Link from "next/link";


export default function TopBar() {

  return (
    <div className="left-0 right-0 top-0 h-20 border-b flex border-b-amber-400 fixed backdrop-blur-xl items-center px-2 lg:px-10 justify-between z-40">
      <div className="flex">
      <Image src={"/icon.png"} alt="logo" width={50} height={50} className="w-5"></Image>
        <p className="text-amber-500 font-bold capitalize flex gap-1 text-md ml-1"> trendzbysarah</p>
      </div>
      <div className="m-auto justify-center items-center flex gap-2 w-0 h-0 overflow-hidden lg:w-fit pr-10 lg:h-fit">
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"#home"}>home</Link>
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"#about"}>about</Link>
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"#collections"}>collections</Link>
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"#testemonies"}>testimonies</Link>
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"#contact us"}>contact us</Link>
        <Link className="text-slate-500 font-semibold capitalize hover:underline text-md" href={"##shop"}>shop</Link>

      </div>
      <div className="">
        <button className="text-gray-100 capitalize border border-gray-600 rounded-xl p-2 cursor-pointer bg-slate-800 hover:bg-slate-900 font-bold text-sm">shop now!</button>

        </div>
    </div>
  )
}
