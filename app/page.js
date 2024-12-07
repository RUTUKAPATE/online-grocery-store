import { Button } from "@/components/ui/button";
import Image from "next/image";
import GlobalApi from "./_utils/GlobalApi";
import Slider from "./_components/Slider";

export default async function Home() {

  const sliderList= await GlobalApi.getSliders();

  return (
    <div className="p-5 md:p-10 px-16">
      {/* Sliders */}
      <Slider sliderList={sliderList}/>
    </div>
  );
}
