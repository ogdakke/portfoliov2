import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import PostImage from './post-image'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function PostBody({content}) {
  return (
    <>
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content}
      components={
       {PostImage}
      } />
    </div>
    {/* <div className="flex justify-end py-4 px-8 border-t border-accent-2">
      <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="p-1 border rounded-full bg-bgPrimary hover:invert transition-all duration-200">
          <svg width="20" height="20" viewBox="1 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-accent-3" d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 5.12548 12.0077 5.24917 12.0227 5.37061L7.08259 7.84064C6.54303 7.32015 5.8089 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 13 5 13C5.80892 13 6.54306 12.6798 7.08263 12.1593L12.0227 14.6293C12.0077 14.7508 12 14.8745 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C14.1911 12 13.457 12.3201 12.9174 12.8406L7.97733 10.3706C7.9923 10.2492 8 10.1255 8 10C8 9.8745 7.99229 9.7508 7.97733 9.62934L12.9174 7.15932C13.4569 7.67984 14.1911 8 15 8Z"/>
          </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="rounded-xl m-2 backdrop-blur-lg text-accent-1 bg-accent-3 py-2 px-3" sideOffset={-5}>
            Share this article
            <Tooltip.Arrow className="fill-accent-3" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
</div> */}
    </>
  )
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