<script>
  import { sidx, contentToIndex, contentLength, docsIndexed } from './stores.js'
  // Not sure why I have these, works without
  // import EventEmitter from 'events'
  // import { inherits } from 'util'

  const indexJSONData = function () {
    sidx.PUT($contentToIndex)
      .then(message => {
          console.log('Something?')
          docsIndexed.set(message)
          console.log('docs indexed: ' + message)
      })
      .catch(function (err) {
        console.log('Error while indexing: \n' + err.message)
      })
  }
</script>

<div class="component">
  <h3>Index data</h3>
  {#if $contentLength != 0}
    <p>Documents to index: {$contentLength}</p>
    <button id="getJSONContent" on:click={indexJSONData}>Add data to search index</button>
  {:else}
    <p>Need some data to index...</p>
  {/if}
</div>