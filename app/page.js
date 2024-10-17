import Image from "next/image";
import Banner from "./Components/Banner";
import Sponsors from "./Components/Sponsors";

export default function Home() {
  return (
    <div className="2xl:max-w-[1300px] p-5  max-w-[1000px] mx-auto overflow-hidden">
      <Banner></Banner>
      <Sponsors></Sponsors>
    </div>
  )
}
