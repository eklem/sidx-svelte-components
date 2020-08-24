<script>
  import EventEmitter from 'events'
  import { inherits } from 'util'
  import si from 'search-index'
  let promise = Promise.resolve([])

  const idx = si({ name: 'appSvelte' })

  const data = [
    {
      _id: 'a',
      title: 'quite a cool document',
      body: {
        text: 'this document is really cool cool cool',
        metadata: 'coolness documentness'
      },
      importantNumber: 5000
    },
    {
      _id: 'b',
      title: 'quite a cool document',
      body: {
        text: 'this document is really cool bananas',
        metadata: 'coolness documentness'
      },
      importantNumber: 500
    },
    {
      _id: 'c',
      title: 'something different',
      body: {
        text: 'something totally different',
        metadata: 'coolness documentness'
      },
      importantNumber: 200
    }
  ]

  console.log(data)

  async function putAndSearch() {
    await idx.PUT(data)
      .then(function(message) {
        console.log('db.PUT: ' + message)
      })
      .then(function() {
        idx.SEARCH('title:something')
        .then(function(results) {
          console.log('searching query \'title:something\', results: \n' + JSON.stringify(results))
        })
      })
      .catch(function (err) {
        console.log('Error while db.PUT:')
        console.error(err)
      })
  }
  function handleClick() {
    promise = putAndSearch()
  }
</script>

<button on:click={putAndSearch}>index and search</button>