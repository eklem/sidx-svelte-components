<script>
  import { SEARCH, searchResult } from './IdxStores.js'
  let promise = Promise.resolve([])

  // import EventEmitter from 'events'
  // import { inherits } from 'util'
  
  let userQuery = ''

  async function searchSimple() {
    return await SEARCH(...(userQuery.split(' ')))
      .then(results => {
        searchResult.set(JSON.stringify(results))
        console.log('query: ' + JSON.stringify(userQuery))
        console.log('results: ' + JSON.stringify(results))
        // results.forEach(function (result) {
        //   console.log(result)
        //   populateResultsDiv(result)
        // })
      })
      .catch(function (err) {
        console.log('Error while searching:')
        console.log(err)
      })
  }

  function handleClick() {
    promise = searchSimple()
  }
</script>

<div class="idxComponent">
  <h3>Simple search</h3>
  <input bind:value={userQuery} on:keyup={handleClick} aria-label="Type text to search" id="searchSimpleQuery" placeholder="Type text to search"/>
  <button id="searchSimple" on:click={handleClick}>Search</button>
  <pre class="json">{$searchResult}</pre>
</div>