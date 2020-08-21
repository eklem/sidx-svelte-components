<script>
  let jsonURL
  function readJSONData(jsonURL) {
    console.log('soon to read JSON data')
    fetch(jsonURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(JSONdata => {
        console.log(JSON.stringify(JSONdata))
      })
      .catch(err => {
        console.log('Error while reading / indexing data: \n' + err.message)
      })
  }
</script>

<div>
  <input bind:value={jsonURL} aria-label="Add URL to JSON file containing data array" id="indexUrl" placeholder="Add URL to JSON file containing data array"/>
  <button id="getJSONContent" on:click={readJSONData(jsonURL)}>Get content</button>
  <p>https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json</p>
  <pre>{jsonURL}</pre>
</div>

<style>
  div {
    padding: 10px;
    background:#eeeeee;
    margin:10px;
  }
</style>