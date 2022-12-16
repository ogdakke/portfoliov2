// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

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


// import siteConfig from './documents/siteConfig'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    author,
    page,
    route,
    portableText,
    textSection,
    siteConfig,
    simplePortableText
  ]),
})
