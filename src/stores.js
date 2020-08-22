// Making possible with centrally stored (store.js) data imported and changed in components
import { writable } from 'svelte/store'
// Just the search index function
import si from 'search-index'

// Exported variables to be used (and some changed) in child components
export const sidx = si({ name: 'mySidx' })
export const contentToIndex = writable({})
export const contentLength = writable(0)
export const docsIndexed = writable(0)