<script>  
  import { contentToIndex, contentLength } from './IdxStores.js'
  let promise = Promise.resolve([])
  let jsonURL
  let contentCount = 0
  let displayData = false

  async function readJSONURLData() {
    return await fetch(jsonURL)
      .then(response => response.json())
      .then(JSONdata => {
        contentToIndex.set(JSONdata)
        contentLength.set(JSONdata.length)
        displayData = true
        console.log('async fetch finished, returning')
      })
      .catch(err => {
        console.log('Error while reading / indexing data: \n' + err.message)
      })
  }

  function handleClick() {
    // Now set it to the real fetch promise 
    displayData = false
    promise = readJSONURLData()
  }

</script>

<div class="idxComponent">
  <h3>Get JSON data from URL</h3>
  <input bind:value={jsonURL} aria-label="Add URL to JSON file containing data array" id="indexUrl" placeholder="Add URL to JSON file containing data array"/>
  <button id="getJSONContent" on:click={handleClick}>Get content</button>
  <p>
    Example JSON URL:<br />
    https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json
  </p>
  {#if displayData}
    <p>Number of documents: {$contentLength}</p>
    <pre class="json">{JSON.stringify($contentToIndex, null, 2)}</pre>
  {/if}
  {#if !displayData}
    <p>... waiting for data to be uploaded...</p>
  {/if}
</div>
