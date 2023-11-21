import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slide from "./components/Slide";
// import { useTimeoutFn } from "react-use";
import Carousel from "./components/Carousel";
import ImageService from "./components/ImageService";
import ImageData from "./components/ImageData";
import {randomIntFromInterval, shuffle} from "./utils";

function App() {
  const imageList = [
    {
      thumb: "https://picsum.photos/id/351/3994/2443",
      image: "https://picsum.photos/id/351/3994/2443",
      metadata: {
        name: "Rafael Fabricio",
        url: "https://unsplash.com/photos/nKRVmvjW3rE",
        height: 2443,
        width: 3994,
      },
    },
    {
      thumb: "https://picsum.photos/id/604/2511/1671",
      image: "https://picsum.photos/id/604/2511/1671",
      metadata: {
        name: "Chelsea Francis",
        url: "https://unsplash.com/photos/xVHr4B1WApk",
        height: 1671,
        width: 2511,
      },
    },
    {
      thumb: "https://picsum.photos/id/41/1280/805",
      image: "https://picsum.photos/id/41/1280/805",
      metadata: {
        name: "Nithya Ramanujam",
        url: "https://unsplash.com/photos/fTKetYpEKNQ",
        height: 805,
        width: 1280,
      },
    },
    {
      thumb: "https://picsum.photos/id/598/2365/1774",
      image: "https://picsum.photos/id/598/2365/1774",
      metadata: {
        name: "Pawel Kadysz",
        url: "https://unsplash.com/photos/5DdcKr2pxos",
        height: 2365,
        width: 1774,
      },
    },
    {
      thumb: "https://picsum.photos/id/758/3333/5000",
      image: "https://picsum.photos/id/758/3333/5000",
      metadata: {
        name: "Eli DeFaria",
        url: "https://unsplash.com/photos/IN6KPUe8j04",
        height: 5000,
        width: 3333,
      },
    },
    {
      thumb: "https://picsum.photos/id/244/4288/2848",
      image: "https://picsum.photos/id/244/4288/2848",
      metadata: {
        name: "Yair Hazout",
        url: "https://unsplash.com/photos/Y-eIZ3g8_ko",
        height: 2848,
        width: 4288,
      },
    },
    {
      thumb: "https://picsum.photos/id/53/1280/1280",
      image: "https://picsum.photos/id/53/1280/1280",
      metadata: {
        name: "J Duclos",
        url: "https://unsplash.com/photos/6qORI5j_6n8",
        height: 1280,
        width: 1280,
      },
    },
    {
      thumb: "https://picsum.photos/id/278/5000/3333",
      image: "https://picsum.photos/id/278/5000/3333",
      metadata: {
        name: "Taylor Leopold",
        url: "https://unsplash.com/photos/6QQqqvq4R9A",
        height: 3333,
        width: 5000,
      },
    },
    {
      thumb: "https://picsum.photos/id/118/1500/1000",
      image: "https://picsum.photos/id/118/1500/1000",
      metadata: {
        name: "Rick Waalders",
        url: "https://unsplash.com/photos/d-Cr8MEW5Uc",
        height: 1000,
        width: 1500,
      },
    },
    {
      thumb: "https://picsum.photos/id/674/3888/2592",
      image: "https://picsum.photos/id/674/3888/2592",
      metadata: {
        name: "Maja Petric",
        url: "https://unsplash.com/photos/vGQ49l9I4EE",
        height: 2592,
        width: 3888,
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDuration] = useState(3000);
  const [fetchDuration, setFetchDuration] = useState(1000);
  const [sliding, setSliding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(shuffle(imageList));
  // const [transition, setTransition] = useState(true);
  // const [, , resetTransition] = useTimeoutFn(() => setTransition(true), 500);
  // const [isLeft, setIsLeft] = useState(false);

  const nextClick = () => {
    // setIsLeft(false);
    let currIndex = -1;
    if (activeIndex === images.length - 1) {
      currIndex = 0;
    } else {
      currIndex = activeIndex + 1;
    }
    // setTransition(false);
    // resetTransition();
    setActiveIndex(currIndex);
  };

  const prevClick = () => {
    // setIsLeft(true);
    let currIndex = -1;
    if (activeIndex === 0) {
      currIndex = images.length - 1;
    } else {
      currIndex = activeIndex - 1;
    }
    // setTransition(false);
    // resetTransition();
    setActiveIndex(currIndex);
  };

  const thumbnailClick = (idx) => {
    setActiveIndex(idx);
  };

  const slide = () => {
    setSliding(!sliding);
  };

  useEffect(() => {
    if (loading) {
      const delay = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(delay);
    }
    if (sliding) {
      const interval = setInterval(nextClick, slideDuration);
      return () => clearInterval(interval);
    }
    const interval = setInterval(fetchNewImages, fetchDuration);
    // if (images.length === 0 || activeIndex === images.length - 1) {
    //   fetchNewImages();
    // }
    return () => clearInterval(interval);
  });

  function fetchNewImages() {
    ImageService()
      .then((res) => {
        let newState = images;
        res.map((obj) =>
          // console.log(obj) &&
          newState.push({
            thumb: obj.download_url,
            image: obj.download_url,
            metadata: {
              name: obj.author,
              url: obj.url,
              height: obj.height,
              width: obj.width,
            },
          })
        );
        setImages(newState);
        setFetchDuration(fetchDuration + randomIntFromInterval(1000, 2000));
      })
      .catch((err) => console.log(err));
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      nextClick();
    } else if (event.key === "ArrowLeft") {
      prevClick();
    }
  }

  // let new_imagesList = [];
  // const new_images = ImageService();
  // new_images.then(data => new_imagesList.push(data))
  // new_imagesList.push(1)
  // console.log(new_imagesList);

  return (
    <>
      <Header
        prevClickFunc={prevClick}
        nextClickFunc={nextClick}
        slideShowFunc={slide}
        isSliding={sliding}
        keyboardFunc={handleKeyDown}
      />
      <Slide
        loadSkeleton={loading}
        catalogImage={images[activeIndex].image}
        metadata={images[activeIndex].metadata}
        // transition={transition}
        // isLeft={isLeft}
      />
      <ImageData data={images[activeIndex].metadata} />
      <Carousel
        imageArr={images}
        activeIndex={activeIndex}
        thumbnailClickFunc={thumbnailClick}
      />
    </>
  );
}

export default App;
