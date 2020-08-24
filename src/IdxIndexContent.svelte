<script>
  import { idx, contentToIndex, contentLength, docsIndexed } from './IdxStores.js'
  let promise = Promise.resolve([])

  // Not sure why I have these, works without
  import EventEmitter from 'events'
  import { inherits } from 'util'

  async function indexJSONData() {
    return await idx.PUT($contentToIndex)
      .then(message => {
          alert('some "index finished" message')
          alert(message)
          console.log('async PUT finished, returning')
          docsIndexed.set(message)
      })
      .catch(function (err) {
        console.log('Error while indexing: \n' + err.message)
      })
  }

  function handleClick() {
    promise = indexJSONData()
  }
</script>

<div class="idxComponent">
  <h3>Index data</h3>
  {#if $contentLength != 0}
    <p>Documents to index: {$contentLength} - Documents indexed: {$docsIndexed}</p>
    <button id="getJSONContent" on:click={indexJSONData}>Add data to search index</button>
  {:else}
    <p>Need some data to index...</p>
  {/if}
</div>