import Link from "next/link";
import Header from "./components/home";
import TopBar from "./components/topBar";
import Pricing from "./components/pricing";
import Collections from "./components/collections";
import About from "./components/about";

export default function App() {
  return (
    <div className="min-h-400 max-w-full">
      <TopBar/>
      <Header />
      <About/>
      <Collections />
    </div>
  );
}
