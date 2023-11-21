import React from "react";

interface ImageDataProps {
  data: any;
}

// Copied from https://stackoverflow.com/a/63627688
const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
const onClickUrl =
  (url: string): (() => void) =>
  () =>
    openInNewTab(url);

const ImageData = (props: ImageDataProps) => {
  return (
    <div className="flex justify-center py-4">
      <a
        // href={props.data.url}
        onClick={onClickUrl(props.data.url)}
        // className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        className="cursor-pointer-hover inline-flex content-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <svg
          role="img"
          className="w-5 h-5 me-3"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
        </svg>
        <span className="w-full">
          {"See this image by " + props.data.name + " on Unsplash"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z" />
        </svg>
      </a>
    </div>
  );
};

export default ImageData;
