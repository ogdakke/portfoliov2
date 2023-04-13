import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";

import CodeBlock from "./blocks/codeBlock";
import { ImageComponent } from "./imageComponent";
// import * as Tooltip from '@radix-ui/react-tooltip'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import Link from 'next/link'

export default function PostBody(props: { content: any; }) {
  const { content } = props;

  const components = {
    types: {
      image: ({value}) =>  {
        return <ImageComponent value={value} />
      },
      code: ({value}) => {
        return <CodeBlock data={ value } />
      }
    },
  };

  return (
    <>
      <div className={`mx-auto max-w-2xl ${markdownStyles.markdown}`}>
        <PortableText value={content} components={components} />
      </div>
    </>
  );
}
