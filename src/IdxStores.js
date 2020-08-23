// Making possible with centrally stored (store.js) data imported and changed in components
import { readable, writable } from 'svelte/store'
// Just the search index function
import si from 'search-index'

// Exported variables to be used (and some changed) in child components
export let { SEARCH, AND, OR, NOT, GET, DOCUMENTS, DICTIONARY, DISTINCT, DELETE, BUCKET, BUCKETFILTER, INDEX, PUT } = si({ name: 'myIndex' })

// Data in
export const contentToIndex = writable({})
export const contentLength = writable(0)
export const docsIndexed = writable(0)

// Data out
export const searchResult = writable([])