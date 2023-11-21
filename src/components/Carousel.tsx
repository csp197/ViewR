import React from "react";
import { up_arrow } from "../assets/index";
import { Tooltip } from "react-tooltip";

interface CarouselProps {
  imageArr: {
    thumb: any;
    image: any;
    metadata: {
      name: string;
      url: string;
      height: number;
      width: number;
    };
  }[];
  activeIndex: number;
  thumbnailClickFunc: (idx: any) => void;
}

const Carousel = (props: CarouselProps) => {
  return (
    <>
      <div className="relative z-0 grid auto-cols-[10rem] grid-flow-col gap-4 overflow-x-auto pt-2">
        {props.imageArr.map((image: any, idx: number) => (
          // <div key={"div_" + idx} className="grid">
          <div key={"div_" + idx} className="group col-span-1 cursor-pointer">
            <div className="flex w-full flex-col gap-2">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <img
                  data-tooltip-id="carousel-tooltip"
                  data-tooltip-content={idx.toString()}
                  data-img-artist-name={image.metadata.name}
                  data-tooltip-place="bottom"
                  //
                  // data-tooltip-target="carousel-tooltip"
                  // data-tooltip-placement="bottom"
                  // key={"img_" + idx}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                  // className="cursor-pointer-hover container rounded-lg object-cover max-h-20" //  object-scale-down max-h-20
                  src={image.thumb}
                  onClick={() => props.thumbnailClickFunc(idx)}
                />
              </div>
              {idx === props.activeIndex ? (
                <img
                  key={"arrow_" + idx}
                  src={up_arrow}
                  className="justify-self-center object-contain max-h-3" //  object-scale-down max-h-3
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
      <Tooltip
        id="carousel-tooltip"
        arrowColor="transparent"
        render={({ activeAnchor }) => (
          <span
          // className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Click to view{" "}
            {activeAnchor?.getAttribute("data-img-artist-name") || "this dude"}
            's image
          </span>
        )}
      />
    </>
  );
};

export default Carousel;
