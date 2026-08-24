import { blockContent } from "./blockContent"
import { category } from "./category"
import { post } from "./post"

/**
 * The document and object types the Studio loads.
 *
 * There is no author type: the blog has one byline, and it already exists as
 * the canonical Person in the site's linked data (src/data/person.ts). A second
 * copy in the CMS would only be one more thing to keep in sync.
 */
export const schemaTypes = [post, category, blockContent]
