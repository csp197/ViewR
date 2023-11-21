import React from "react";
import {
  PhotoIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
// import Toast from "./Toast";

interface HeaderProps {
  prevClickFunc: () => void;
  nextClickFunc: () => void;
  slideShowFunc: () => void;
  isSliding: boolean;
  keyboardFunc: (event: any) => void;
}

function Header(props: HeaderProps) {
  let color = "indigo";
  // let slidingClassName = // Alternative incase the className kept breaking tailwind for some reason...
  //   "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  if (props.isSliding) {
    color = "violet";
    // slidingClassName =
    //   "inline-flex items-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600";
  }

  return (
    <div className="p-10 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <Transition
          appear={true}
          show={true}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-x-12"
          enterTo="opacity-100 translate-x-0"
        >
          <h1 className="flex items-center text-5xl font-poppins font-extrabold dark:text-black grid-cols-2">
            View
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              <a href="">R</a>
            </span>
            {/* <Toast /> */}
          </h1>
          </Transition>
      </div>

      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="sm:block">
          <button
            // data-tooltip-target="prev-image-tooltip"
            // data-popover-placement="bottom"
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            // onClick={() => setTimeout(props.prevClickFunc, 510)}
            onClick={props.prevClickFunc}
            onKeyDown={props.keyboardFunc}
            tabIndex={0}
          >
            <ArrowLeftCircleIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              // aria-hidden="true"
            />
            Prev Image
          </button>
          {/* <div
            id="prev-image-tooltip"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-500"
          >
            Press{" "}
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Tab
            </kbd>{" "}
            once to use{" "}
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg
                className="w-2.5 h-2.5"
                // aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
              >
                <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
              </svg>
              <span className="sr-only">left Arrow key</span>
            </kbd>{" "}
            on your keyboard to see the previous image
          </div> */}
        </span>
        <span className="ml-3 sm:block">
          <button
            // data-tooltip-target="next-image-tooltip"
            // data-tooltip-placement="top"
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            // onClick={() => setTimeout(props.nextClickFunc, 510)}
            onClick={props.nextClickFunc}
            onKeyDown={props.keyboardFunc}
            tabIndex={0}
          >
            <ArrowRightCircleIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
              // aria-hidden="true"
            />
            Next Image
          </button>
          {/* <div
            id="next-image-tooltip"
            role="tooltip"
            // className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-500"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-500"
          >
            Press{" "}
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Tab
            </kbd>{" "}
            once to use{" "}
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              <svg
                className="w-2.5 h-2.5"
                // aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
              >
                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
              </svg>
              <span className="sr-only">Arrow key right</span>
            </kbd>{" "}
            on your keyboard to see the next image
          </div> */}
        </span>
        <span className="sm:ml-3">
          <button
            // data-popover-target="slideshow-tooltip"
            // data-popover-placement="bottom"
            type="button"
            // className={slidingClassName}
            className={
              "inline-flex items-center rounded-md bg-" +
              color +
              "-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-" +
              color +
              "-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-" +
              color +
              "-600"
            }
            onClick={props.slideShowFunc}
          >
            <PhotoIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            {props.isSliding ? "Stop" : "Start"} Slideshow
          </button>

          {/* <div
            id="slideshow-tooltip"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-500"
          >
            Click to start a slideshow :)
          </div> */}
        </span>
      </div>
    </div>
  );
}

export default Header;
