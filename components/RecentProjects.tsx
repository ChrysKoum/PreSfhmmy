"use client";

import { FaLocationArrow } from "react-icons/fa6";

import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="tools" className="py-20">
      <h1 className="heading">
        Tools that will be <span className="text-purple">used</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[22.5rem] h-[18rem] flex items-center justify-center sm:w-80 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.popTitle} href="#">
              <Link href={item.link} target="_blank">
                <div className="relative flex items-center justify-center sm:w-80 w-[80vw] h-[20vh] lg:h-[20vh] mb-10">
                  <img
                    src={item.img}
                    alt="cover"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-center">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-center"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div> */}
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
