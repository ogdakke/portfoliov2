import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
// import * as Tooltip from '@radix-ui/react-tooltip'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import Link from 'next/link'

export default function PostBody(props) {
  const { content } = props;

  const components = {
    types: {
      image: ({ value }) => {
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
          <figure>
            <a href={imgUrl} target="_blank" title={value.alt}>
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
            </a>

            <p className="px-2 text-accent-4">{value.alt}</p>
          </figure>
        );
      },
    },
  };

  return (
    <>
      <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
        <PortableText value={content} components={components} />
      </div>
    </>
  );
}

// export function Dropdown () {
//     console.log('clicked');
//     <DropdownMenu.Root>
//     <DropdownMenu.Trigger />

//     <DropdownMenu.Portal>
//       <DropdownMenu.Content>
//         <DropdownMenu.Label />
//         <DropdownMenu.Item />

//         <DropdownMenu.Group>
//           <DropdownMenu.Item />
//         </DropdownMenu.Group>

//         <DropdownMenu.CheckboxItem>
//           <DropdownMenu.ItemIndicator />
//         </DropdownMenu.CheckboxItem>

//         <DropdownMenu.RadioGroup>
//           <DropdownMenu.RadioItem>
//             <DropdownMenu.ItemIndicator />
//           </DropdownMenu.RadioItem>
//         </DropdownMenu.RadioGroup>

//         <DropdownMenu.Sub>
//           <DropdownMenu.SubTrigger />
//           <DropdownMenu.Portal>
//             <DropdownMenu.SubContent />
//           </DropdownMenu.Portal>
//         </DropdownMenu.Sub>

//         <DropdownMenu.Separator />
//         <DropdownMenu.Arrow />
//       </DropdownMenu.Content>
//     </DropdownMenu.Portal>
//   </DropdownMenu.Root>

// }
