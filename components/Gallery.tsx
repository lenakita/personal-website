import React, { useState } from "react";
import Image, { StaticImageData } from 'next/image'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface ImageProps {
  source: StaticImageData,
  alt: string,
}

// FIXME: change to a boolean: shouldIncrease
enum IncreaseOrDecrease {
  DECREASE = 0,
  INCREASE = 1,
}

interface ChangeImageProps {
  incOrDec: IncreaseOrDecrease,
  imageIdx: number,
  numImages: number,
  setImageIdx: React.Dispatch<React.SetStateAction<number>>,
}

export interface GalleryProps {
  images: ImageProps[],
}

export default function ImageGallery(images: GalleryProps): React.JSX.Element {
  // set a custom value in state: the image index
  const [imageIdx, setImageIdx] = useState(0);

  const convertedImages: React.JSX.Element[] = [];
  for (let idx = 0; idx < images.images.length; idx++) {
    convertedImages.push(
      wrapImage(images.images[idx], idx.toString())
    );
  }
  // TODO: set there to be previews of images on either side in the grid
  // also make handling columns more elegant
  return (
    <div className="mx-auto flex-auto gap-10 pr-10 pt-10">
      <table className="ml-10">
        <tbody>
          <tr>
            <td className="pr-10">
              <button onClick={() => changeImage({
                incOrDec: IncreaseOrDecrease.DECREASE,
                imageIdx: imageIdx,
                numImages: images.images.length,
                setImageIdx: setImageIdx,
              })}>
                <BsArrowLeft className="p-2 rounded-lg bg-stone-400 dark:bg-stone-700 h-10 w-10 hover:scale-125"/>
              </button>
            </td>
            <td>
              {convertedImages[imageIdx]}
            </td>
            <td className="pl-10">
              <button onClick={() => changeImage({
                incOrDec: IncreaseOrDecrease.INCREASE,
                imageIdx: imageIdx,
                numImages: images.images.length,
                setImageIdx: setImageIdx,
              })}
              >
                <BsArrowRight className="p-2 rounded-lg bg-stone-400 dark:bg-stone-700 h-10 w-10 hover:scale-125"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function wrapImage(props: ImageProps, index: string) {
  return(
    <div className="relative mx-auto bg-gradient-to-b from-emerald-400 rounded-full w-100 h-100 mt-10 overflow-hidden md:h-80 md:w-80">
      <Image id={index} alt={props.alt} fill={true} src={props.source}/>
    </div>
  )
}

function changeImage(props: ChangeImageProps) {
  // use the value from React state here to determine which image we currently have
  // React state is immutable, meaning we should use the provided mutator `setImageIdx` method
  if (props.incOrDec && props.imageIdx < props.numImages - 1) {
    props.setImageIdx(props.imageIdx + 1);
  } else if (!props.incOrDec && props.imageIdx > 0) {
    props.setImageIdx(props.imageIdx - 1);
  } else if (props.incOrDec && props.imageIdx == props.numImages - 1) {
    props.setImageIdx(0);
  } else if (!props.incOrDec && props.imageIdx == 0) {
    props.setImageIdx(props.numImages - 1);
  }
}
