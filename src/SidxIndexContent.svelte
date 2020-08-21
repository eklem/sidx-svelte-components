<script>
  const indexJSONData = function (data) {
    console.log('soon indexing data')
    sidx.PUT(data)
      .then(message => {
        if (!message) {
          throw new Error('No return message from indexing')
        } else {
          console.log('Data indexed. Number of documents indexed: ' + message)
          return message
        }
      })
      .catch(function (err) {
        console.log('Error while indexing: \n' + err.message)
      })
  }
</script>