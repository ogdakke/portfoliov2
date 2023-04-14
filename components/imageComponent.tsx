import React from "react";
import { urlForImage } from "../lib/sanity";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { OpenNewWindow } from "iconoir-react";
import { Button } from "./ui/button";

export const ImageComponent = ({value}) => {
  
// get the dimensions from metadata.
const dimensions = value.asset.metadata.dimensions;
const width = dimensions.width;
const height = dimensions.height;

// we need to get the image source url, and since @sanity/image-url will give us optimised images for each instance we use it
const imgUrl = urlForImage(value.asset)
  .height(height)
  .width(width)
  .url();
return (
  <div className="flex justify-center ">
  <Dialog>
    <div>
    <DialogTrigger>
      <Image
        className="rounded-xl border 
        border-accent-5/10
        hover:border-accent-5/30
        dark:border-accent-4/10 dark:hover:border-accent-4/25 
        shadow-lg hover:shadow-xl transition-all 150ms"
        width={width}
        height={height}
        alt={value.alt}
        src={imgUrl}
        sizes="100vw"
        priority={false} //this indicates lazy(true)
        placeholder="blur"
        blurDataURL={value.asset.metadata.lqip}
        />
    </DialogTrigger>
      <p className="!mt-0  opacity-80 text-sm">{value.alt}</p>
    </div>
    <DialogContent className="!bg-transparent">
      <DialogHeader>
          <Button 
          className="py-1 px-2 left-1 top-1 justify-start max-w-fit" 
          >
            <a 
            tabIndex={2}
            className=""
              title="Open full size image" 
            href={imgUrl} target="_blank">
              <OpenNewWindow className="" width={24} height={24}/>
            </a>
          </Button>
      </DialogHeader>
      <Image 
      className="rounded-md" 
      
      src={imgUrl} 
      width={width} 
      height={height} 
      alt={value.alt} 
      priority={false} 
      placeholder="blur" 
      blurDataURL={value.asset.metadata.lqip} 
      />
    </DialogContent>
  </Dialog>
  </div>

);
}