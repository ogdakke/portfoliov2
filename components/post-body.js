import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import PostImage from './post-image'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const components =  {
  types:{
    postImage: PostImage
  }

}


export default function PostBody({content, postImage}) {
  console.log(content);
  console.log(components);
  console.log(postImage);
  return (
    <>
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content}
      components={components} />
    </div>
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