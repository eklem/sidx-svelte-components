<script>  
  import { sidx, contentToIndex, contentLength } from './stores.js'
  let jsonURL
  let contentCount = 0
  let displayData = false

  async function readJSONURLData() {
    displayData = false
    fetch(jsonURL)
      .then(response => response.json())
      .then(JSONdata => {
        contentToIndex.set(JSONdata)
        contentLength.set(JSONdata.length)
        displayData = true
      })
      .catch(err => {
        console.log('Error while reading / indexing data: \n' + err.message)
      })
  }
</script>

<div class="component">
  <h3>Get JSON data from URL</h3>
  <input bind:value={jsonURL} aria-label="Add URL to JSON file containing data array" id="indexUrl" placeholder="Add URL to JSON file containing data array"/>
  <button id="getJSONContent" on:click={readJSONURLData}>Get content</button>
  <p>
    Example JSON URL:<br />
    https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json
  </p>
  {#if displayData}
    <p>Number of documents: {$contentLength}</p>
    <pre class="json">{JSON.stringify($contentToIndex, null, 2)}</pre>
  {/if}
</div>
