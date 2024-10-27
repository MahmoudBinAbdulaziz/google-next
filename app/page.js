import Image from "next/image";
import HomeHeader from "@/app/components/homeHeader";
import HomeSearch from "./components/homeSearch";
import { Suspense } from "react";
// import  google  from "@/public/images/google.png";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col mt-24 items-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          }
          priority
          width={300}
          height={100}
          alt="google logo"
          style={{
            width: "auto",
          }}
        />
        <Suspense>
          <HomeSearch />
        </Suspense>
      </div>
    </>
  );
}
