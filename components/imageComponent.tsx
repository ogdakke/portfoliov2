import React from "react";
import { urlForImage } from "../lib/sanity";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
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
  <Dialog>
    <DialogTrigger>
      <Image
        className="rounded-xl shadow-xl"
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
    <DialogContent>
      <figure>
        <Button 
        variant={"ghost"} 
        className="absolute p-2 left-1 top-1 mix-blend-difference" 
        >
          <a 
            title="Open full size image" 
          href={imgUrl} target="_blank" rel="noopener noreferrer">
            <OpenNewWindow className=""/>
          </a>
        </Button>
      <Image 
      className="rounded-md " 
      
      src={imgUrl} 
      width={width} 
      height={height} 
      alt={value.alt} 
      priority={false} 
      placeholder="blur" 
      blurDataURL={value.asset.metadata.lqip} 
      
      />
      </figure>
    </DialogContent>
  </Dialog>
);
}