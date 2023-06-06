import Image from "next/image";
import Advert from "./components/Advert";
import ListMovie from "./components/ListMovie";

export default function Home() {
  return (
    <div className="md:container md:mx-auto text-text-color">
      <Advert/>
      <ListMovie/>
    </div>
  );
}
