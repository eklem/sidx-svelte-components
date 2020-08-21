<script>  
  let jsonURL
  let contentToIndex
  let contentCount = 0
  let displayData = false

  async function readJSONURLData() {
    fetch(jsonURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(JSONdata => {
        contentToIndex = JSON.stringify(JSONdata, null, 2)
        contentCount = JSONdata.length
        displayData = true
      })
      .catch(err => {
        console.log('Error while reading / indexing data: \n' + err.message)
      })
  }
</script>

<div>

  <h3>Get JSON data from URL</h3>
  <input bind:value={jsonURL} aria-label="Add URL to JSON file containing data array" id="indexUrl" placeholder="Add URL to JSON file containing data array"/>
  <button id="getJSONContent" on:click={readJSONURLData}>Get content</button>
  <p>
    Example JSON URL:<br />
    https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json
  </p>
  {#if displayData}
  <p>Number of documents: {contentCount}</p>
  <pre>{contentToIndex}</pre>
  {/if}
</div>

<style>
  div {
    padding: 15px;
    background:#eeeeee;
  }
  pre {
    height:10rem;
    overflow:scroll;
    background:#dddddd;
    padding:5px;
    margin-bottom:0;
  }
</style>