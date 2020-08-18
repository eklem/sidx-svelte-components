<script>
	import EventEmitter from 'events'
	import {inherits} from 'util'

	import si from 'search-index'
	export let name

	let rawJSON

	const sidx =  si({ name: 'svelte-sidx' })

	const readJSONData = function (url) {
		console.log('soon to read JSON data')
		fetch('https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json')
			.then(response => {
				if (!response.ok) {
      		throw new Error('Network response was not ok')
				}
				return response.json()
			})
			.then(JSONdata => {
				console.log(JSON.stringify(JSONdata))
				indexJSONData(JSONdata)
			})
			.catch(err => {
				console.log('Error while reading / indexing data: \n' + err.message)
			})
	}

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

	readJSONData()
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<code>{rawJSON}</code>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>