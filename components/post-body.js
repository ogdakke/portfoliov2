import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import PostImage from './post-image'

export default function PostBody({ content, components }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content}
      components={
        `_type: 'image'`
        } />
    </div>
  )
}
