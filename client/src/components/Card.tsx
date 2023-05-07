import Image from "next/image";
import React from "react";

export default function Card(props: any) {
  const { title, img, headline } = props;
  return (
    <>
      <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group">
        <div className="rounded-xl z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div>
            <div className="transform-gpu  p-4 space-y-3 text-sm md:text-lg  group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold">
                <p className="text-clip">{title}</p>
              </div>

              <div className="opacity-60 text-sm hidden lg:block">
                <p className="text-clip"> {headline}</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={img}
          alt="course"
          width="0"
          height="0"
          sizes="100vw"
          className="shrink-0 w-full h-auto rounded-t-lg"
        />
      </div>
    </>
  );
}
