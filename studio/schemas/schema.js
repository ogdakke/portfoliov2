// We import object and document schemas
// import blockContent from './blockContent'
import post from './post'
import author from './author'
import page from './documents/page'
import route from './documents/route'
import portableText from './Objects/portableText'
import textSection from './Objects/textSection'
import siteConfig from './documents/siteConfig'
import simplePortableText from './Objects/simplePortableText'


// Then we give our schema to the builder and provide the result to Sanity
export default [
    post,
    author,
    page,
    route,
    portableText,
    textSection,
    siteConfig,
    simplePortableText
  ]
